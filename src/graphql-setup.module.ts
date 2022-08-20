import { Module } from '@nestjs/common';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AgencyModule } from './agency/agency.module';
import { SystemModule } from './system/system.module';
import { ElectionModule } from './election/election.module';
import { CandidateModule } from './candidate/candidate.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // context: ({ req }) => {
      //   const API_KEY = process.env.GQL_AUTH_API_KEY;
      //   if (!API_KEY) return { role: '' };

      //   const token = req.headers.authorization || '';
      //   const role = token === API_KEY ? 'updater' : '';
      //   return { role };
      // },
    }),
    AgencyModule,
    SystemModule,
    ElectionModule,
    CandidateModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class GraphQLSetupModule {}
