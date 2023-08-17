import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departments } from "./Departments";
import { Countries } from "./Countries";

@Index("locations_pkey", ["locationId"], { unique: true })
@Index("pk_location_id", ["locationId"], { unique: true })
@Entity("locations", { schema: "public" })
export class Locations {
  @PrimaryGeneratedColumn({ type: "integer", name: "location_id" })
  locationId: number;

  @Column("character varying", {
    name: "street_address",
    nullable: true,
    length: 40,
  })
  streetAddress: string | null;

  @Column("character varying", {
    name: "postal_code",
    nullable: true,
    length: 12,
  })
  postalCode: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 30 })
  city: string | null;

  @Column("character varying", {
    name: "state_province",
    nullable: true,
    length: 25,
  })
  stateProvince: string | null;

  @OneToMany(() => Departments, (departments) => departments.location)
  departments: Departments[];

  @OneToMany(() => Departments, (departments) => departments.location_2)
  departments2: Departments[];

  @OneToMany(() => Departments, (departments) => departments.location_3)
  departments3: Departments[];

  @OneToMany(() => Departments, (departments) => departments.location_4)
  departments4: Departments[];

  @OneToMany(() => Departments, (departments) => departments.location_5)
  departments5: Departments[];

  @OneToMany(() => Departments, (departments) => departments.location_6)
  departments6: Departments[];

  @ManyToOne(() => Countries, (countries) => countries.locations, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_2: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_3: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_4: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_5: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_6: Countries;
}
