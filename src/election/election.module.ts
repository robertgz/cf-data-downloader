import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/software/efile/efile.module';
import { SoftwareModule } from 'src/software/software.module';
import { ElectionResolver } from './election.resolver';
import { ElectionService } from './election.service';

@Module({
  imports: [HttpModule, CacheModule.register(), SoftwareModule, EFileModule],
  providers: [ElectionResolver, ElectionService],
  exports: [],
})
export class ElectionModule {}
