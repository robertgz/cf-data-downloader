import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { ElectionModule } from 'src/election/election.module';
import { SystemModule } from 'src/system/system.module';
import { CandidateResolver } from './candidate.resolver';
import { CandidateService } from './candidate.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    SystemModule,
    ElectionModule,
    EFileModule,
  ],
  providers: [CandidateResolver, CandidateService],
  exports: [],
})
export class CandidateModule {}
