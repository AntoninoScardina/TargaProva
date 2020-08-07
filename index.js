const puppeteer = require('puppeteer');

const url = 'https://distanzechilometriche.net/verifica-assicurazione/';

const filippo = async () => {
    let captcha;
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.click('#pgdg-continue');
        const html = await page.content();
        captcha = html.split('<img')[1].split('src="')[1].split('id="')[0].trim();
        captcha = captcha.slice(0, captcha.length - 1);
    } catch (e) {   
        console.log(e);
    }
    return captcha;
}

module.exports = filippo