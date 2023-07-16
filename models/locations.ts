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
import { countries } from './countries';
import { departments } from './departments';

export interface locationsAttributes {
  location_id?: number;
  street_address?: string;
  postal_code?: string;
  city?: string;
  state_province?: string;
  country_id?: string;
}

@Table({ tableName: 'locations', schema: 'public', timestamps: false })
export class locations
  extends Model<locationsAttributes, locationsAttributes>
  implements locationsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('locations_location_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'pk_location_id', using: 'btree', unique: true })
  @Index({ name: 'locations_pkey', using: 'btree', unique: true })
  location_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(40) })
  street_address?: string;

  @Column({ allowNull: true, type: DataType.STRING(12) })
  postal_code?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  city?: string;

  @Column({ allowNull: true, type: DataType.STRING(25) })
  state_province?: string;

  @ForeignKey(() => countries)
  @Column({ allowNull: true, type: DataType.STRING(2) })
  country_id?: string;

  @BelongsTo(() => countries)
  country?: countries;

  @HasMany(() => departments, { sourceKey: 'location_id' })
  departments?: departments[];
}
