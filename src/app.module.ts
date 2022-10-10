import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { join } from 'path';

import { PriceModule } from './features/price/price.module';
import { /*getTypeOrmConfig, pgConfig*/ config } from './config/config';

// const typeOrmConfig = getTypeOrmConfig();
// console.log(typeOrmConfig);

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
      entities: ['dist/**/**/*.entity{.ts, .js}'],
    }),
    PriceModule,
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
  ],
})
export class AppModule {}
