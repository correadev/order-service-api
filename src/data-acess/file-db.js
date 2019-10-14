import fs from 'fs'
import { usersDb, partnersDb } from './db-paths'

export default function makeFileDb () {
  return Object.freeze({
    findPartnersByServiceType,
    findUser
  })

  function findPartnersByServiceType ({ serviceType }) {
    const partners = readDbFile(partnersDb)

    return partners.filter(({ availableServices }) =>
      availableServices.includes(serviceType))
  }

  async function findUser ({ email, password }) {
    const users = readDbFile(usersDb)

    return users.find(u => u.email === email && u.password === password)
  }

  function readDbFile (fileRelativePath) {
    return JSON.parse(fs.readFileSync(fileRelativePath, 'utf-8'))
  }
}
