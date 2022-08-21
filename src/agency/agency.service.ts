import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EfileAgencyService } from 'src/efile/efile-agency.service';
import { SourceInput } from 'src/source/source';

interface AgencyInput {
  source: SourceInput;
  software: string;
}

@Injectable()
export class AgencyService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private afileAgencyService: EfileAgencyService,
  ) {}

  public async getAgencyName(input: AgencyInput): Promise<string> {
    const { source, software } = input;
    const { url } = source;

    switch (software) {
      case 'EFILE':
        return await this.afileAgencyService.getAgencyName(url);
        break;
      case 'NETFILE':
        break;
      case 'CAMPAIGNDOCS':
        break;
      default:
        break;
    }

    return '';
  }
}
