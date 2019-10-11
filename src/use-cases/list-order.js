import { msgInformarTipoServico } from '../helpers/string-resources'

export default function makeListOrder ({ ordersDb }) {
  return function listOrder ({ serviceType, lat, long } = {}) {
    if (!serviceType || !lat || !long) {
      throw new Error(msgInformarTipoServico)
    }

    const partners = ordersDb.findPartners({
      serviceType,
      lat,
      long
    })

    return partners
  }
}
