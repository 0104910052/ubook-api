import { createConnection } from 'typeorm'
import env from './load-environment'

export const loadDatabase = () => {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    entities: [__dirname + '/entity/*.ts'],
    synchronize: true,
  })
    .then(() => {
      console.log('Connection to database initialized.')
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
}
