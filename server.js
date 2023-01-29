const express = require('express')
const bodyParser = require('body-parser')
const documentSplitter = require('./documentSplitter')

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

  console.log({ companyName })
  console.log('pdf as base64 ', pdf.slice(0, 50))

  const buffer = Buffer.from(pdf, 'base64')

  console.log('pdf as buffer ', buffer)

  const { pages, numberOfPages } = await documentSplitter(buffer)

  console.log({ pages })
  console.log({ numberOfPages })

  res.status(200).send('Analyzing...')
})

app.listen(port, () => {
  console.log(` 
  
  ################################################
   🏖️    Server listening on port: ${port} 🏖️
  ################################################

  `)
})
