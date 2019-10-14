import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import makeCallback from './express-callback'
import { getPartner, getLogin } from './controllers'
import { makeAuthorizationCallback } from './security'

const app = express()
app.use(bodyParser.json())

dotenv.config()

const apiRoot = process.env.API_ROOT

app.get(`/${apiRoot}/partner`, makeCallback(getPartner))
app.post(`/${apiRoot}/login`, makeAuthorizationCallback(getLogin))

if (process.env.API_ENV === 'dev') {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on ${process.env.API_BASE_URL}${process.env.API_PORT}`)
  })
}

export default app
