import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileElectionService } from 'src/software/efile/efile-election.service';
import { SourceInput } from 'src/source/source';
import { SystemService } from 'src/system/system.service';

interface ElectionInput {
  source: SourceInput;
}

export interface ElectionOutput {
  date: string;
  type: string;
}

@Injectable()
export class ElectionService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private systemService: SystemService,
    private efileElectionService: EfileElectionService,
  ) {}

  public async getElections(input: ElectionInput): Promise<ElectionOutput[]> {
    const { source } = input;
    const { system, url } = source;

    if (!(await this.systemService.isSystemValid(system))) return [];

    if (system === 'EFILE') {
      const results = await this.efileElectionService.runDownloadElections(url);

      return results.map((election) => ({
        date: election.election_date,
        type: election.election_type,
      }));
    } else if (system === 'NETFILE') {
    } else if (system === 'CAMPAIGNDOCS') {
    }

    return [];
  }
}
