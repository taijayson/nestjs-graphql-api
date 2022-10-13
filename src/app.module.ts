import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { join } from 'path';

// import { PriceEntity } from './features/price/price.entity';

import { /*getTypeOrmConfig, pgConfig*/ config } from './config/config';
import { PriceModule } from './features/price/price.module';
import { AttributeModule } from './features/attribute/attribute.module';
import { CategoryModule } from './features/category/category.module';
import { ProductModule } from './features/product/product.module';

// const typeOrmConfig = getTypeOrmConfig();
// console.log(process.cwd());
// console.log(__dirname + '/../**/*.entity{.ts, .js}');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: config.dbUrl,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/**/*.entity.ts'],
      factories: ['src/db/seeding/**/*{.ts,.js}'],
    } as TypeOrmModuleOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      playground: true,
      introspection: true,
      buildSchemaOptions: {
        // dateScalarMode: 'timestamp',
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    CategoryModule,
    // ProductModule,
    PriceModule,
    AttributeModule,
  ],
})
export class AppModule {}
