const formRecognizerClient = require('./formRecognizerClient')
const pollFR = require('./pollFR')
const modelProvinceMapper = require('./modelProvinceMapper')

const runFR = async (buffer, province) => {
  const client = formRecognizerClient()

  const modelId = modelProvinceMapper(province)

  const frData = await pollFR(client, buffer, modelId, 1)

  console.log('FR Data ', JSON.stringify(frData, null, 2))

  return frData
}

module.exports = runFR
