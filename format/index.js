// import all 3 formats
const PROVINCES = require('../utils/enums').PROVINCES
const formatBC = require('./formatBC')

const selectProvinceToFormat = (frData, province) => {
  let formattedData
  switch (province) {
    case PROVINCES.BC:
      formattedData = formatBC(frData)
      break

    default:
      break
  }

  return formattedData
}

module.exports = selectProvinceToFormat
