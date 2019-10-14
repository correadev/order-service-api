import ordersDb from '../data-acess'
import makeListOrder from './list-order'

describe('list-order tests', () => {
  test('ServiceType not informed Throws Error', () => {
    const listOrder = makeListOrder({ ordersDb })
    const payload = {
      serviceType: null,
      lat: 1,
      long: 1
    }
    expect(() => listOrder(payload)).toThrow()
  })

  test('Latitude not informed Throws Error', () => {
    const listOrder = makeListOrder({ ordersDb })
    const payload = {
      serviceType: 1,
      lat: null,
      long: 1
    }
    expect(() => listOrder(payload)).toThrow()
  })

  test('Longitude not informed Throws Error', () => {
    const listOrder = makeListOrder({ ordersDb })
    const payload = {
      serviceType: 1,
      lat: 1,
      long: null
    }
    expect(() => listOrder(payload)).toThrow()
  })

  test('Payload is Valid', () => {
    const listOrder = makeListOrder({ ordersDb })
    const payload = {
      serviceType: 'OIL_CHANGE',
      lat: -23.5566759,
      long: -46.6857404
    }

    const partnersFound = listOrder(payload)

    expect(partnersFound.length).toBeGreaterThan(0)
  })
})
