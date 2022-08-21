import { Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { SoftwareService } from './software.service';

@Module({
  imports: [EFileModule],
  controllers: [],
  providers: [SoftwareService],
  exports: [SoftwareService],
})
export class SoftwareModule {}