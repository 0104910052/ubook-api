import { registerAuthModule } from './auth/auth.module'

export const loadRoutes = () => {
  registerAuthModule()
}
