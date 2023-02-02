// import all 3 formats
const PROVINCES = require('../utils/enums').PROVINCES
const formatBC = require('./formatBC')

const selectProvinceToFormat = (frData, province) => {
  let formattedData
  switch (province) {
    case PROVINCES.BC:
      formattedData = formatBC(frData)
      break
    case PROVINCES.ON:
      formattedData = formatON(frData)
    break
    case PROVINCES.AB:
      formattedData = formatAB(frData)
    break
    case PROVINCES.NS:
      formattedData = formatNS(frData)
    break
    case PROVINCES.SK:
      formattedData = formatSK(frData)
    break
    default:
      break
  }

  return formattedData
}

module.exports = selectProvinceToFormat
