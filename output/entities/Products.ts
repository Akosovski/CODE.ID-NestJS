import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OrdersDetail } from "./OrdersDetail";
import { Categories } from "./Categories";
import { Suppliers } from "./Suppliers";

@Index("products_pkey", ["prodId"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @Column("integer", { primary: true, name: "prod_id" })
  prodId: number;

  @Column("character varying", {
    name: "prod_name",
    nullable: true,
    length: 40,
  })
  prodName: string | null;

  @Column("character varying", {
    name: "prod_quantity",
    nullable: true,
    length: 20,
  })
  prodQuantity: string | null;

  @Column("money", { name: "prod_price", nullable: true })
  prodPrice: string | null;

  @Column("smallint", { name: "prod_in_stock", nullable: true })
  prodInStock: number | null;

  @Column("smallint", { name: "prod_on_order", nullable: true })
  prodOnOrder: number | null;

  @Column("smallint", { name: "prod_reorder_level", nullable: true })
  prodReorderLevel: number | null;

  @Column("bit", { name: "prod_discontinued", nullable: true })
  prodDiscontinued: string | null;

  @OneToMany(() => OrdersDetail, (ordersDetail) => ordersDetail.ordetProd)
  ordersDetails: OrdersDetail[];

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "prod_cate_id", referencedColumnName: "cateId" }])
  prodCate: Categories;

  @ManyToOne(() => Suppliers, (suppliers) => suppliers.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "prod_supr_id", referencedColumnName: "suprId" }])
  prodSupr: Suppliers;
}
