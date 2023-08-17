import { Column, Entity, Index, OneToMany } from "typeorm";
import { Products } from "./Products";

@Index("categories_pkey", ["cateId"], { unique: true })
@Entity("categories", { schema: "public" })
export class Categories {
  @Column("integer", { primary: true, name: "cate_id" })
  cateId: number;

  @Column("character varying", {
    name: "cate_name",
    nullable: true,
    length: 15,
  })
  cateName: string | null;

  @Column("text", { name: "cate_description", nullable: true })
  cateDescription: string | null;

  @OneToMany(() => Products, (products) => products.prodCate)
  products: Products[];
}
