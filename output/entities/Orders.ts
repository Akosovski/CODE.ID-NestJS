import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Customers } from "./Customers";
import { Shippers } from "./Shippers";
import { OrdersDetail } from "./OrdersDetail";

@Index("orders_pkey", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @Column("integer", { primary: true, name: "order_id" })
  orderId: number;

  @Column("timestamp without time zone", { name: "order_date", nullable: true })
  orderDate: Date | null;

  @Column("timestamp without time zone", {
    name: "order_required_date",
    nullable: true,
  })
  orderRequiredDate: Date | null;

  @Column("timestamp without time zone", {
    name: "order_shipped_date",
    nullable: true,
  })
  orderShippedDate: Date | null;

  @Column("money", { name: "order_freight", nullable: true })
  orderFreight: string | null;

  @Column("money", { name: "order_subtotal", nullable: true })
  orderSubtotal: string | null;

  @Column("smallint", { name: "order_total_qty", nullable: true })
  orderTotalQty: number | null;

  @Column("character varying", {
    name: "order_ship_city",
    nullable: true,
    length: 15,
  })
  orderShipCity: string | null;

  @Column("character varying", {
    name: "order_ship_address",
    nullable: true,
    length: 60,
  })
  orderShipAddress: string | null;

  @Column("character varying", {
    name: "order_status",
    nullable: true,
    length: 15,
  })
  orderStatus: string | null;

  @Column("integer", { name: "order_employee_id", nullable: true })
  orderEmployeeId: number | null;

  @ManyToOne(() => Customers, (customers) => customers.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_cust_id", referencedColumnName: "custId" }])
  orderCust: Customers;

  @ManyToOne(() => Shippers, (shippers) => shippers.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_ship_id", referencedColumnName: "shipId" }])
  orderShip: Shippers;

  @OneToMany(() => OrdersDetail, (ordersDetail) => ordersDetail.ordetOrder)
  ordersDetails: OrdersDetail[];
}
