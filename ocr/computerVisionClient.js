const ComputerVisionClient = require('@azure/cognitiveservices-computervision')
  .ComputerVisionClient
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials

const computerVisionClient = () => {
  const endpoint = process.env.AZURE_COMPUTER_VISION_ENDPOINT
  const key = process.env.AZURE_COMPUTER_VISION_API_KEY

  const client = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }),
    endpoint,
  )

  return client
}

module.exports = computerVisionClient
