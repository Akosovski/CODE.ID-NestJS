import { Column, Entity, Index, OneToMany } from "typeorm";
import { Orders } from "./Orders";

@Index("shippers_pkey", ["shipId"], { unique: true })
@Entity("shippers", { schema: "public" })
export class Shippers {
  @Column("integer", { primary: true, name: "ship_id" })
  shipId: number;

  @Column("character varying", {
    name: "ship_name",
    nullable: true,
    length: 40,
  })
  shipName: string | null;

  @Column("character varying", {
    name: "ship_phone",
    nullable: true,
    length: 24,
  })
  shipPhone: string | null;

  @OneToMany(() => Orders, (orders) => orders.orderShip)
  orders: Orders[];
}
