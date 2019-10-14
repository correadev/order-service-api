import {
  msgWrongUserOrPassword,
  msgEmailOrPasswordNotInformed
} from '../helpers/string-resources'

export default function makeLogin ({ ordersDb, sign }) {
  return async function login ({ email, password }) {
    if (!email || !password) {
      throw new Error(msgEmailOrPasswordNotInformed)
    }

    const user = await ordersDb.findUser({ email, password })

    if (!user) {
      throw new Error(msgWrongUserOrPassword)
    }

    return sign(user, process.env.API_AUTH_TOKEN)
  }
}
