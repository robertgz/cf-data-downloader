import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { SoftwareModule } from 'src/software/software.module';
import { SystemModule } from 'src/system/system.module';
import { AgenciesResolver } from './agency.resolver';
import { AgencyService } from './agency.service';

@Module({
  imports: [CacheModule.register(), SystemModule, SoftwareModule, EFileModule],
  providers: [AgenciesResolver, AgencyService],
  exports: [],
})
export class AgencyModule {}
