import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';
import { RoomI } from './region.interface';
import { PaginationDto } from './pagionation.dto';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions) private serviceReg: Repository<Regions>,
  ) {}

  public async findAll(search: string, options: PaginationDto) {
    const skippedItems = (options.page - 1) * options.limit;
    const totalCount = await this.serviceReg.count();
    if (search) {
      const regions = await this.serviceReg
        .createQueryBuilder()
        .orderBy('region_name', 'ASC')
        .offset(skippedItems)
        .limit(options.limit)
        .where("region_name like '%' || :search || '%'", { search })
        .getMany();

      return {
        totalCount,
        page: options.page,
        limit: options.limit,
        data: regions,
      };
    } else {
      const regions = await this.serviceReg
        .createQueryBuilder()
        .orderBy('region_name', 'ASC')
        .offset(skippedItems)
        .limit(options.limit)
        .getMany();

      return {
        totalCount,
        page: options.page,
        limit: options.limit,
        data: regions,
      };
    }
  }
  public async findOne(search: string) {
    try {
      console.log();

      return await this.serviceReg
        .createQueryBuilder('regions')
        .where('region_name = :search', {
          search: search,
        })
        .getMany();
    } catch (error) {
      return error;
    }
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
