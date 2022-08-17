import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { SourceModule } from 'src/source/source.module';
import { ElectionResolver } from './election.resolver';
import { ElectionService } from './election.service';

@Module({
  imports: [HttpModule, CacheModule.register(), SourceModule, EFileModule],
  providers: [ElectionResolver, ElectionService],
  exports: [],
})
export class ElectionModule {}
