import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
// import { DateScalar } from '../../common/scalars/date.scalar';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
