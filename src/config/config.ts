import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config as cfg } from 'dotenv';

const env = cfg();

export const config = {
  port: env.parsed.PORT,
  dbUrl: env.parsed.DB_URL,
};

// export const pgConfig = {
//   // type: 'postgres',

//   host: env.parsed.POSTGRES_HOST,
//   port: +env.parsed.POSTGRES_PORT,
//   username: env.parsed.POSTGRES_USER,
//   password: env.parsed.POSTGRES_PASSWORD,
//   database: env.parsed.POSTGRES_DATABASE,
// };

// export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
//   return {
//     type: 'postgres',

//     host: env.parsed.POSTGRES_HOST,
//     port: +env.parsed.POSTGRES_PORT,
//     username: env.parsed.POSTGRES_USER,
//     password: env.parsed.POSTGRES_PASSWORD,
//     database: env.parsed.POSTGRES_DATABASE,
//   };
// };

// class ConfigService {
//   constructor(private env: { [k: string]: string | undefined }) {}

//   private getValue(key: string, throwOnMissing = true): string {
//     const value = this.env[key];
//     if (!value && throwOnMissing) {
//       throw new Error(`config error - missing env.${key}`);
//     }

//     return value;
//   }

//   public ensureValues(keys: string[]) {
//     keys.forEach((k) => this.getValue(k, true));
//     return this;
//   }

//   public getPort() {
//     return this.getValue('PORT', true);
//   }

//   public isProduction() {
//     const mode = this.getValue('MODE', false);
//     return mode != 'DEV';
//   }

//   public getTypeOrmConfig(): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',

//       host: this.getValue('POSTGRES_HOST'),
//       port: parseInt(this.getValue('POSTGRES_PORT')),
//       username: this.getValue('POSTGRES_USER'),
//       password: this.getValue('POSTGRES_PASSWORD'),
//       database: this.getValue('POSTGRES_DATABASE'),

//       entities: ['**/*.entity{.ts,.js}'],

//       migrationsTableName: 'migration',

//       migrations: ['src/migration/*.ts'],

//       cli: {
//         migrationsDir: 'src/migration',
//       },

//       ssl: this.isProduction(),
//     };
//   }
// }

// const configService = new ConfigService(process.env).ensureValues([
//   'POSTGRES_HOST',
//   'POSTGRES_PORT',
//   'POSTGRES_USER',
//   'POSTGRES_PASSWORD',
//   'POSTGRES_DATABASE',
// ]);

// export { configService };
