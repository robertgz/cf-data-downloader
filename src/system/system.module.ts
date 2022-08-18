import { Module } from '@nestjs/common';
import { SystemResolver } from './system.resolver';
import { SystemService } from './system.service';

@Module({
  imports: [],
  providers: [SystemResolver, SystemService],
  exports: [SystemService],
})
export class SystemModule {}
