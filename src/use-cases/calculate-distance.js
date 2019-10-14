export default function calculateDistance (fromLat, fromLong, toLat, toLong) {
  if ((fromLat === toLat) && (fromLong === toLong)) {
    return 0
  }

  const milleToKm = 1.609344

  var radlat1 = Math.PI * fromLat / 180
  var radlat2 = Math.PI * toLat / 180
  var theta = fromLong - toLong
  var radtheta = Math.PI * theta / 180
  var distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  if (distance > 1) {
    distance = 1
  }
  distance = Math.acos(distance)
  distance = distance * 180 / Math.PI
  distance = distance * 60 * 1.1515

  return (distance * milleToKm)
}
