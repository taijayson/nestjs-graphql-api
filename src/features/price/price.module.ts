import { Module } from '@nestjs/common';

import { PriceResolver } from './price.resolver';
import { PriceService } from './price.service';

@Module({
  providers: [PriceResolver, PriceService],
})
export class PriceModule {}
