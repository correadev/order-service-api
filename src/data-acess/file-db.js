import fs from 'fs'
import { partnersDb, usersDb } from './db-paths'

export default function makeFileDb () {
  return Object.freeze({
    findPartners,
    findUser
  })

  function findPartners ({ serviceType, lat, long }) {
    const partners = readDbFile(partnersDb)

    return partners.filter(({ location, availableServices }) =>
      +location.lat === +lat &&
      +location.long === +long &&
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
