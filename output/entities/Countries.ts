import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Regions } from "./Regions";
import { Locations } from "./Locations";

@Index("pk_country_id", ["countryId"], { unique: true })
@Index("countries_pkey", ["countryId"], { unique: true })
@Entity("countries", { schema: "public" })
export class Countries {
  @Column("character varying", { primary: true, name: "country_id", length: 2 })
  countryId: string;

  @Column("character varying", {
    name: "country_name",
    nullable: true,
    length: 40,
  })
  countryName: string | null;

  @ManyToOne(() => Regions, (regions) => regions.countries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_2: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_3: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_4: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_5: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_6: Regions;

  @OneToMany(() => Locations, (locations) => locations.country)
  locations: Locations[];

  @OneToMany(() => Locations, (locations) => locations.country_2)
  locations2: Locations[];

  @OneToMany(() => Locations, (locations) => locations.country_3)
  locations3: Locations[];

  @OneToMany(() => Locations, (locations) => locations.country_4)
  locations4: Locations[];

  @OneToMany(() => Locations, (locations) => locations.country_5)
  locations5: Locations[];

  @OneToMany(() => Locations, (locations) => locations.country_6)
  locations6: Locations[];
}
