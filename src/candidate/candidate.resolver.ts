import { Args, Query, Resolver } from '@nestjs/graphql';
import { SoftwareService } from 'src/software/software.service';
import { CandidateService } from './candidate.service';

@Resolver('Candidate')
export class CandidateResolver {
  constructor(
    private candidateService: CandidateService,
    private softwareService: SoftwareService,
  ) {}

  @Query()
  async candidates(@Args() args) {
    const { input } = args;
    const { source } = input;
    const { url } = source;

    const software = await this.softwareService.getSoftware(url);

    return this.candidateService.getCandidates({ ...input, software });
  }
}
