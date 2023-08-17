import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";

@Index("pk_ordet_order_id_ordet_prod_id", ["ordetOrderId", "ordetProdId"], {
  unique: true,
})
@Entity("orders_detail", { schema: "public" })
export class OrdersDetail {
  @Column("integer", { primary: true, name: "ordet_order_id" })
  ordetOrderId: number;

  @Column("integer", { primary: true, name: "ordet_prod_id" })
  ordetProdId: number;

  @Column("money", { name: "ordet_price", nullable: true })
  ordetPrice: string | null;

  @Column("smallint", { name: "ordet_quantity", nullable: true })
  ordetQuantity: number | null;

  @Column("real", { name: "ordet_discount", nullable: true, precision: 24 })
  ordetDiscount: number | null;

  @ManyToOne(() => Orders, (orders) => orders.ordersDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ordet_order_id", referencedColumnName: "orderId" }])
  ordetOrder: Orders;

  @ManyToOne(() => Products, (products) => products.ordersDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ordet_prod_id", referencedColumnName: "prodId" }])
  ordetProd: Products;
}
