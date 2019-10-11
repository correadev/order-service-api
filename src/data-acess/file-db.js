import fs from 'fs'

export default function makeFileDb () {
  return Object.freeze({
    findPartners
  })

  function findPartners ({ serviceType, lat, long }) {
    const partnersFile = fs.readFileSync('./file-db/partners.json', 'utf-8')

    const partners = JSON.parse(partnersFile)

    return partners.filter(({ location, availableServices }) =>
      +location.lat === +lat &&
      +location.long === +long &&
      availableServices.includes(serviceType))
  }
}
