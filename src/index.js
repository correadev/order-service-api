import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import { getOrder, getLogin } from './controllers'
import makeCallback from './express-callback'

const app = express()
app.use(bodyParser.json())

dotenv.config()

const apiRoot = process.env.API_ROOT

app.get(`/${apiRoot}/order`, verifyToken, makeCallback(getOrder))
app.post(`/${apiRoot}/login`, makeCallback(getLogin))

if (process.env.API_ENV === 'dev') {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on ${process.env.API_BASE_URL}`)
  })
}

function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}

export default app
