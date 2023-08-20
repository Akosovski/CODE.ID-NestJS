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
    length: 11,
  })
  postalCode: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 19 })
  city: string | null;

  @Column("character varying", {
    name: "state_province",
    nullable: true,
    length: 17,
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

  @OneToMany(() => Departments, (departments) => departments.location_7)
  departments7: Departments[];

  @OneToMany(() => Departments, (departments) => departments.location_8)
  departments8: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI)
  departments9: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI2)
  department10: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI3)
  department11: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI4)
  department12: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI5)
  department13: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI6)
  department14: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI7)
  department15: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI8)
  department16: Departments[];

  @OneToMany(() => Departments, (departments) => departments.locationI9)
  department17: Departments[];

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

  @ManyToOne(() => Countries, (countries) => countries.locations7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_7: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country_8: Countries;

  @ManyToOne(() => Countries, (countries) => countries.locations9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI2: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI3: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI4: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI5: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI6: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI7: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI8: Countries;

  @ManyToOne(() => Countries, (countries) => countries.location17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  countryI9: Countries;
}
