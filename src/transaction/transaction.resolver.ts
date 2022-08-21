import { Args, Query, Resolver } from '@nestjs/graphql';
import { SoftwareService } from 'src/software/software.service';
import { CurrentHostName, RequestProtocol } from './decorators';
import { TransactionService } from './transaction.service';

@Resolver('Transaction')
export class TransactionResolver {
  constructor(
    private transactionService: TransactionService,
    private softwareService: SoftwareService,
  ) {}

  @Query()
  async transactionsYear(
    @Args() args,
    @CurrentHostName() host,
    @RequestProtocol() protocol,
  ): Promise<{ url: string }> {
    const { input } = args;
    const { source } = input;
    const { url } = source;

    const software = await this.softwareService.getSoftware(url);

    // const key = 'sample';
    const fileName =
      await this.transactionService.downloadTransactionFileToCache({
        ...input,
        software,
      });

    // const defaultHost = 'localhost:3100';
    const urlPath = `files/xlsx`;

    return {
      url: `${protocol}://${host}/${urlPath}/${fileName}`,
    };
  }
}
