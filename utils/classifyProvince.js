const PROVINCES = require('../utils/enums').PROVINCES

const classifyProvince = (document) => {
  console.log('document inside  ', document)

  const isDocumentFromBC = document.includes('BC Company Summary')
  const isDocumentFromAlberta = document.includes(
    'Government Corporation/Non-Profit Search of Alberta',
  )
  const isDocumentFromOntario = document.includes('Ontario Business Corporation')

  if (isDocumentFromBC) {
    return PROVINCES.BC
  } else if (isDocumentFromAlberta) {
    return PROVINCES.AB
  } else if (isDocumentFromOntario) {
    return PROVINCES.ON
  }
}

module.exports = classifyProvince
