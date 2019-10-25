'use strict';

import { DomElement } from 'htmlparser2';
import _ from 'lodash';
import Rule from './Rule.object';

import { ACTRule, ACTRuleResult } from '@qualweb/act-rules';

import {
  AccessibilityTreeUtils
} from '@qualweb/util';

const rule: ACTRule = {
  name: 'Image has accessible name',
  code: 'QW-ACT-R17',
  mapping: '23a2a8',
  description: 'This rule checks that each image that is not marked as decorative, has an accessible name.',
  metadata: {
    target: {
      element: 'img'
    },
    'success-criteria': [],
    related: [],
    url: 'https://act-rules.github.io/rules/2779a5',
    passed: 0,
    warning: 0,
    failed: 0,
    inapplicable: 0,
    type: ['ACTRule', 'TestCase'],
    a11yReq: ['WCAG21:title'],
    outcome: '',
    description: ''
  },
  results: new Array<ACTRuleResult>()
};

class QW_ACT_R17 extends Rule {

  constructor() {
    super(rule);
  }

  async execute(element: DomElement | undefined, processedHTML: DomElement[]): Promise<void> {

    const evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };

    if (element === undefined) { // if the element doesn't exist, there's nothing to test
        evaluation.verdict = 'inapplicable';
        evaluation.description = `There is no <img> element`;
        evaluation.resultCode = 'RC1';
    }else{//fun part
      if(element.name === 'img' || element.name === 'div'){

        if(element.attribs &&
          !element.attribs.alt &&
          element.attribs.alt!=='' &&
          !element.attribs.title &&
          element.attribs.title!=='' &&
          !element.attribs.role &&
          element.attribs.role !==''){
              evaluation.verdict = 'failed';
              evaluation.description = `The img element has no attribs`;
              evaluation.resultCode = 'RC2';
        }

        if(evaluation.verdict === ''){
          if(element.name === 'img' &&
            element.attribs &&
            element.attribs['aria-hidden'] == "true"){
            evaluation.verdict = 'inapplicable';
            evaluation.description = `The element has a semantic role of img, but is not included in the accessibility tree.`;
            evaluation.resultCode = 'RC2';
          }else if(element.name === 'div'){
            if(element.attribs &&
              element.attribs['aria-hidden'] == 'true'){
                evaluation.verdict = 'inapplicable';
                evaluation.description = `HTML img element is not included in the accessibility tree.`;
                evaluation.resultCode = 'RC3';
            }else if (element.attribs && element.attribs.role && element.attribs.role !=='img'){
              evaluation.verdict = 'inapplicable';
              evaluation.description = `The element is not an img element.`;
              evaluation.resultCode = 'RC4';
            }
          }
        }

        if(evaluation.verdict === ''){
          let isDecorative: boolean = this.isDecorative(element);
          if(isDecorative){
            evaluation.verdict = 'passed';
            evaluation.description = `The <img> element is decorative`;
            evaluation.resultCode = 'RC5';
          }else{
            const accessibleName = AccessibilityTreeUtils.getAccessibleName(element, processedHTML);
            if(accessibleName !== '' && accessibleName !== undefined){
              evaluation.verdict = 'passed';
              evaluation.description = `The <img> element has accessible name`;
              evaluation.resultCode = 'RC6';
            }else{
              evaluation.verdict = 'failed';
              evaluation.description = `The img element has no accessible name`;
              evaluation.resultCode = 'RC7';
            }
          }
        }
      }else{
        evaluation.verdict = 'inapplicable';
        evaluation.description = `The element does not have the semantic role of img.`;
        evaluation.resultCode = 'RC8';
      }
    }
    super.addEvaluationResult(evaluation);
  }

  private isDecorative(element: DomElement): boolean {
    if(element.name === 'img'){
      if(element.attribs && element.attribs.role)
        if(element.attribs.role === 'presentation' || element.attribs.role === 'none')
          return true;

      if(element.attribs && element.attribs.alt === '')
          return true;

    }
    return false;
  }
}

export = QW_ACT_R17;