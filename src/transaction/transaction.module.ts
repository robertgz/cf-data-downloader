import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SourceModule } from 'src/source/source.module';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { EFileGetWorkbookService } from './fetchers/efile-transaction.service';

@Module({
  imports: [HttpModule, CacheModule.register(), SourceModule],
  providers: [TransactionResolver, TransactionService, EFileGetWorkbookService],
  exports: [],
})
export class TransactionModule {}
