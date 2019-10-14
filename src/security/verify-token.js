export default function makeVerifyToken ({ verify }, secretKey) {
  return function verifyToken (token) {
    return verify(token, secretKey)
  }
}
