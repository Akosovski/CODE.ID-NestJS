import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RegionsService } from './regions.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('regions')
export class RegionsController {
  constructor(private Services: RegionsService) {}

  @Post('paging')
  public async getAll(@Body() fields: any) {
    return this.Services.findAll({
      page: fields.page || 1,
      limit: fields.limit || 5,
    });
  }
  @Get(':ids')
  public async getOne(@Param('ids') ids: number) {
    return this.Services.findOne(ids);
  }
  @Post()
  public async Create(@Body('name') name: string) {
    return this.Services.Insert(name);
  }
  @Put(':id')
  public async Update(@Body('name') name: string, @Param('id') id: number) {
    return this.Services.update(id, name);
  }
  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return this.Services.Delete(id);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public async Upload(@UploadedFile() file, @Body('name') name: string) {
    return this.Services.Upload(file, name);
  }
  @Get('photo/:name')
  @Header('Content-Type', `image/${'png' || 'jpg' || 'jpeg'}`)
  @Header('Content-Disposition', 'attachment')
  getStaticFile(@Param('name') name: string): StreamableFile {
    const file = createReadStream(join(`${process.cwd()}/uploads/`, name));
    return new StreamableFile(file);
  }
}