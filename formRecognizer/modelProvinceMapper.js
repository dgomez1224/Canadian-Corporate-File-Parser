const PROVINCES = require('../utils/enums').PROVINCES

const modelProvinceMapper = (province) => {
  switch (province) {
    case PROVINCES.BC:
      return 'bc-corp-profile-jan-28-2023-v2'

    case PROVINCES.AB:
      return 'ab-corp-profile-jan-27-2023'

    case PROVINCES.ON:
      return 'ontario-corp-profile-jan-26-2023-v3'

    default:
      break
  }
}

module.exports = modelProvinceMapper

// NOVA_SCOTIA : NS = nova-scotia-corp-profile-jan-28-2023
// SASKATCHEWAN : SK = saskatchewan-corp-profile-jan-29-2023
