import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { FilesController } from './file.controller';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [FilesController],
  providers: [],
  exports: [],
})
export class FileModule {}
