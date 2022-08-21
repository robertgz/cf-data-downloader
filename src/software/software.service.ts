import { Injectable } from '@nestjs/common';
import { EfileUrlService } from 'src/software/efile/efile-url.service';
import { EfileSoftwareService } from 'src/software/efile/efile-software.service';

@Injectable()
export class SoftwareService {
  constructor(
    private efileUrlService: EfileUrlService,
    private efileSoftwareService: EfileSoftwareService,
  ) {}

  public async getSoftware(url: string): Promise<string> {
    if (this.efileUrlService.isValidUrl(url)) {
      return this.efileSoftwareService.getSoftwareName(url);
    }

    return '';
  }
}
