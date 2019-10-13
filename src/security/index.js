import { sign, verify } from 'jsonwebtoken'
import makeLogin from './login'
import makeVerifyToken from './verify-token'
import ordersDb from '../data-acess'

const login = makeLogin({ ordersDb, sign })
const verifyToken = makeVerifyToken({ verify })

const loginService = Object.freeze({
  login,
  verifyToken
})

export default loginService
export { login, verifyToken }
