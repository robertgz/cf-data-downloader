import { Injectable } from '@nestjs/common';

@Injectable()
export class EfileSoftwareService {
  public async getSoftwareName(): Promise<string> {
    return 'EFILE';
  }
}
