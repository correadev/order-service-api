export default function makeMiddlewareValidation ({ verify }, secretKey) {
    return async function middlewareValidation (httpRequest, next) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const bearerHeader = httpRequest.headers.Authorization

        if (!bearerHeader) {
          return {
            headers,
            statusCode: 403,
            body: { error: 'forbidden' }
          }  
        }

        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        httpRequest.token = bearerToken

        verify(httpRequest.token, secretKey, (err, httpRequest) => {
          if (err) {
            return {
              headers: httpRequest.headers,
              statusCode: 403,
              body: { error: 'forbidden' }
            }
          }
        })
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
  