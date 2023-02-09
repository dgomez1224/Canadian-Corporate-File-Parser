const openBrowser = require("./openBrowser");
const goToPage = require("./goToPage");
const closeBrowser = require("./closeBrowser");
const path = require("path");
const downloadPath = path.resolve("./pdf");



const federalCorpBot = async (companyName) => {
  const browser = await openBrowser();
  const navigateTo = "https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html";
  const emailAddress = process.env.SAMPLE_EMAIL;

  const page = await browser.newPage();

  await page.goto(navigateTo);

  //   await page.waitForNavigation();

  await page.waitForSelector("#corpName");

  await page._client().send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: downloadPath,
  });


  await page.$eval(
    "#corpName",
    (el, companyName) => (el.value = companyName),
    companyName
  );

  await page.click("#buttonNext");

  await page.waitForSelector(
    "#tables > section > section > ol > li > div > div.col-md-11 > span:nth-child(1) > a"
  );
  await page.click(
    "#tables > section > section > ol > li > div > div.col-md-11 > span:nth-child(1) > a"
  );

  await page.waitForSelector(
    "#metrics > div > div > div > section > div.clearBoth.ic_info > a:nth-child(2)"
  );
  await page.click(
    "#metrics > div > div > div > section > div.clearBoth.ic_info > a:nth-child(2)"
  );

  await page.waitForSelector('input[id="request.contact.emailAddress"]');
  await page.$eval(
    'input[id="request.contact.emailAddress"]',
    (el, emailAddress) => (el.value = emailAddress),
    emailAddress
  );

  await page.$eval(
    'input[id="request.contact.emailAddressConfirm"]',
    (el, emailAddress) => (el.value = emailAddress),
    emailAddress
  );

  await new Promise((resolve) => setTimeout(resolve, 500));

  await page.waitForSelector("#buttonNext");
  await page.click("#buttonNext");
  await page.waitForSelector("#finish");
  await page.click("#finish");

  await page.waitForSelector(
    "#tables > section > div.noteBoxB.margin40.padding20 > table > tbody > tr > td:nth-child(2) > strong > a:nth-child(2)"
  );
  await page.click(
    "#tables > section > div.noteBoxB.margin40.padding20 > table > tbody > tr > td:nth-child(2) > strong > a:nth-child(2)"
  );



};

module.exports = federalCorpBot;

/*

#buttonNext
*/
