import calculateDistance from './calculate-distance'
import {
  msgMissingServiceType,
  msgMissingLatitude,
  msgMissingLongitude
} from '../helpers/string-resources'

export default function makeListOrder ({ ordersDb }) {
  return function listOrder ({ serviceType, lat, long } = {}) {
    if (!serviceType) {
      throw new Error(msgMissingServiceType)
    }

    if (!lat) {
      throw new Error(msgMissingLatitude)
    }

    if (!long) {
      throw new Error(msgMissingLongitude)
    }

    const partners = ordersDb.findPartnersByServiceType({ serviceType })

    const closePartners = []
    const maxDistanceKm = 10

    partners.forEach(partner => {
      if (calculateDistance(lat, long, partner.location.lat, partner.location.long) <= maxDistanceKm) {
        closePartners.push(partner)
      }
    })

    return closePartners
  }
}
