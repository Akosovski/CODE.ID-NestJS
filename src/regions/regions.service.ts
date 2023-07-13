import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { regions } from 'models';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class RegionsService {
  constructor(@InjectModel(regions) private serviceReg: typeof regions) {}

  async findAll(): Promise<regions[]> {
    return await this.serviceReg.findAll({});
  }
  async findOne(id): Promise<regions> {
    console.log();
    return await this.serviceReg.findOne(id);
  }
  async Create(body): Promise<regions> {
    console.log();
    return await this.serviceReg.create({
      region_name: body.region_name,
      photo: body.photo,
    });
  }
}
