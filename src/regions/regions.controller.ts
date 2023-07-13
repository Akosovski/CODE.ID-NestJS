import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RegionsService } from '../regions/regions.service'
import { RegionDto } from './dto/region.dto';
@Controller('regions')
export class RegionsController {
    constructor(private service: RegionsService) { }

    @Get()
    public async getAll() {
        return this.service.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: ParseIntPipe) {
        return this.service.findOne(id);
    }
    @Post()
    public async create(@Body() body:RegionDto) {
        return this.service.Create(body)
    }
}
