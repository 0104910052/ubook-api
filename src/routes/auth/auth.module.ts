import { Request, Response, Router } from 'express'
import app from '../../server'
import { login } from './auth.controller'

export const registerAuthModule = () => {
  app.route('/auth/login').post(login)
}
