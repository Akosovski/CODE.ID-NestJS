import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface shippersAttributes {
  ship_id: number;
  ship_name?: string;
  ship_phone?: string;
}

@Table({ tableName: 'shippers', schema: 'public', timestamps: false })
export class shippers
  extends Model<shippersAttributes, shippersAttributes>
  implements shippersAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'shippers_pkey', using: 'btree', unique: true })
  ship_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(40) })
  ship_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(24) })
  ship_phone?: string;
}
