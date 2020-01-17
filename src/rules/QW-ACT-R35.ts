'use strict';

import {ElementHandle, Page} from 'puppeteer';
import Rule from './Rule.object';
import {ACTRuleResult} from '@qualweb/act-rules';
import {DomUtils, AccessibilityTreeUtils} from '@qualweb/util';

class QW_ACT_R34 extends Rule {

  constructor() {
    super({
      name: 'Heading has accessible name',
      code: 'QW-ACT-R35',
      mapping: 'ffd0e9',
      description: 'This rule applies to any HTML element with the semantic role of heading that is included in the accessibility tree.',
      metadata: {
        target: {
          element: '*',
        },
        'success-criteria': [
          {
            name: '1.3.1',
            level: 'A',
            principle: 'Perceivable',
            url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
          },
          {
            name: '4.1.2',
            level: 'AA',
            principle: 'Operable',
            url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels'
          },
        ],
        related: [],
        url: 'https://act-rules.github.io/rules/ffd0e9',
        passed: 0,
        warning: 0,
        inapplicable: 0,
        failed: 0,
        type: ['ACTRule', 'TestCase'],
        a11yReq: ['WCAG21:language'],
        outcome: '',
        description: ''
      },
      results: new Array<ACTRuleResult>()
    });
  }

  async execute(element: ElementHandle | undefined, page: Page): Promise<void> {

    if (!element) {
      return;
    }

    let evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };

    let isInAT = await AccessibilityTreeUtils.isElementInAT(element, page);
    let role = await AccessibilityTreeUtils.getElementRole(element, page);

    if (role === 'heading') {
      if (isInAT) {
        let accessibleName = await AccessibilityTreeUtils.getAccessibleName(element, page);
        if (accessibleName !== undefined && accessibleName !== '') {
          evaluation.verdict = 'passed';
          evaluation.description = "This element has a non-empty accessible name.";
          evaluation.resultCode = 'RC1';
        } else {
          evaluation.verdict = 'failed';
          evaluation.description = "This element has a undefined or empty accessible name.";
          evaluation.resultCode = 'RC2';
        }
      } else {
        evaluation.verdict = 'inapplicable';
        evaluation.description = "This element is not included in the accessibility tree.";
        evaluation.resultCode = 'RC3';
      }
    }
    const [htmlCode, pointer] = await Promise.all([
      DomUtils.getElementHtmlCode(element),
      DomUtils.getElementSelector(element)
    ]);

    evaluation.htmlCode = htmlCode;
    evaluation.pointer = pointer;
    super.addEvaluationResult(evaluation);
  }
}

export = QW_ACT_R34;
