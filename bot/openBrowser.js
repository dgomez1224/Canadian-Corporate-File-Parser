const puppeteer = require('puppeteer')

const openBrowser = async () =>
  await puppeteer.launch({ headless: false, defaultViewport: false })

module.exports = openBrowser
