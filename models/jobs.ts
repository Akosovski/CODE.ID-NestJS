import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { employees } from './employees';
import { job_history } from './job_history';

export interface jobsAttributes {
  job_id: string;
  job_title?: string;
  min_salary?: string;
  max_salary?: string;
}

@Table({ tableName: 'jobs', schema: 'public', timestamps: false })
export class jobs
  extends Model<jobsAttributes, jobsAttributes>
  implements jobsAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(10) })
  @Index({ name: 'jobs_job_id_key', using: 'btree', unique: true })
  @Index({ name: 'pk_job_id', using: 'btree', unique: true })
  @Index({ name: 'jobs_pkey', using: 'btree', unique: true })
  job_id!: string;

  @Column({ allowNull: true, type: DataType.STRING(35) })
  job_title?: string;

  @Column({ allowNull: true, type: DataType.DECIMAL(8, 2) })
  min_salary?: string;

  @Column({ allowNull: true, type: DataType.DECIMAL(8, 2) })
  max_salary?: string;

  @HasMany(() => employees, { sourceKey: 'job_id' })
  employees?: employees[];

  @HasMany(() => job_history, { sourceKey: 'job_id' })
  job_histories?: job_history[];
}
