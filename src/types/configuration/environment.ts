export interface Environment {
  PRODUCTION: boolean
  PORT: number
  REQUEST_LIMIT: string
  DB_PROT: number
  DB_NAME: string
  DB_USER: string
  DB_PASS: string
  DB_HOST: string
  SESSION_SECRETS: [string, string, string]
}
