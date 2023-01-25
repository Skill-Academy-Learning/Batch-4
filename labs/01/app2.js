// web scraping with puppeteer

// Taking a screenshot

const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch(); // Open a new chrome window
  const page = await browser.newPage(); // open a new chrome tab

  await page.goto("https://news.ycombinator.com/news"); //open this URL in the page

  page.screenshot({ path: "./temp/hn_screenshot.png" }); // Take screenshot and keep in this file

  await browser.close(); // close the chrome browser window
}

main();
