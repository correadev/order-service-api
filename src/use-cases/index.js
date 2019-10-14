import calculateDistance from './calculate-distance'
import makeListOrder from './list-order'
import ordersDb from '../data-acess'

const listOrder = makeListOrder({ ordersDb })

const orderService = Object.freeze({
  listOrder,
  calculateDistance
})

export default orderService
export { listOrder, calculateDistance }
