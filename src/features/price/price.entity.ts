import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { DateScalar } from '../../common/scalars/date.scalar';
import { ProductEntity } from '../product/product.entity';

@Entity()
export class PriceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description?: string;

  @Column({ type: 'int', nullable: true })
  amount?: number;

  @ManyToOne(() => ProductEntity, (product) => product.prices)
  product: ProductEntity;
}
