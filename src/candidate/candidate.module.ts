import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { ElectionModule } from 'src/election/election.module';
import { SourceModule } from 'src/source/source.module';
import { CandidateResolver } from './candidate.resolver';
import { CandidateService } from './candidate.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    SourceModule,
    ElectionModule,
    EFileModule,
  ],
  providers: [CandidateResolver, CandidateService],
  exports: [],
})
export class CandidateModule {}
