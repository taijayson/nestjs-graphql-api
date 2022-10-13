// import { DataSource } from 'typeorm';
// import { Factory, Seeder } from 'typeorm-seeding';
import { PriceEntity } from '../../features/price/price.entity';

// export default class InitialDatabaseSeed implements Seeder {
//   public async run(factory: Factory, connection: DataSource): Promise<void> {
//     const prices = await factory(PriceEntity)().createMany(15);

//     await factory(PriceEntity)()
//       .map(async (price) => {
//         price = prices[Math.floor(Math.random() * prices.length)];
//         return price;
//       })
//       .createMany(5);
//   }
// }

import { PriceService } from '../../features/price/price.service';

export const count = [1, 2, 3, 4];

export class InitialSeeder {
  constructor(private readonly priceService: PriceService) {}

  initObj: unknown = {
    title: 'John',
    description: 'Doh',
    amount: 40,
  };

  async seed(initObj): Promise<unknown> {
    const price = await this.priceService.create(initObj);
    return price;
  }
}
