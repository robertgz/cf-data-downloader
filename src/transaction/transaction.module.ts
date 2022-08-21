import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SoftwareModule } from 'src/software/software.module';
import { SystemModule } from 'src/system/system.module';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { EFileModule } from 'src/software/efile/efile.module';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    SoftwareModule,
    SystemModule,
    EFileModule,
  ],
  providers: [TransactionResolver, TransactionService],
  exports: [],
})
export class TransactionModule {}
