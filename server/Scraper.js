const puppeteer = require('puppeteer');

async function runPuppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.dnaindia.com');

  async function runPuppeteer() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');
  
    const courses = await page.$$eval('.col-12.col-lg-6 .list-news ', (elements) =>
      elements.map((element) => ({
        title: element.querySelector('.section-title h1').innerText,
        text: element.querySelector('.explainer-subtext a').innerText,
        url: element.querySelector('.explainer-images img').href,
      
      }))
    );
  
    await browser.close();
  
    return courses;
  }
}  
  module.exports = runPuppeteer;
