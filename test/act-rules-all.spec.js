const { expect } = require('chai');
const puppeteer = require('puppeteer');
const { getDom } = require('./getDom');
const { ACTRules } = require('../dist/index');

describe('ACT-Rules module', function () {
  it('Should evaluate', async function () {
    this.timeout(1000 * 1000);
    const browser = await puppeteer.launch();
    const { sourceHtml, page, stylesheets } = await getDom(browser, "https://www.twitch.tv/");

    try {
      await page.addScriptTag({
        path: require.resolve('../dist/act.js')
      })
      await page.addScriptTag({
        path: require.resolve('../node_modules/@qualweb/qw-page/dist/qwPage.js')
      })
      sourceHtml.html.parsed = {};
      const report = await page.evaluate((sourceHtml, stylesheets) => {
        const actRules = new ACTRules.ACTRules();
        const report = actRules.execute(sourceHtml, new QWPage.QWPage(document), stylesheets);
        return report;
      }, sourceHtml, stylesheets);
      const fs = require('fs')
      // Write data in 'Output.txt' . 
      fs.writeFile('Output.txt', JSON.stringify(report, null, 2), (err) => {
        // In case of a error throw err. 
        if (err) throw err;
      })
    } catch (err) {
      console.error(err);
    } finally {
      await browser.close();
    }
  })
});