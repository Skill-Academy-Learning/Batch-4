// web scraping with puppeteer

// scraping hacker news website for breaking news
const fs = require("fs");

const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch(); // Open a new chrome window
  const page = await browser.newPage(); // open a new chrome tab

  await page.goto("https://news.ycombinator.com/news"); //open this URL in the page

  const results = await page.evaluate(() => {
    // We can write JS DOM access code here

    const newsLinks = document.querySelectorAll(".titleline a");

    const links = [];

    newsLinks.forEach((aTag, i) => {
      i % 2 === 0 && links.push(aTag.href);
    });

    return links;
  });

  const linksText = results.reduce((aggregate, currentElement) => {
    return aggregate + currentElement + "\n";
  }, "");

  fs.writeFile("./temp/hn_breaking-news.txt", linksText, "utf-8", (error) => {
    error !== null && console.log("error: ", error);
  });

  await browser.close(); // close the chrome browser window
}

main();
