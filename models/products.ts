import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface productsAttributes {
  prod_id: number;
  prod_name?: string;
  prod_quantity?: string;
  prod_price?: string;
  prod_in_stock?: number;
  prod_on_order?: number;
  prod_reorder_level?: number;
  prod_discontinued?: string;
  prod_cate_id?: number;
  prod_supr_id?: number;
}

@Table({ tableName: 'products', schema: 'public', timestamps: false })
export class products
  extends Model<productsAttributes, productsAttributes>
  implements productsAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'products_pkey', using: 'btree', unique: true })
  prod_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(40) })
  prod_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(20) })
  prod_quantity?: string;

  @Column({ allowNull: true, type: DataType.NUMBER })
  prod_price?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prod_in_stock?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prod_on_order?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prod_reorder_level?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  prod_discontinued?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prod_cate_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  prod_supr_id?: number;
}
