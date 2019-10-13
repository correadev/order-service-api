import { sign, verify } from 'jsonwebtoken'
import makeLogin from './login'
import makeVerifyToken from './verify-token'
import makeAuthorizationCallback from './authorization'
import ordersDb from '../data-acess'

const login = makeLogin({ ordersDb, sign })
const verifyToken = makeVerifyToken({ verify }, process.env.API_AUTH_TOKEN)

const loginService = Object.freeze({
  login,
  verifyToken,
  makeAuthorizationCallback
})

export default loginService
export { login, verifyToken, makeAuthorizationCallback }
