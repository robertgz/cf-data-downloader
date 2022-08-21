import { Args, Query, Resolver } from '@nestjs/graphql';
import { SoftwareService } from 'src/software/software.service';
import { ElectionService } from './election.service';

@Resolver('Election')
export class ElectionResolver {
  constructor(
    private electionService: ElectionService,
    private softwareService: SoftwareService,
  ) {}

  @Query()
  async elections(@Args() args) {
    const { input } = args;
    const { source } = input;
    const { url } = source;

    const software = await this.softwareService.getSoftware(url);

    return this.electionService.getElections({ ...input, software });
  }
}
