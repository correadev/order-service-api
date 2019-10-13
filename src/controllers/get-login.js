export default function makeGetlogin ({ login }) {
  return async function getLogin (httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const token = await login({
        email: httpRequest.body.email,
        password: httpRequest.body.password
      })

      return {
        headers,
        statusCode: 200,
        body: { token }
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
