import { listOrder } from '../use-cases'
import { login } from '../security'
import makeListOrder from './get-order'
import makeGetlogin from './get-login'
import notFound from './not-found'
import jwt from 'jsonwebtoken'

const getOrder = makeListOrder({ listOrder, jwt })
const getLogin = makeGetlogin({ login })

const orderController = Object.freeze({
  getOrder,
  getLogin,
  notFound
})

export default orderController
export { getOrder, getLogin, notFound }
