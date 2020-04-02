const { expect } = require('chai');
const puppeteer = require('puppeteer');
const path = require('path');

const { mapping } = require('../constants');
const { getTestCases, getDom } = require('../getDom');
const { ACTRules } = require('../../dist/index');

const rule = path.basename(__filename).split('.')[0];
const ruleId = mapping[rule];

const customURL = "https://" + process.argv[3].split(':').pop();

describe(`Rule ${rule}`, async function () {

  it('Starting testbench', async function () {
    this.timeout(1000 * 1000);
    const browser = await puppeteer.launch();

    describe('Custom test', function() {
      it('should execute', async function() {
        this.timeout(1000 * 1000);

        const { sourceHtml, page, stylesheets } = await getDom(browser, customURL);
        const actRules = new ACTRules({ rules: [rule] });
        const report = await actRules.execute(sourceHtml, page, stylesheets);
        console.log("code:" + report.rules[rule].code);
        console.log("mapping:" + report.rules[rule].mapping);
        console.log("passed:" + report.rules[rule].metadata.passed);
        console.log("warning:" + report.rules[rule].metadata.warning);
        console.log("failed:" + report.rules[rule].metadata.failed);
        console.log("outcome:" + report.rules[rule].metadata.outcome);
      });
    });

    describe(`Closing testbench`, async function () {
      it(`Closed`, async function () {
        await browser.close();
      });
    });
  });
});
