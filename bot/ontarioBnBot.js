const fs = require("fs");
const openBrowser = require("./openBrowser");
const goToPage = require("./goToPage");
const closeBrowser = require("./closeBrowser");
const sleep = require("../utils/sleep");

const ontarioBNBot = async (companyName) => {
  const browser = await openBrowser();
  console.log({ browser });

  // test URL
  // https://beta.canadasbusinessregistries.ca/search/results?search=%7BAIR%20CANADA%7D&status=Active
  // base url to put in .env -> https://beta.canadasbusinessregistries.ca/search

  const companyNameConvertedToUrl = companyName.split(" ").join("%20");
  console.log({ companyNameConvertedToUrl });
  const navigateTo =
    process.env.CANADA_BUSINESS_REGISTRIES_URL +
    `/results?search=%7B${companyNameConvertedToUrl}%7D&status=Active`;

  console.log({ navigateTo });

  const page = await browser.newPage();
  await page.goto(navigateTo);

  console.log({ page });
  await page.waitForNavigation();

  //These two lines are needed to click accept when the page loads
  await page.waitForSelector("button.btn.btn-primary.action.action__accept");
  await page.click("button.btn.btn-primary.action.action__accept");

  //Waits for the dom element of the column of card results
  await page.waitForSelector("div > mras-primary-card");

  //Assigns the all the cards to an 'array' that can be looped over. 'mras-primary-card' is a div name that all that cards have.
  const companyCards = await page.$$("div > mras-primary-card");

  //Loops thru the 'array' created to grab relevant values
  for (const companyCard of companyCards) {
    //created variables to store each value
    let companyName = "Null";
    let BN = "Null";
    let status = "Null";

    try {
      companyName = await page.evaluate(
        (el) =>
          el.querySelector("article > div > div > div > span").textContent,
        companyCard
      );
      console.log(companyName);
    } catch (error) {}
    try {
      BN = await page.evaluate(
        (el) =>
          el.querySelector("article > div > div > ul > li:nth-child(1) > span")
            .textContent,
        companyCard
      );
    } catch (error) {}
    try {
      status = await page.evaluate(
        (el) =>
          el.querySelector("article > div > div > ul > li:nth-child(4) > span")
            .textContent,
        companyCard
      );
    } catch (error) {}

    //If there is a company name for the card (which there should be but just in case) it appends the three values to a csv file before running thru the loop again
    if (companyName !== "Null") {
      fs.appendFile(
        "results.csv",
        `"${companyName}", "${BN}", "${status}"\n`,
        function (err) {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Data successfully written to file");
          }
        }
      );
    }

  }
  // await sleep(3000) // wait 3 seconds, need to figure out how to do with puppeteer

  // const searches = await page.$$('.mras-primary-card .ng-star-inserted')  .replace(/,/g, ".").replace(/"/g, ".")

  // for (const search of searches) {
  //   const bn = await page.evaluate(
  //     (el) => el.querySelector('span').textContent,
  //     search,
  //   )

  //   console.log({ bn })
  // }

  // extract BN number

  // close browser
  // await closeBrowser()


};

module.exports = ontarioBNBot;
