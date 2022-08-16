import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { GraphQLSetupModule } from './graphql-setup.module';

@Module({
  imports: [GraphQLSetupModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
