import { msgWrongParameters } from '../helpers/string-resources'
import calculateDistance from './calculate-distance'

export default function makeListOrder ({ ordersDb }) {
  return function listOrder ({ serviceType, lat, long } = {}) {
    if (!serviceType || !lat || !long) {
      throw new Error(msgWrongParameters)
    }

    const partners = ordersDb.findPartnersByServiceType({ serviceType })

    console.log(calculateDistance(-23.619575, -46.627023, partners[0].location.lat, partners[0].location.long))

    return partners
  }
}
