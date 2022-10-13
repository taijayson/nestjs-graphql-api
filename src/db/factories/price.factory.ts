import { define } from 'typeorm-seeding';

import { PriceEntity } from '../../features/price/price.entity';

define(PriceEntity, () => {
  const price = new PriceEntity();
  price.title = 'John';
  price.description = 'Doh';
  price.amount = 40;
  return price;
});
