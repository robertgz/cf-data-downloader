import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/software/efile/efile.module';
import { SoftwareModule } from 'src/software/software.module';
import { AgenciesResolver } from './agency.resolver';
import { AgencyService } from './agency.service';

@Module({
  imports: [CacheModule.register(), SoftwareModule, EFileModule],
  providers: [AgenciesResolver, AgencyService],
  exports: [],
})
export class AgencyModule {}
