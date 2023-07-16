import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { countries, departments, employees, job_history, jobs, locations, regions } from 'models';
import { RegionsController } from 'src/regions/regions.controller';
import { RegionsService } from 'src/regions/regions.service';

@Module({
    imports: [SequelizeModule.forFeature([regions,countries,locations,departments,employees,jobs,job_history])],
    providers: [RegionsService],
    controllers: [RegionsController],
})
export class GlobalModule { }
