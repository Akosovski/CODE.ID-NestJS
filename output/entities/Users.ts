import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users_pkey", ["userId"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "user_id" })
  userId: number;

  @Column("character varying", {
    name: "user_name",
    nullable: true,
    length: 50,
  })
  userName: string | null;

  @Column("character varying", {
    name: "user_phone",
    nullable: true,
    length: 15,
  })
  userPhone: string | null;

  @Column("character varying", {
    name: "user_email",
    nullable: true,
    length: 50,
  })
  userEmail: string | null;

  @Column("character varying", {
    name: "user_pass",
    nullable: true,
    length: 250,
  })
  userPass: string | null;

  @Column("character varying", {
    name: "roles",
    nullable: true,
    length: 25,
  })
  roles: string | null;
}
