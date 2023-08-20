import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries";

@Index("regions_pkey", ["regionId"], { unique: true })
@Entity("regions", { schema: "public" })
export class Regions {
  @PrimaryGeneratedColumn({ type: "integer", name: "region_id" })
  regionId: number;

  @Column("character varying", {
    name: "region_name",
    nullable: true,
    length: 22,
  })
  regionName: string | null;

  @Column("character varying", { name: "photo", nullable: true, length: 50 })
  photo: string | null;

  @OneToMany(() => Countries, (countries) => countries.region)
  countries: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_2)
  countries2: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_3)
  countries3: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_4)
  countries4: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_5)
  countries5: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_6)
  countries6: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_7)
  countries7: Countries[];

  @OneToMany(() => Countries, (countries) => countries.region_8)
  countries8: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI)
  countries9: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI2)
  countrie10: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI3)
  countrie11: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI4)
  countrie12: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI5)
  countrie13: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI6)
  countrie14: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI7)
  countrie15: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI8)
  countrie16: Countries[];

  @OneToMany(() => Countries, (countries) => countries.regionI9)
  countrie17: Countries[];
}
