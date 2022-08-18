import { Query, Resolver } from '@nestjs/graphql';
import { SystemService } from './system.service';

@Resolver('System')
export class SystemResolver {
  constructor(private systemService: SystemService) {}

  @Query()
  async systems() {
    return this.systemService.getSystems();
  }
}
