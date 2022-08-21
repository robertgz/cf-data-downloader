import { Module } from '@nestjs/common';
import { EFileModule } from 'src/software/efile/efile.module';
import { SoftwareResolver } from './software.resolver';
import { SoftwareService } from './software.service';

@Module({
  imports: [EFileModule],
  providers: [SoftwareResolver, SoftwareService],
  exports: [SoftwareService],
})
export class SoftwareModule {}
