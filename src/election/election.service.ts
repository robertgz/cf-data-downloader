import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileElectionService } from 'src/software/efile/efile-election.service';
import { EfileUrlService } from 'src/software/efile/efile-url.service';
import { SourceInput } from 'src/source/source';

interface ElectionInput {
  source: SourceInput;
  software: string;
}

export interface ElectionOutput {
  date: string;
  type: string;
}

@Injectable()
export class ElectionService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private efileElectionService: EfileElectionService,
    private efileUrlService: EfileUrlService,
  ) {}

  public async getElections(input: ElectionInput): Promise<ElectionOutput[]> {
    const { source, software } = input;
    const { url } = source;

    switch (software) {
      case 'EFILE':
        const baseUrl = await this.efileUrlService.getBaseUrl(url);
        const results = await this.efileElectionService.runDownloadElections(
          baseUrl,
        );

        return results.map((election) => ({
          date: election.election_date,
          type: election.election_type,
        }));
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
}
