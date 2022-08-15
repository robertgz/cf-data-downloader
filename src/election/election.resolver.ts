import { Args, Query, Resolver } from '@nestjs/graphql';
import { ElectionService } from './election.service';

@Resolver('Election')
export class ElectionResolver {
  constructor(private electionService: ElectionService) {}

  @Query()
  async elections(@Args() args) {
    const { input } = args;

    return this.electionService.getElections(input);
  }
}
