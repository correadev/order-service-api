import makeListOrder from './list-order'
import ordersDb from '../orders-db'

const listOrder = makeListOrder({ ordersDb })

const orderService = Object.freeze({
  listOrder
})

export default orderService
export { listOrder }
