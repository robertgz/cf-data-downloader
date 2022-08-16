import { Args, Query, Resolver } from '@nestjs/graphql';
import { CurrentHostName, RequestProtocol } from './decorators';
import { TransactionService } from './transaction.service';

@Resolver('Transaction')
export class TransactionResolver {
  constructor(private transactionService: TransactionService) {}

  @Query()
  async transactionsYear(
    @Args() args,
    @CurrentHostName() host,
    @RequestProtocol() protocol,
  ): Promise<{ url: string }> {
    const { input } = args;

    // const key = 'sample';
    const fileName =
      await this.transactionService.downloadTransactionFileToCache(input);

    // const defaultHost = 'localhost:3100';
    const urlPath = `files/xlsx`;

    return {
      url: `${protocol}://${host}/${urlPath}/${fileName}`,
    };
  }
}
