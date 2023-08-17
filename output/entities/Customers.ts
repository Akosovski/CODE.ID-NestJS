import { Column, Entity, Index, OneToMany } from "typeorm";
import { Orders } from "./Orders";

@Index("customers_pkey", ["custId"], { unique: true })
@Entity("customers", { schema: "public" })
export class Customers {
  @Column("integer", { primary: true, name: "cust_id" })
  custId: number;

  @Column("character varying", {
    name: "cust_name",
    nullable: true,
    length: 40,
  })
  custName: string | null;

  @Column("character varying", {
    name: "cust_city",
    nullable: true,
    length: 15,
  })
  custCity: string | null;

  @Column("integer", { name: "cust_location_id", nullable: true })
  custLocationId: number | null;

  @OneToMany(() => Orders, (orders) => orders.orderCust)
  orders: Orders[];
}
