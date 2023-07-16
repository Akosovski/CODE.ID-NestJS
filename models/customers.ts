import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface customersAttributes {
  cust_id: number;
  cust_name?: string;
  cust_city?: string;
  cust_location_id?: number;
}

@Table({ tableName: 'customers', schema: 'public', timestamps: false })
export class customers
  extends Model<customersAttributes, customersAttributes>
  implements customersAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'customers_pkey', using: 'btree', unique: true })
  cust_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(40) })
  cust_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  cust_city?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  cust_location_id?: number;
}
