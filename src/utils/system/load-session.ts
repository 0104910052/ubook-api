import session from 'express-session'
import app from '../../server'
import env from './load-environment'
import redis from 'redis'
import { v4 as uuidv4 } from 'uuid'

const RedisStore = require('connect-redis')(session)

export const loadSessionConfiguration = () => {
  let redisClient = redis.createClient()

  app.use(
    session({
      name: 'lsq',
      secret: env.SESSION_SECRETS,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: env.PRODUCTION,
        maxAge: 1000 * 60 * 60 * 24 * 30,
        secure: env.PRODUCTION,
      },
      store: new RedisStore({ client: redisClient, ttl: 86400 }),
      genid: () => uuidv4(),
    })
  )
}
