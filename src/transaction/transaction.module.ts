import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SoftwareModule } from 'src/software/software.module';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { EFileModule } from 'src/software/efile/efile.module';

@Module({
  imports: [HttpModule, CacheModule.register(), SoftwareModule, EFileModule],
  providers: [TransactionResolver, TransactionService],
  exports: [],
})
export class TransactionModule {}
