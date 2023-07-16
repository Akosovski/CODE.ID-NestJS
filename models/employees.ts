import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { departments } from './departments';
import { jobs } from './jobs';

export interface employeesAttributes {
  employee_id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  hire_date?: string;
  salary?: string;
  commission_pct?: string;
  job_id?: string;
  manager_id?: number;
  department_id?: number;
  xemp_id?: number;
}

@Table({ tableName: 'employees', schema: 'public', timestamps: false })
export class employees
  extends Model<employeesAttributes, employeesAttributes>
  implements employeesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('employees_employee_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'pk_employee_id', using: 'btree', unique: true })
  @Index({ name: 'employees_pkey', using: 'btree', unique: true })
  employee_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(20) })
  first_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(25) })
  last_name?: string;

  @Column({ allowNull: true, type: DataType.STRING(25) })
  email?: string;

  @Column({ allowNull: true, type: DataType.STRING(20) })
  phone_number?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  hire_date?: string;

  @Column({ allowNull: true, type: DataType.DECIMAL(8, 2) })
  salary?: string;

  @Column({ allowNull: true, type: DataType.DECIMAL(2, 2) })
  commission_pct?: string;

  @ForeignKey(() => jobs)
  @Column({ allowNull: true, type: DataType.STRING(10) })
  job_id?: string;

  @ForeignKey(() => employees)
  @Column({ allowNull: true, type: DataType.INTEGER })
  manager_id?: number;

  @ForeignKey(() => departments)
  @Column({ allowNull: true, type: DataType.INTEGER })
  department_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  xemp_id?: number;

  @BelongsTo(() => departments)
  department?: departments;

  @BelongsTo(() => jobs)
  job?: jobs;

  @HasMany(() => employees, { sourceKey: 'employee_id' })
  employees?: employees[];

  @BelongsTo(() => employees)
  employee?: employees;

  @HasMany(() => departments, { sourceKey: 'employee_id' })
  departments?: departments[];
}
