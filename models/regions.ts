import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { countries } from './countries';

export interface regionsAttributes {
  region_id?: number;
  region_name?: string;
}

@Table({ tableName: 'regions', schema: 'public', timestamps: false })
export class regions
  extends Model<regionsAttributes, regionsAttributes>
  implements regionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('regions_region_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'pk_region_id', using: 'btree', unique: true })
  region_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(25) })
  region_name?: string;

  @HasMany(() => countries, { sourceKey: 'region_id' })
  countries?: countries[];
}
