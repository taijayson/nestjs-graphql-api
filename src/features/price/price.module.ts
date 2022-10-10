import { Module } from '@nestjs/common';

import { PriceObj, PriceSchema } from './price.schema';
import { PriceResolver } from './price.resolver';
import { PriceService } from './price.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { DateScalar } from '../../common/scalars/date.scalar';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PriceObj.name, schema: PriceSchema }]),
  ],
  providers: [PriceResolver, PriceService],
})
export class PriceModule {}
