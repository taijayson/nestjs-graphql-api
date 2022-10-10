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
console.log(process.env.DATABASE_URL);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url:
        process.env.DATABASE_URL ||
        'postgres://efowgjuxyvoxcl:17730737e046ec0f8555729cd4adcda6482f77228a6fd31ecab9214107f1ee64@ec2-34-247-72-29.eu-west-1.compute.amazonaws.com:5432/d3mp6q4jsdem5s',
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
