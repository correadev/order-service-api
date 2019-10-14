import { listPartner, middlewareValidation } from '../use-cases'
import { login, verifyToken } from '../security'
import makeListOrder from './get-partner'
import makeGetlogin from './get-login'
import notFound from './not-found'

const getPartner = makeListOrder({ listPartner }, verifyToken)
const getLogin = makeGetlogin({ login })

const orderController = Object.freeze({
  getPartner,
  getLogin,
  notFound,
  middlewareValidation
})

export default orderController
export { getPartner, getLogin, notFound, middlewareValidation }
