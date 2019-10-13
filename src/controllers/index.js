import { verify } from 'jsonwebtoken'
import { listOrder, middlewareValidation } from '../use-cases'
import { login, validToken } from '../security'
import makeListOrder from './get-order'
import makeGetlogin from './get-login'
import notFound from './not-found'

const getOrder = makeListOrder({ listOrder, verify })
const getLogin = makeGetlogin({ login })

const orderController = Object.freeze({
  getOrder,
  getLogin,
  notFound,
  middlewareValidation
})

export default orderController
export { getOrder, getLogin, notFound, middlewareValidation }
