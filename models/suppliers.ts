import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface suppliersAttributes {
  supr_id: number;
  supr_name?: string;
  supr_contact_name?: string;
  supr_city?: string;
  supr_location_id?: number;
}

@Table({ tableName: 'suppliers', schema: 'public', timestamps: false })
export class suppliers
  extends Model<suppliersAttributes, suppliersAttributes>
  implements suppliersAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'suppliers_pkey', using: 'btree', unique: true })
  supr_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(40) })
  supr_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  supr_contact_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  supr_city?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  supr_location_id?: number;
}
