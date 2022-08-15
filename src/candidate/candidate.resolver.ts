import { Args, Query, Resolver } from '@nestjs/graphql';
import { CandidateService } from './candidate.service';

@Resolver('Candidate')
export class CandidateResolver {
  constructor(private candidateService: CandidateService) {}

  @Query()
  async candidates(@Args() args) {
    const { input } = args;

    return this.candidateService.getCandidates(input);
  }
}
