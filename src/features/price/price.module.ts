import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceEntity } from './price.entity';
import { PriceResolver } from './price.resolver';
import { PriceService } from './price.service';
// import { DateScalar } from '../../common/scalars/date.scalar';

@Module({
  imports: [TypeOrmModule.forFeature([PriceEntity])],
  providers: [PriceResolver, PriceService],
})
export class PriceModule {}
