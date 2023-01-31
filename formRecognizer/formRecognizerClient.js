const {
  AzureKeyCredential,
  DocumentAnalysisClient,
} = require('@azure/ai-form-recognizer')

const formRecognizerClient = () => {
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT
  const apiKey = process.env.FORM_RECOGNIZER_API_KEY

  const client = new DocumentAnalysisClient(
    endpoint,
    new AzureKeyCredential(apiKey),
  )
  return client
}

module.exports = formRecognizerClient
