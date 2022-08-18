import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileCandidateService } from 'src/efile/efile-candidate.service';
import { SourceInput } from 'src/source/source';
import { SystemService } from 'src/system/system.service';

interface CandidateInput {
  electionDate: string;
  source: SourceInput;
}

export interface CandidateOutput {
  fullOfficeName: string;

  agency: string;
  candidateName: string;
  coeId: string;
  district: string;
  electionId: string;
  filerId: string;
  firstName: string;
  jurisdictionCode: string;
  jurisdictionId: string;
  jurisdictionName: string;
  jurisdictionType: string;
  lastName: string;
  middleName: string;
  office: string;
  officeCode: string;
  officeId: string;
  suffix: string;
  title: string;
}

@Injectable()
export class CandidateService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private systemService: SystemService,
    private efileCandidateService: EfileCandidateService,
  ) {}

  public async getCandidates(
    input: CandidateInput,
  ): Promise<CandidateOutput[]> {
    const { source, electionDate } = input;
    const { system, url } = source;

    if (!(await this.systemService.isSystemValid(system))) return [];

    if (system === 'EFILE') {
      const results = await this.efileCandidateService.runDownloadCandidates(
        url,
        electionDate,
      );

      return results.map((candidate) => ({
        fullOfficeName: candidate.full_office_name,
        agency: candidate.agency,
        candidateName: candidate.candidate_name,
        coeId: candidate.coe_id,
        district: candidate.district,
        electionId: candidate.election_id,
        filerId: candidate.filer_id,
        firstName: candidate.first_name,
        jurisdictionCode: candidate.jurisdiction_code,
        jurisdictionId: candidate.jurisdiction_id,
        jurisdictionName: candidate.jurisdiction_name,
        jurisdictionType: candidate.jurisdiction_type,
        lastName: candidate.last_name,
        middleName: candidate.middle_name,
        office: candidate.office,
        officeCode: candidate.office_code,
        officeId: candidate.office_id,
        suffix: candidate.suffix,
        title: candidate.title,
      }));
    } else if (system === 'NETFILE') {
    } else if (system === 'CAMPAIGNDOCS') {
    }

    return [];
  }
}
