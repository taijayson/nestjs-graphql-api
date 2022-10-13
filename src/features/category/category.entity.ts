import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { DateScalar } from '../../common/scalars/date.scalar';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description?: string;

  @Column({ type: 'int', nullable: true })
  amount?: number;
}
