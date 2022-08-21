import { Injectable } from '@nestjs/common';
import { EfileUrlService } from './efile-url.service';

@Injectable()
export class EfileSoftwareService {
  constructor(private efileUrlService: EfileUrlService) {}

  public async getSoftwareName(url: string): Promise<string> {
    if (this.efileUrlService.isValidUrl(url)) return 'EFILE';

    return '';
  }
}
