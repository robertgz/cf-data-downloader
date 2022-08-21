import { Query, Resolver } from '@nestjs/graphql';
import { SoftwareService } from './software.service';

@Resolver('Software')
export class SoftwareResolver {
  constructor(private softwareService: SoftwareService) {}

  @Query()
  async softwares() {
    return this.softwareService.getSoftwares();
  }
}
