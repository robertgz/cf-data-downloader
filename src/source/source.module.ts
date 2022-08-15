import { Module } from '@nestjs/common';
import { SourceResolver } from './source.resolver';
import { SourceService } from './source.service';

@Module({
  imports: [],
  providers: [SourceResolver, SourceService],
  exports: [SourceService],
})
export class SourceModule {}
