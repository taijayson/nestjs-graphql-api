import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { AttributeEntity } from '../attribute/attribute.entity';
import { CategoryEntity } from '../category/category.entity';
import { PriceEntity } from '../price/price.entity';
// import { DateScalar } from '../../common/scalars/date.scalar';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  gallery?: string[];

  @Column({ type: 'varchar', nullable: true })
  brand?: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'int', nullable: true })
  amount?: number;

  @Column({ type: 'boolean', nullable: true })
  inStock?: boolean;

  @OneToMany(() => PriceEntity, (price) => price.product)
  prices: PriceEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;
}
