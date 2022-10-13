import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeEntity } from './attribute.entity';
import { AttributeResolver } from './attribute.resolver';
import { AttributeService } from './attribute.service';
// import { DateScalar } from '../../common/scalars/date.scalar';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeEntity])],
  providers: [AttributeResolver, AttributeService],
})
export class AttributeModule {}
