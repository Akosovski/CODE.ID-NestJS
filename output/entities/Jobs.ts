import { Column, Entity, Index, OneToMany } from "typeorm";
import { Employees } from "./Employees";
import { JobHistory } from "./JobHistory";

@Index("jobs_pkey", ["jobId"], { unique: true })
@Entity("jobs", { schema: "public" })
export class Jobs {
  @Column("character varying", { primary: true, name: "job_id", length: 10 })
  jobId: string;

  @Column("character varying", {
    name: "job_title",
    nullable: true,
    length: 31,
  })
  jobTitle: string | null;

  @Column("numeric", {
    name: "min_salary",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  minSalary: string | null;

  @Column("numeric", {
    name: "max_salary",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  maxSalary: string | null;

  @OneToMany(() => Employees, (employees) => employees.job)
  employees: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_2)
  employees2: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_3)
  employees3: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_4)
  employees4: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_5)
  employees5: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_6)
  employees6: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_7)
  employees7: Employees[];

  @OneToMany(() => Employees, (employees) => employees.job_8)
  employees8: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI)
  employees9: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI2)
  employee10: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI3)
  employee11: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI4)
  employee12: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI5)
  employee13: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI6)
  employee14: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI7)
  employee15: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI8)
  employee16: Employees[];

  @OneToMany(() => Employees, (employees) => employees.jobI9)
  employee17: Employees[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job)
  jobHistories: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_2)
  jobHistories2: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_3)
  jobHistories3: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_4)
  jobHistories4: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_5)
  jobHistories5: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_6)
  jobHistories6: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_7)
  jobHistories7: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.job_8)
  jobHistories8: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI)
  jobHistories9: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI2)
  jobHistors: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI3)
  jobHistors2: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI4)
  jobHistors3: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI5)
  jobHistors4: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI6)
  jobHistors5: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI7)
  jobHistors6: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI8)
  jobHistors7: JobHistory[];

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.jobI9)
  jobHistors8: JobHistory[];
}
