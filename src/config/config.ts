import { config } from 'dotenv';

const conf = config();

export const configObject = {
  mongoDb: conf.parsed.MONGODB_URI,
};
