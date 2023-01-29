const pollComputerVision = require('./pollComputerVision')
const computerVisionClient = require('./computerVisionClient')

const ocr = async (pages) => {
  try {
    const client = computerVisionClient()

    const documentTextContent = Array(pages.length).fill(null)

    // puts the result of form type classification and regex value extraction as an object that gets pushed into the arr element
    for (let idx = 0; idx < documentTextContent.length; idx++) {
      const page = pages[idx]
      documentTextContent[idx] = await pollComputerVision(client, page)
      documentTextContent[idx] = documentTextContent[idx].join(' ')
    }

    return documentTextContent
  } catch (e) {
    throw new Error('Executing form recognizer on classify document ' + e)
  }
}

module.exports = ocr
