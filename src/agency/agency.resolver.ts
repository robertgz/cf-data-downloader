import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AgencyService } from './agency.service';
import { SoftwareService } from 'src/software/software.service';

@Resolver('Agency')
export class AgenciesResolver {
  constructor(
    private agencyService: AgencyService,
    private softwareService: SoftwareService,
  ) {}

  @Query()
  async agency(@Args() args) {
    const { input } = args;
    const { source } = input;
    const { url } = source;

    const software = await this.softwareService.getSoftware(url);

    return { ...input, software };
  }

  @ResolveField()
  async name(@Parent() input) {
    return this.agencyService.getAgencyName(input);
  }
}
