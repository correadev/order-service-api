import { listOrder } from '../use-cases'
import makeListOrder from './get-order'
import notFound from './not-found'

const getOrder = makeListOrder({ listOrder })

const orderController = Object.freeze({
  getOrder,
  notFound
})

export default orderController
export { getOrder, notFound }
