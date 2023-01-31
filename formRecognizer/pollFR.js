// SDK function
const pollFR = async (client, buffer, modelId) => {
  try {
    const poller = await client.beginAnalyzeDocument(modelId, buffer, {
      onProgress: (state) => {
        console.log(
          `Analyzing Document, FR status: ${JSON.stringify(
            state.status,
            null,
            2,
          )}`,
        )
      },
    })

    const result = await poller.pollUntilDone()

    const { documents } = result

    console.log('documents from analyze custom forms: ', documents)

    return documents[0].fields // returns an object with the form fields
  } catch (e) {
    throw new Error('Getting form fields while analyzing document: ' + e)
  }
}

module.exports = pollFR
