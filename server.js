const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const documentSplitter = require('./documentSplitter')
const runOCR = require('./ocr/runOCR')
const classifyProvince = require('./utils/classifyProvince')
const runFR = require('./formRecognizer/runFR')
const formatData = require('./format')
// const bcData = require('./lifeLabsFrResult.json')

const app = express()
const port = 3000

app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

app.get('/', (_, res) => {
  const GREETING = 'Hello World!'
  console.log({ GREETING })
  res.send(GREETING)
})

app.post('/analyze', async (req, res) => {
  const { pdf, companyName } = req.body

  res.status(200).send('Analyzing...')

  // console.log({ companyName })
  // console.log('pdf as base64 ', pdf.slice(0, 50))

  const buffer = Buffer.from(pdf, 'base64')

  // console.log('pdf as buffer ', buffer)

  const { pages, numberOfPages } = await documentSplitter(buffer)

  // console.log('splitting PDF into pages...')
  // console.log({ pages })
  // console.log({ numberOfPages })

  // // TODO: refactor to a cleaner way
  const newArr = []
  newArr.push(pages[0])

  // console.log('first page arr, ', newArr)

  // // run OCR on the first page
  const firstPageOCR = await runOCR(newArr)

  // console.log('running OCR on first page...')
  // console.log({ firstPageOCR })

  const province = classifyProvince(firstPageOCR[0])

  console.log('province is ', province)

  // // experiment: pass the entire document to FR and see what happens
  const data = await runFR(buffer, province)

  console.log('Finished FR')
  

  // const formattedData = formatData(data, province)

  // COMMENT OUT THE ABOVE when creating the formatted data structure.
  // bcData

  // console.log('formatted data', bcData)

  // 3 main features:
  // 1. use the text result to determine which province the doc is from
  // 2. send the complete PDF to the respective province model on form recognizer
  // 3. extract the form recognizer results and structure it into a JSON object

  // send this back to a url provided
})

app.listen(port, () => {
  console.log(` 
  
  ################################################
   🏖️    Server listening on port: ${port} 🏖️
  ################################################

  `)
})
