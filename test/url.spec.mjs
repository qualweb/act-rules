import { expect } from 'chai';
import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import { Dom } from '@qualweb/dom';
import locales from '@qualweb/locale';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

describe('Running tests', function () {
  it('Evaluates url', async function () {
    this.timeout(0);

    const url = 'https://ciencias.ulisboa.pt/';
    const response = await fetch(url);
    const sourceCode = await response.text();

    const browser = await puppeteer.launch({ headless: false });
    const incognito = await browser.createIncognitoBrowserContext();
    const page = await incognito.newPage();

    const dom = new Dom(page);
    await dom.process({ execute: { act: true }, waitUntil: ['load'] }, url, '');

    await page.addScriptTag({
      path: require.resolve('@qualweb/qw-page')
    });

    await page.addScriptTag({
      path: require.resolve('@qualweb/util')
    });

    await page.addScriptTag({
      path: require.resolve('../dist/act.bundle.js')
    });

    await page.keyboard.press('Tab'); // for R72 that needs to check the first focusable element
    await page.evaluate(
      (enLocale, sourceCode) => {
        window.act = new ACTRules({ translate: enLocale, fallback: enLocale });
        window.act.configure({ rules: ['QW-ACT-R1'] });
        window.act.validateFirstFocusableElementIsLinkToNonRepeatedContent();

        const parser = new DOMParser();
        const sourceDoc = parser.parseFromString('', 'text/html');

        sourceDoc.documentElement.innerHTML = sourceCode;

        const elements = sourceDoc.querySelectorAll('meta');
        const metaElements = new Array();
        for (const element of elements) {
          metaElements.push(window.qwPage.createQWElementNode(element));
        }

        window.act.validateMetaElements(metaElements);
        window.act.executeAtomicRules();
        window.act.executeCompositeRules();
      },
      locales.default.en,
      sourceCode
    );

    await page.setViewport({
      width: 640,
      height: 512
    });

    const report = await page.evaluate(() => {
      window.act.validateZoomedTextNodeNotClippedWithCSSOverflow();
      return window.act.getReport();
    });

    await page.close();
    await incognito.close();
    await browser.close();

    console.log(JSON.stringify(report, null, 2));
    expect(report);
  });
});
