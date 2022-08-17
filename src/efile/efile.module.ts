import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EfileElectionService } from './efile-election.service';
import { EfileCandidateService } from './efile-candidate.service';
import { EFileGetWorkbookService } from './efile-transaction.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [
    EfileElectionService,
    EfileCandidateService,
    EFileGetWorkbookService,
  ],
  exports: [
    EfileElectionService,
    EfileCandidateService,
    EFileGetWorkbookService,
  ],
})
export class EFileModule {}
