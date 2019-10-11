import makeLogin from './login'
import ordersDb from '../data-acess'

const login = makeLogin({ ordersDb })

const loginService = Object.freeze({
  login
})

export default loginService
export { login }
