import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { Cache } from 'cache-manager';
import { SourceService } from '../source/source.service';
import { EFileGetWorkbookService } from 'src/efile/efile-transaction.service';

interface TransactionYearInput {
  year: string;
  source: string;
  url: string;
}
@Injectable()
export class TransactionService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private sourceService: SourceService,
    private eFileGetWorkbookService: EFileGetWorkbookService,
  ) {}

  public async downloadTransactionFileToCache(
    input: TransactionYearInput,
  ): Promise<string> {
    const { source } = input;

    if (!(await this.sourceService.isSourceValid(source))) return;

    if (source === 'EFILE') {
      return await this.cacheFile(input);
    } else if (source === 'NETFILE') {
    } else if (source === 'CAMPAIGNDOCS') {
    }

    return;
  }

  async cacheFile(input: TransactionYearInput): Promise<string> {
    const cacheStorageTimeInSeconds = 60;
    const { source, url, year } = input;

    const id = randomBytes(6).toString('hex');

    const key = `${source}-${year}-${id}`;

    const value: ArrayBuffer = await this.eFileGetWorkbookService.getFileBuffer(
      year,
      url,
    );

    await this.cacheManager.set(key, value, { ttl: cacheStorageTimeInSeconds });

    return key;
  }
}
