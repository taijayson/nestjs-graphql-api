import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { DateScalar } from '../../common/scalars/date.scalar';
import { ProductEntity } from '../product/product.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
