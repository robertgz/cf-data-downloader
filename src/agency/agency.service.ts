import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileAgencyService } from 'src/efile/efile-agency.service';
import { SourceInput } from 'src/source/source';

interface AgencyInput {
  source: SourceInput;
}

@Injectable()
export class AgencyService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private afileAgencyService: EfileAgencyService,
  ) {}

  public async getAgencyName(input: AgencyInput): Promise<string> {
    const { source } = input;
    const { system, url } = source;

    if (system === 'EFILE') {
      return await this.afileAgencyService.getAgencyName(url);
    } else if (system === 'NETFILE') {
    } else if (system === 'CAMPAIGNDOCS') {
    }

    return '';
  }
}
