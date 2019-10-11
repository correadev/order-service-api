import jwt from 'jsonwebtoken'

export default function makeLogin ({ ordersDb }) {
    return async function login ({ email, password }) {
      if (!email || !password) {
        throw new Error('Email ou senha não informados.')
      }

      const user = await ordersDb.findUser({ email, password })

      if (!user) {
        throw new Error('Usuário ou senha inválidos.')
      }

      return jwt.sign(user, process.env.API_AUTH_TOKEN, async (err, token) => {
        if (err) throw new Error(err)
        return token
      })
  }
}
