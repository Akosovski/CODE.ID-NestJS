import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departments } from "./Departments";
import { Employees } from "./Employees";
import { Jobs } from "./Jobs";

@Index("employee_id_start_date_pk", ["employeeId", "startDate"], {
  unique: true,
})
@Entity("job_history", { schema: "public" })
export class JobHistory {
  @Column("integer", { name: "employee_id", nullable: true })
  employeeId: number | null;

  @Column("character varying", {
    name: "start_date",
    nullable: true,
    length: 255,
  })
  startDate: string | null;

  @Column("character varying", {
    name: "end_date",
    nullable: true,
    length: 255,
  })
  endDate: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_2: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_3: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_4: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_5: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_6: Departments;

  @ManyToOne(() => Employees, (employees) => employees.jobHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "employee_id", referencedColumnName: "employeeId" }])
  employee: Employees;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_2: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_3: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_4: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_5: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_6: Jobs;
}
