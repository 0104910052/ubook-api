import { Environment } from '../../types/configuration/environment'
require('dotenv').config()

const loadEnv = () => {
  let e: Environment = {
    PRODUCTION: !!process.env.PRODUCTION,
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    REQUEST_LIMIT: process.env.REQUEST_LIMIT || '100kb',
    DB_HOST: process.env.DB_HOST || '127.0.0.1',
    DB_NAME: process.env.DB_NAME || 'ubook',
    DB_PASS: process.env.DB_PASS || 'easypass',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PROT: process.env.DB_PROT ? parseInt(process.env.DB_PROT) : 5432,
    SESSION_SECRETS: [
      process.env.SESSION_SECRET_1 || 's1',
      process.env.SESSION_SECRET_2 || 's2',
      process.env.SESSION_SECRET_3 || 's3',
    ],
  }

  return e
}

let env: Environment = loadEnv()

export default env
