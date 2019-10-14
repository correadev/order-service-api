import calculateDistance from './calculate-distance'
import makeListPartner from './list-partner'
import ordersDb from '../data-acess'

const listPartner = makeListPartner({ ordersDb })

const orderService = Object.freeze({
  listPartner,
  calculateDistance
})

export default orderService
export { listPartner, calculateDistance }
