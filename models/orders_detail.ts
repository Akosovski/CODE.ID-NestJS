import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface orders_detailAttributes {
  ordet_order_id: number;
  ordet_prod_id: number;
  ordet_price?: string;
  ordet_quantity?: number;
  ordet_discount?: number;
}

@Table({ tableName: 'orders_detail', schema: 'public', timestamps: false })
export class orders_detail
  extends Model<orders_detailAttributes, orders_detailAttributes>
  implements orders_detailAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({
    name: 'pk_ordet_order_id_ordet_prod_id',
    using: 'btree',
    unique: true,
  })
  ordet_order_id!: number;

  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({
    name: 'pk_ordet_order_id_ordet_prod_id',
    using: 'btree',
    unique: true,
  })
  ordet_prod_id!: number;

  @Column({ allowNull: true, type: DataType.NUMBER })
  ordet_price?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  ordet_quantity?: number;

  @Column({ allowNull: true, type: DataType.FLOAT })
  ordet_discount?: number;
}
