export default function makeGetOrder ({ listOrder, jwt }) {
  return async function getOrder (httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      jwt.verify(httpRequest.token, 'secretkey', (err, httpRequest) => {
        if (err) {
          return {
            headers,
            statusCode: 403,
            body: err
          }
        }
      })

      const order = await listOrder({
        serviceType: httpRequest.query.serviceType,
        lat: httpRequest.query.lat,
        long: httpRequest.query.long
      })
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
