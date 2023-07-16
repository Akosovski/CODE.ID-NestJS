import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface categoriesAttributes {
  cate_id: number;
  cate_name?: string;
  cate_description?: string;
}

@Table({ tableName: 'categories', schema: 'public', timestamps: false })
export class categories
  extends Model<categoriesAttributes, categoriesAttributes>
  implements categoriesAttributes
{
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'categories_pkey', using: 'btree', unique: true })
  cate_id!: number;

  @Column({ allowNull: true, type: DataType.STRING(15) })
  cate_name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  cate_description?: string;
}
