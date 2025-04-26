const puppeteer = require('puppeteer');

(async () => {
    // Launch headless Chromium
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate and take a screenshot
    await page.goto('https://example.com', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'example.png', fullPage: true });
    console.log('✅ Screenshot saved as example.png');

    await browser.close();
})();
