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

@Index("countries_pkey", ["countryId"], { unique: true })
@Entity("countries", { schema: "public" })
export class Countries {
  @Column("character varying", { primary: true, name: "country_id", length: 2 })
  countryId: string;

  @Column("character varying", {
    name: "country_name",
    nullable: true,
    length: 24,
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

  @ManyToOne(() => Regions, (regions) => regions.countries7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_7: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region_8: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countries9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI2: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI3: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI4: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI5: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI6: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI7: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI8: Regions;

  @ManyToOne(() => Regions, (regions) => regions.countrie17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  regionI9: Regions;

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

  @OneToMany(() => Locations, (locations) => locations.country_7)
  locations7: Locations[];

  @OneToMany(() => Locations, (locations) => locations.country_8)
  locations8: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI)
  locations9: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI2)
  location10: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI3)
  location11: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI4)
  location12: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI5)
  location13: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI6)
  location14: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI7)
  location15: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI8)
  location16: Locations[];

  @OneToMany(() => Locations, (locations) => locations.countryI9)
  location17: Locations[];
}
