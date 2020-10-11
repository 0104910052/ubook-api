import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import env from './utils/system/load-environment'
import { loadDatabase } from './utils/system/load-database'
import useHelmet from 'helmet'
import { loadSessionConfiguration } from './utils/system/load-session'

const app = express()

const loadParseConfiguration = () => {
  app.use(bodyParser.json({ limit: env.REQUEST_LIMIT }))
  app.use(bodyParser.urlencoded({ limit: env.REQUEST_LIMIT, extended: false }))
}

const loadCorsPolicy = () => {
  app.use(
    cors({
      credentials: true,
      origin: '*',
    })
  )
}

const loadHelmet = () => {
  app.use(useHelmet())
}

const configureServer = () => {
  loadParseConfiguration()
  loadCorsPolicy()
  loadHelmet()
}

const appListen = () => {
  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`)
  })
}

export const initServer = () => {
  configureServer()
  loadSessionConfiguration()
  loadDatabase()
  appListen()
}

export default app
