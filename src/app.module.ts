import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLSetupModule } from './graphql-setup.module';

@Module({
  imports: [GraphQLSetupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
