import { verify } from 'jsonwebtoken'
import makeListOrder from './list-order'
import makeMiddlewareValidation from './middleware-validation'
import ordersDb from '../data-acess'

const listOrder = makeListOrder({ ordersDb })
const middlewareValidation = makeMiddlewareValidation({ verify }, process.env.API_AUTH_TOKEN)

const orderService = Object.freeze({
  listOrder,
  middlewareValidation
})

export default orderService
export { listOrder, middlewareValidation }
