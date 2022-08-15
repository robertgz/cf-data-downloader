import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { ElectionModule } from 'src/election/election.module';
import { SourceModule } from 'src/source/source.module';
import { CandidateResolver } from './candidate.resolver';
import { CandidateService } from './candidate.service';
import { EfileCandidateService } from './fetchers/efile-candidate.service';

@Module({
  imports: [HttpModule, CacheModule.register(), SourceModule, ElectionModule],
  providers: [CandidateResolver, CandidateService, EfileCandidateService],
  exports: [],
})
export class CandidateModule {}
