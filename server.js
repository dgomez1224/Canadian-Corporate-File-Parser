const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const documentSplitter = require('./documentSplitter')
const runOCR = require('./ocr/runOCR')
const ontarioBNBot = require('./bot/ontarioBnBot')
const federalCorpBot = require('./bot/federalCorpBot')
const fs = require('fs')

const pdfPath = './pdf/Corporate-Profile_Profil-corporatif.pdf'

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

  console.log({ companyName })
  console.log('pdf as base64 ', pdf.slice(0, 50))

  const buffer = Buffer.from(pdf, 'base64')

  console.log('pdf as buffer ', buffer)

  const { pages, numberOfPages } = await documentSplitter(buffer)

  console.log({ pages })
  console.log({ numberOfPages })

  const ocrPages = await runOCR(pages)

  console.log({ ocrPages })

  // send this back to a url provided
})

app.post('/test-bot', async (req, res) => {
  const { companyName } = req.body
  console.log('Testing bot for ', companyName)

  res.status(200).send('Testing bot...')

  await ontarioBNBot(companyName)
})

app.post('/test-bot2', async (req, res) => {
  const { companyName } = req.body
  console.log('Testing bot for', companyName)

  res.status(200).send('Testing bot...')

  //Runs the bot and then converts the pdf to base64
  await federalCorpBot(companyName).then(() => {
    setTimeout(() => {
      fs.readFile(pdfPath, (err, pdfFile) => {
        if (err) throw err;
        const pdfBase64 = pdfFile.toString("base64");
        console.log(pdfBase64);
      });
    }, 3000); // wait for 3 seconds for PDF to be saved locally
  });
})

app.listen(port, () => {
  console.log(` 
  
  ################################################
   🏖️    Server listening on port: ${port} 🏖️
  ################################################

  `)
})
