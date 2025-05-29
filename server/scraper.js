const puppeteer = require('puppeteer');

async function scrape(username) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const url = `https://twitter.com/${username}`;
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const data = await page.evaluate(() => {
    const name = document.querySelector('div[data-testid="UserName"] span')?.innerText || '';
    const bio = document.querySelector('div[data-testid="UserDescription"]')?.innerText || '';
    const stats = Array.from(document.querySelectorAll('a[href*="/followers"], a[href*="/following"]'))
      .map(el => el.innerText);

    return {
      name,
      bio,
      following: stats[0] || '',
      followers: stats[1] || '',
    };
  });

  await browser.close();
  return data;
}

module.exports = scrape;
