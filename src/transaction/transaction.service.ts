import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { Cache } from 'cache-manager';
import { EFileGetWorkbookService } from 'src/software/efile/efile-transaction.service';
import { SourceInput } from 'src/source/source';
import { EfileUrlService } from 'src/software/efile/efile-url.service';

interface TransactionYearInput {
  year: string;
  source: SourceInput;
  software: string;
}
@Injectable()
export class TransactionService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private eFileGetWorkbookService: EFileGetWorkbookService,
    private efileUrlService: EfileUrlService,
  ) {}

  public async downloadTransactionFileToCache(
    input: TransactionYearInput,
  ): Promise<string> {
    const { software } = input;

    switch (software) {
      case 'EFILE':
        return await this.cacheFile(input);
        break;
      case 'NETFILE':
        break;
      case 'CAMPAIGNDOCS':
        break;
      default:
        break;
    }

    return;
  }

  async cacheFile(input: TransactionYearInput): Promise<string> {
    const cacheStorageTimeInSeconds = 60;
    const { source, year, software } = input;
    const { url } = source;

    const id = randomBytes(6).toString('hex');

    const key = `${software}-${year}-${id}`;

    const baseUrl = await this.efileUrlService.getBaseUrl(url);
    const value: ArrayBuffer = await this.eFileGetWorkbookService.getFileBuffer(
      year,
      baseUrl,
    );

    await this.cacheManager.set(key, value, { ttl: cacheStorageTimeInSeconds });

    return key;
  }
}
