import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { jobs } from './jobs';
import { departments } from './departments';

export interface job_historyAttributes {
  employee_id?: number;
  start_date?: string;
  end_date?: string;
  job_id?: string;
  department_id?: number;
}

@Table({ tableName: 'job_history', schema: 'public', timestamps: false })
export class job_history
  extends Model<job_historyAttributes, job_historyAttributes>
  implements job_historyAttributes
{
  @Column({ allowNull: true, type: DataType.INTEGER })
  @Index({ name: 'employee_id_start_date_pk', using: 'btree', unique: true })
  employee_id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  @Index({ name: 'employee_id_start_date_pk', using: 'btree', unique: true })
  start_date?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  end_date?: string;

  @ForeignKey(() => jobs)
  @Column({ allowNull: true, type: DataType.STRING(10) })
  job_id?: string;

  @ForeignKey(() => departments)
  @Column({ allowNull: true, type: DataType.INTEGER })
  department_id?: number;

  @BelongsTo(() => jobs)
  job?: jobs;

  @BelongsTo(() => departments)
  department?: departments;
}
