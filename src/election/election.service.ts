import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileElectionService } from 'src/efile/efile-election.service';
import { SourceService } from 'src/source/source.service';

interface ElectionInput {
  source: string;
  url: string;
}

export interface ElectionOutput {
  date: string;
  type: string;
}

@Injectable()
export class ElectionService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private sourceService: SourceService,
    private efileElectionService: EfileElectionService,
  ) {}

  public async getElections(input: ElectionInput): Promise<ElectionOutput[]> {
    const { source, url } = input;

    if (!(await this.sourceService.isSourceValid(source))) return [];

    if (source === 'EFILE') {
      const results = await this.efileElectionService.runDownloadElections(url);

      return results.map((election) => ({
        date: election.election_date,
        type: election.election_type,
      }));
    } else if (source === 'NETFILE') {
    } else if (source === 'CAMPAIGNDOCS') {
    }

    return [];
  }
}
