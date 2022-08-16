import {
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Param,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import type { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get('xlsx/:key')
  async download(
    @Res({ passthrough: true }) res: Response,
    @Param() params,
  ): Promise<StreamableFile> {
    const { key } = params;

    const value = (await this.cacheManager.get(key)) as ArrayBuffer;

    res.set({
      'Content-Type': 'application/xlsx',
      'Content-Disposition': `attachment; filename="${key}.xlsx"`,
    });
    return new StreamableFile(Buffer.from(value));
  }
}
