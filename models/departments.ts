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
import { locations } from './locations';
import { employees } from './employees';
import { job_history } from './job_history';

export interface departmentsAttributes {
  department_id?: number;
  department_name?: string;
  manager_id?: number;
  location_id?: number;
}

@Table({ tableName: 'departments', schema: 'public', timestamps: false })
export class departments
  extends Model<departmentsAttributes, departmentsAttributes>
  implements departmentsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('departments_department_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'pk_department_id', using: 'btree', unique: true })
  @Index({ name: 'departments_pkey', using: 'btree', unique: true })
  department_id?: number;

  @Column({ allowNull: true, type: DataType.STRING(30) })
  department_name?: string;

  @ForeignKey(() => employees)
  @Column({ allowNull: true, type: DataType.INTEGER })
  manager_id?: number;

  @ForeignKey(() => locations)
  @Column({ allowNull: true, type: DataType.INTEGER })
  location_id?: number;

  @BelongsTo(() => locations)
  location?: locations;

  @HasMany(() => employees, { sourceKey: 'department_id' })
  employees?: employees[];

  @BelongsTo(() => employees)
  employee?: employees;

  @HasMany(() => job_history, { sourceKey: 'department_id' })
  job_histories?: job_history[];
}
