import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Departments } from "./Departments";
import { Employees } from "./Employees";
import { Jobs } from "./Jobs";

@Index("employee_id_start_date_pk", ["employeeId", "startDate"], {
  unique: true,
})
@Entity("job_history", { schema: "public" })
export class JobHistory {
  @Column("integer", { primary: true, name: "employee_id" })
  employeeId: number;

  @Column("date", { primary: true, name: "start_date" })
  startDate: string;

  @Column("character varying", {
    name: "end_date",
    nullable: true,
    length: 255,
  })
  endDate: string | null;

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

  @ManyToOne(() => Departments, (departments) => departments.jobHistories7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_7: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department_8: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI2: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI3: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI4: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI5: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI6: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI7: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI8: Departments;

  @ManyToOne(() => Departments, (departments) => departments.jobHistors8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  departmentI9: Departments;

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

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_7: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  job_8: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistories9, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI2: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI3: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors3, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI4: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors4, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI5: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors5, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI6: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors6, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI7: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors7, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI8: Jobs;

  @ManyToOne(() => Jobs, (jobs) => jobs.jobHistors8, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "job_id", referencedColumnName: "jobId" }])
  jobI9: Jobs;
}
