import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/software/efile/efile.module';
import { ElectionModule } from 'src/election/election.module';
import { SoftwareModule } from 'src/software/software.module';
import { CandidateResolver } from './candidate.resolver';
import { CandidateService } from './candidate.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    SoftwareModule,
    ElectionModule,
    EFileModule,
  ],
  providers: [CandidateResolver, CandidateService],
  exports: [],
})
export class CandidateModule {}
