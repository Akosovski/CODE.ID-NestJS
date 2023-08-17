import { Countries } from 'output/entities/Countries';

export interface RoomI {
  regionId?: number;
  regionName?: string;
  photo?: string;
  countries?: Countries[];
}
