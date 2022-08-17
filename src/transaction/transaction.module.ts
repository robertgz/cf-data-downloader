import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SourceModule } from 'src/source/source.module';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { EFileModule } from 'src/efile/efile.module';

@Module({
  imports: [HttpModule, CacheModule.register(), SourceModule, EFileModule],
  providers: [TransactionResolver, TransactionService],
  exports: [],
})
export class TransactionModule {}
