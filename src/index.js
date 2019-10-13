import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import { getOrder, getLogin, middlewareValidation } from './controllers'
import makeCallback from './express-callback'

const app = express()
app.use(bodyParser.json())

dotenv.config()

const apiRoot = process.env.API_ROOT

app.get(`/${apiRoot}/order`, makeCallback(getOrder))
app.post(`/${apiRoot}/login`, makeCallback(getLogin))

if (process.env.API_ENV === 'dev') {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on ${process.env.API_BASE_URL}${process.env.API_PORT}`)
  })
}

export default app
