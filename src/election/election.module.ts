import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { SourceModule } from 'src/source/source.module';
import { ElectionResolver } from './election.resolver';
import { ElectionService } from './election.service';
import { EfileElectionService } from './fetchers/efile-election.service';

@Module({
  imports: [HttpModule, CacheModule.register(), SourceModule],
  providers: [ElectionResolver, ElectionService, EfileElectionService],
  exports: [EfileElectionService],
})
export class ElectionModule {}
