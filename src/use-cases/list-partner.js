import calculateDistance from './calculate-distance'
import {
  msgMissingServiceType,
  msgMissingLatitude,
  msgMissingLongitude
} from '../helpers/string-resources'

export default function makeListPartner ({ ordersDb }) {
  return function listPartner ({ serviceType, lat, long } = {}) {
    if (!serviceType) {
      throw new Error(msgMissingServiceType)
    }

    if (!lat) {
      throw new Error(msgMissingLatitude)
    }

    if (!long) {
      throw new Error(msgMissingLongitude)
    }

    const maxDistanceKm = 10
    return ordersDb
      .findPartnersByServiceType({ serviceType })
      .find(partner => calculateDistance(lat, long, partner.location.lat, partner.location.long) <= maxDistanceKm)
  }
}
