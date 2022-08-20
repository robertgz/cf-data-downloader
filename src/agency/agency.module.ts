import { CacheModule, Module } from '@nestjs/common';
import { EFileModule } from 'src/efile/efile.module';
import { SystemModule } from 'src/system/system.module';
import { AgenciesResolver } from './agency.resolver';
import { AgencyService } from './agency.service';

@Module({
  imports: [CacheModule.register(), SystemModule, EFileModule],
  providers: [AgenciesResolver, AgencyService],
  exports: [],
})
export class AgencyModule {}
