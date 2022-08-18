import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SystemModule } from 'src/system/system.module';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { EFileModule } from 'src/efile/efile.module';

@Module({
  imports: [HttpModule, CacheModule.register(), SystemModule, EFileModule],
  providers: [TransactionResolver, TransactionService],
  exports: [],
})
export class TransactionModule {}
