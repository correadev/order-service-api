export default function makeVerifyToken ({ verify }, secretKey) {
  return function verifyToken (httpRequest) {
    return verify(httpRequest.token, secretKey)
  }
}
