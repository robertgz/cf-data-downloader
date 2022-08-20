import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AgencyService } from './agency.service';

@Resolver('Agency')
export class AgenciesResolver {
  constructor(private agencyService: AgencyService) {}

  @Query()
  async agency(@Args() args) {
    const { input } = args;
    return input;
  }

  @ResolveField()
  async name(@Parent() input) {
    return this.agencyService.getAgencyName(input);
  }
}
