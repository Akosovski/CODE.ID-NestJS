import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Header,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
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

  @Get('paging')
  public async getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(3), ParseIntPipe) limit: number,
    @Query('search', new DefaultValuePipe(null)) search: string,
  ) {
    return this.Services.findAll(search, {
      page: page,
      limit: limit,
    });
  }
  @Get('search')
  public async getOne(
    @Query('search', new DefaultValuePipe(null)) search: string,
  ) {
    return this.Services.findOne(search);
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
