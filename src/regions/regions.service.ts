import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';
import { RoomI } from './region.interface';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions) private serviceReg: Repository<Regions>,
  ) {}

  public async findAll(
    options: IPaginationOptions,
  ): Promise<Pagination<RoomI>> {
    const region = await this.serviceReg.createQueryBuilder('regions');
    return paginate(region, options);
  }
  public async findOne(ids: number) {
    return await this.serviceReg.findOne({ where: { regionId: ids } });
  }
  public async Insert(name: string) {
    try {
      const region = await this.serviceReg.save({
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id: number, name: string) {
    try {
      const region = await this.serviceReg.update(id, {
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
  public async Delete(id: number) {
    return await this.serviceReg.delete(id);
  }
  public async Upload(file, name: string) {
    try {
      const region = await this.serviceReg.save({
        regionName: name,
        photo: file.originalname,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
}
