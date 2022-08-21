import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileCandidateService } from 'src/software/efile/efile-candidate.service';
import { EfileUrlService } from 'src/software/efile/efile-url.service';
import { SourceInput } from 'src/source/source';

interface CandidateInput {
  electionDate: string;
  source: SourceInput;
  software: string;
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
    private efileCandidateService: EfileCandidateService,
    private efileUrlService: EfileUrlService,
  ) {}

  public async getCandidates(
    input: CandidateInput,
  ): Promise<CandidateOutput[]> {
    const { source, electionDate, software } = input;
    const { url } = source;

    switch (software) {
      case 'EFILE':
        const baseUrl = await this.efileUrlService.getBaseUrl(url);
        const results = await this.efileCandidateService.runDownloadCandidates(
          baseUrl,
          electionDate,
        );

        return this.mapEFileCandidates(results);

        break;
      case 'NETFILE':
        break;
      case 'CAMPAIGNDOCS':
        break;
      default:
        break;
    }

    return [];
  }

  mapEFileCandidates(candidates): CandidateOutput[] {
    return candidates.map((candidate) => ({
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
  }
}
