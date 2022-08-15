import { Module } from '@nestjs/common';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

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
  ],
  controllers: [],
  providers: [],
})
export class GraphQLSetupModule {}
