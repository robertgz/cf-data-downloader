import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EfileElectionService } from './efile-election.service';
import { EfileCandidateService } from './efile-candidate.service';
import { EFileGetWorkbookService } from './efile-transaction.service';
import { EfileAgencyService } from './efile-agency.service';
import { EfileUrlService } from './efile-url.service';
import { EfileSoftwareService } from './efile-software.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [
    EfileElectionService,
    EfileCandidateService,
    EFileGetWorkbookService,
    EfileAgencyService,
    EfileSoftwareService,
    EfileUrlService,
  ],
  exports: [
    EfileElectionService,
    EfileCandidateService,
    EFileGetWorkbookService,
    EfileAgencyService,
    EfileUrlService,
    EfileSoftwareService,
  ],
})
export class EFileModule {}
