import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { regions } from './regions';
import { locations } from './locations';

export interface countriesAttributes {
  country_id: string;
  country_name?: string;
  region_id?: number;
}

@Table({ tableName: 'countries', schema: 'public', timestamps: false })
export class countries
  extends Model<countriesAttributes, countriesAttributes>
  implements countriesAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(2) })
  @Index({ name: 'pk_country_id', using: 'btree', unique: true })
  @Index({ name: 'countries_pkey', using: 'btree', unique: true })
  country_id!: string;

  @Column({ allowNull: true, type: DataType.STRING(40) })
  country_name?: string;

  @ForeignKey(() => regions)
  @Column({ allowNull: true, type: DataType.INTEGER })
  region_id?: number;

  @BelongsTo(() => regions)
  region?: regions;

  @HasMany(() => locations, { sourceKey: 'country_id' })
  locations?: locations[];
}
