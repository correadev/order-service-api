import fs from 'fs'
import { partnersDb, usersDb } from './db-paths'

export default function makeFileDb () {
  return Object.freeze({
    findPartnersByServiceType,
    findUser
  })

  function findPartnersByServiceType ({ serviceType }) {
    const partners = readDbFile('./file-db/partners.json')

    return partners.filter(({ availableServices }) =>
      availableServices.includes(serviceType))
  }

  async function findUser ({ email, password }) {
    const users = readDbFile('./file-db/users.json')

    return users.find(u => u.email === email && u.password === password)
  }

  function readDbFile (fileRelativePath) {
    return JSON.parse(fs.readFileSync(fileRelativePath, 'utf-8'))
  }
}
