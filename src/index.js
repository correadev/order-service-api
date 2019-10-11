import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import makeCallback from './express-callback'
import { getOrder } from './controllers'

const app = express()
app.use(bodyParser.json())

dotenv.config()

const apiRoot = process.env.API_ROOT

app.all(`/${apiRoot}/order`, makeCallback(getOrder))

if (process.env.API_ENV === 'dev') {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on ${process.env.API_BASE_URL}`)
  })
}

export default app
