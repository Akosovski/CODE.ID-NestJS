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
import { Jobs } from "./Jobs";
import { JobHistory } from "./JobHistory";

@Index("employees_pkey", ["employeeId"], { unique: true })
@Entity("employees", { schema: "public" })
export class Employees {
  @PrimaryGeneratedColumn({ type: "integer", name: "employee_id" })
  employeeId: number;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 11,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 11,
  })
  lastName: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 8 })
  email: string | null;

  @Column("character varying", {
    name: "phone_number",
    nullable: true,
    length: 18,
  })
  phoneNumber: string | null;

  @Column("character varying", {
    name: "hire_date",
    nullable: true,
    length: 255,
  })
  hireDate: string | null;

  @Column("numeric", { name: "salary", nullable: true, precision: 7, scale: 2 })
  salary: string | null;

  @Column("character varying", {
    name: "commission_pct",
    nullable: true,
    length: 4,
  })
  commissionPct: string | null;

  @Column("integer", { name: "xemp_id", nullable: true })
  xempId: number | null;

  @OneToMany(() => Departments, (departments) => departments.manager)
  departments: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_2)
  departments2: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_3)
  departments3: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_4)
  departments4: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_5)
  departments5: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_6)
  departments6: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_7)
  departments7: Departments[];

  @OneToMany(() => Departments, (departments) => departments.manager_8)
  departments8: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI)
  departments9: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI2)
  department10: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI3)
  department11: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI4)
  department12: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI5)
  department13: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI6)
  department14: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI7)
  department15: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI8)
  department16: Departments[];

  @OneToMany(() => Departments, (departments) => departments.managerI9)
  department17: Departments[];

  @ManyToOne(() => Departments, (departments) => departments.employees, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_2: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_3: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_4: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_5: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_6: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_7: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_8: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employees9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI2: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI3: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI4: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI5: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI6: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI7: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI8: Departments;

  @ManyToOne(() => Departments, (departments) => departments.employee17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI9: Departments;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_2: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_3: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_4: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_5: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_6: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_7: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_8: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI2: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI3: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI4: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI5: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI6: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI7: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI8: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.employee17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI9: Jobs;

  @ManyToOne(() => Employees, (employees) => employees.employees, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager)
  employees: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_2: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_2)
  employees2: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_3: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_3)
  employees3: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_4: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_4)
  employees4: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_5: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_5)
  employees5: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_6: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_6)
  employees6: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_7: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_7)
  employees7: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager_8: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager_8)
  employees8: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employees9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI)
  employees9: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee10, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI2: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI2)
  employee10: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee11, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI3: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI3)
  employee11: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee12, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI4: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI4)
  employee12: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee13, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI5: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI5)
  employee13: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee14, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI6: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI6)
  employee14: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee15, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI7: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI7)
  employee15: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee16, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI8: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI8)
  employee16: Employees[];

  @ManyToOne(() => Employees, (employees) => employees.employee17, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  managerI9: Employees;

  @OneToMany(() => Employees, (employees) => employees.managerI9)
  employee17: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.employee)
  jobHistories: JobHistory[];
}
