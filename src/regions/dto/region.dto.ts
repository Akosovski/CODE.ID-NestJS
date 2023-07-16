import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class RegionDto {
    @IsNumber()
    @IsNotEmpty()
    public region_id: number;

    @IsString()
    @IsOptional()
    public region_name: string;
}