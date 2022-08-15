import { Query, Resolver } from '@nestjs/graphql';
import { SourceService } from './source.service';

@Resolver('Source')
export class SourceResolver {
  constructor(private sourceService: SourceService) {}

  @Query()
  async sources() {
    return this.sourceService.getSources();
  }
}
