import { msgUnavailablePartner } from '../helpers/string-resources'

export default function makeGetPartner ({ listPartner }, verifyToken) {
  return async function getPartner (httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      verifyToken(httpRequest.token)

      const order = await listPartner({
        serviceType: httpRequest.query.serviceType,
        lat: httpRequest.query.lat,
        long: httpRequest.query.long
      })

      if (!order) {
        return {
          headers,
          statusCode: 200,
          body: {
            message: msgUnavailablePartner
          }
        }
      }

      return {
        headers,
        statusCode: 200,
        body: order
      }
    } catch (e) {
      console.log(e)

      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
