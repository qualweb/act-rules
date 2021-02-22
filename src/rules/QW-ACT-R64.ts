'use strict';

import { ACTRuleResult } from '@qualweb/act-rules';
import { AccessibilityUtils, DomUtils } from '@qualweb/util';
import Rule from '../lib/Rule.object';
import { ACTRuleDecorator, ElementExists, IsHTMLDocument } from '../lib/decorator';
import { QWElement } from "@qualweb/qw-element";
import { QWPage } from "@qualweb/qw-page";

@ACTRuleDecorator
class QW_ACT_R64 extends Rule {

  constructor(rule?: any) {
    super(rule);
  }
  @IsHTMLDocument
  @ElementExists
  execute(element: QWElement, page: QWPage): void {

    const evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };
    let headingList = page.getElements('h1,h2,h3,h4,h5,h6,[role="heading"]');
    let nonRepeated = true; // TODO

    if (!nonRepeated) {
      evaluation.verdict = 'passed';
      evaluation.description = `This document has no non-repeated content after repeated content.`;
      evaluation.resultCode = 'RC1';
    } else if (headingList.length > 0) {
      let heading;
      heading = headingList.find((element) => { AccessibilityUtils.isElementInAT(element, page) && AccessibilityUtils.getElementRole(element, page) === 'heading' && DomUtils.isElementVisible(element, page) })
      if (!!heading) {
        evaluation.verdict = 'passed';
        evaluation.description = 'The test element has a visible element with semantic role of heading and included in the accessibility tree.';
        evaluation.resultCode = 'RC2';
      } else {
        evaluation.verdict = 'failed';
        evaluation.description = `The test element doesn't has a visible  element with semantic role of heading and included in the accessibility tree.`;
        evaluation.resultCode = 'RC3';
      }
    }
    else {
      evaluation.verdict = 'failed';
      evaluation.description = `TODO`;
      evaluation.resultCode = 'RC4';
      super.addEvaluationResult(evaluation, element, false, false);

    }
    super.addEvaluationResult(evaluation, element);
  }
}

export = QW_ACT_R64;
