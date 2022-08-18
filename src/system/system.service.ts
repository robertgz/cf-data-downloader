import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {
  list = ['EFILE', 'NETFILE', 'CAMPAIGNDOCS'];

  public async getSystems(): Promise<string[]> {
    return this.list;
  }

  public async isSystemValid(item: string): Promise<boolean> {
    return this.list.includes(item);
  }
}
