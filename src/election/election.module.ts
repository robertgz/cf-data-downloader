import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { SystemModule } from 'src/system/system.module';
import { ElectionResolver } from './election.resolver';
import { ElectionService } from './election.service';

@Module({
  imports: [HttpModule, CacheModule.register(), SystemModule, EFileModule],
  providers: [ElectionResolver, ElectionService],
  exports: [],
})
export class ElectionModule {}
