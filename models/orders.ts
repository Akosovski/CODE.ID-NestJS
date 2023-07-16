import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface ordersAttributes {
  order_id: number;
  order_date?: Date;
  order_required_date?: Date;
  order_shipped_date?: Date;
  order_freight?: string;
  order_subtotal?: string;
  order_total_qty?: number;
  order_ship_city?: string;
  order_ship_address?: string;
  order_status?: string;
  order_employee_id?: number;
  order_cust_id?: number;
  order_ship_id?: number;
}

@Table({ tableName: 'orders', schema: 'public', timestamps: false })
export class orders
  extends Model<ordersAttributes, ordersAttributes>
  implements ordersAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'orders_pkey', using: 'btree', unique: true })
  order_id!: number;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  order_date?: Date;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  order_required_date?: Date;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  order_shipped_date?: Date;

  @Column({ allowNull: true, type: DataType.NUMBER })
  order_freight?: string;

  @Column({ allowNull: true, type: DataType.NUMBER })
  order_subtotal?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  order_total_qty?: number;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  order_ship_city?: string;

  @Column({ allowNull: true, type: DataType.STRING(60) })
  order_ship_address?: string;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  order_status?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  order_employee_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  order_cust_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  order_ship_id?: number;
}
