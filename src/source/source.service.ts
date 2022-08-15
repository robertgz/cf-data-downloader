import { Injectable } from '@nestjs/common';

@Injectable()
export class SourceService {
  sources = ['EFILE', 'NETFILE', 'CAMPAIGNDOCS'];

  public async getSources(): Promise<string[]> {
    return this.sources;
  }

  public async isSourceValid(source: string): Promise<boolean> {
    return this.sources.includes(source);
  }
}
