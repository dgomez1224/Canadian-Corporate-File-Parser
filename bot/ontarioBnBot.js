const openBrowser = require('./openBrowser')
const goToPage = require('./goToPage')
const closeBrowser = require('./closeBrowser')
const sleep = require('../utils/sleep')

const ontarioBNBot = async (companyName) => {
  const browser = await openBrowser()
  console.log({ browser })

  const companyNameConvertedToUrl = companyName.split(' ').join('%20')
  console.log({ companyNameConvertedToUrl })
  const navigateTo =
    process.env.CANADA_BUSINESS_REGISTRIES_URL +
    `/results?search=%7B${companyNameConvertedToUrl}%7D&status=Active`

  console.log({ navigateTo })

  const page = await browser.newPage()
  await page.goto(navigateTo)

  console.log({ page })
  await page.waitForNavigation()

  await sleep(3000) // wait 3 seconds, need to figure out how to do with puppeteer

  const searches = await page.$$('.mras-primary-card .ng-star-inserted')

  const bns = await page.$$('.info .info--business-number')

  console.log({ bns })

  // for (const search of searches) {
  //   const bn = await page.evaluate((el) => {
  //     const select = el.querySelector('.info .info--business-number')
  //     console.log('here')
  //     console.log({ select })
  //   }, search)

  //   console.log({ bn })
  // }

  // extract BN number

  // close browser
  // await closeBrowser()
}

module.exports = ontarioBNBot

// #wb-cont > mras-search-results > div > div > mras-primary-card:nth-child(3) > article > div > div > ul > li:nth-child(1) > span