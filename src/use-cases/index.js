import makeListOrder from './list-order'
import ordersDb from '../data-acess'

const listOrder = makeListOrder({ ordersDb })

const orderService = Object.freeze({
  listOrder
})

export default orderService
export { listOrder }
