import { Request, Response, Router } from 'express'
import app from '../../../server'

import { login, register } from '../auth.controller'

app.post('/login', (req: Request, res: Response) => {
  login(req, res)
})

app.post('/register', (req: Request, res: Response) => {
  register(req, res)
})
