import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { Cache } from 'cache-manager';
import { SystemService } from '../system/system.service';
import { EFileGetWorkbookService } from 'src/efile/efile-transaction.service';
import { SourceInput } from 'src/source/source';

interface TransactionYearInput {
  year: string;
  source: SourceInput;
}
@Injectable()
export class TransactionService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private systemService: SystemService,
    private eFileGetWorkbookService: EFileGetWorkbookService,
  ) {}

  public async downloadTransactionFileToCache(
    input: TransactionYearInput,
  ): Promise<string> {
    const { source } = input;
    const { system } = source;

    if (!(await this.systemService.isSystemValid(system))) return;

    if (system === 'EFILE') {
      return await this.cacheFile(input);
    } else if (system === 'NETFILE') {
    } else if (system === 'CAMPAIGNDOCS') {
    }

    return;
  }

  async cacheFile(input: TransactionYearInput): Promise<string> {
    const cacheStorageTimeInSeconds = 60;
    const { source, year } = input;
    const { system, url } = source;

    const id = randomBytes(6).toString('hex');

    const key = `${system}-${year}-${id}`;

    const value: ArrayBuffer = await this.eFileGetWorkbookService.getFileBuffer(
      year,
      url,
    );

    await this.cacheManager.set(key, value, { ttl: cacheStorageTimeInSeconds });

    return key;
  }
}
