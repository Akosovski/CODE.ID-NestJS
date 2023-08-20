import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Locations } from "./Locations";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";

@Index("departments_pkey", ["departmentId"], { unique: true })
@Entity("departments", { schema: "public" })
export class Departments {
  @PrimaryGeneratedColumn({ type: "integer", name: "department_id" })
  departmentId: number;

  @Column("character varying", {
    name: "department_name",
    nullable: true,
    length: 20,
  })
  departmentName: string | null;

  @ManyToOne(() => Locations, (locations) => locations.departments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_2: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_3: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_4: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_5: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_6: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_7: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location_8: Locations;

  @ManyToOne(() => Locations, (locations) => locations.departments9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI2: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI3: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI4: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI5: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI6: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI7: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI8: Locations;

  @ManyToOne(() => Locations, (locations) => locations.department17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  locationI9: Locations;

  @ManyToOne(() => Employees, (employees) => employees.departments)
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_2: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_3: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_4: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_5: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_6: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_7: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_8: Employees;

  @ManyToOne(() => Employees, (employees) => employees.departments9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI2: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI3: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI4: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI5: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI6: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI7: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI8: Employees;

  @ManyToOne(() => Employees, (employees) => employees.department17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI9: Employees;

  @OneToMany(() => Employees, (employees) => employees.department)
  employees: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_2)
  employees2: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_3)
  employees3: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_4)
  employees4: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_5)
  employees5: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_6)
  employees6: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_7)
  employees7: Employees[];

  @OneToMany(() => Employees, (employees) => employees.department_8)
  employees8: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI)
  employees9: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI2)
  employee10: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI3)
  employee11: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI4)
  employee12: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI5)
  employee13: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI6)
  employee14: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI7)
  employee15: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI8)
  employee16: Employees[];

  @OneToMany(() => Employees, (employees) => employees.departmentI9)
  employee17: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department)
  jobHistories: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_2)
  jobHistories2: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_3)
  jobHistories3: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_4)
  jobHistories4: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_5)
  jobHistories5: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_6)
  jobHistories6: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_7)
  jobHistories7: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department_8)
  jobHistories8: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI)
  jobHistories9: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI2)
  jobHistors: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI3)
  jobHistors2: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI4)
  jobHistors3: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI5)
  jobHistors4: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI6)
  jobHistors5: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI7)
  jobHistors6: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI8)
  jobHistors7: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.departmentI9)
  jobHistors8: JobHistory[];
}
