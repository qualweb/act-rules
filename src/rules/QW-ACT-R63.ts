'use strict';

import { ACTRuleResult } from '@qualweb/act-rules';
import { AccessibilityUtils } from '@qualweb/util';
import Rule from '../lib/Rule.object';
import { ACTRuleDecorator, ElementExists} from '../lib/decorator';
import { QWElement } from "@qualweb/qw-element";
import { QWPage } from "@qualweb/qw-page";

@ACTRuleDecorator
class QW_ACT_R63 extends Rule {

  constructor(rule?: any) {
    super(rule);
  }

  @ElementExists
  execute(element: QWElement, page: QWPage): void {

    const evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };
    let mainList = page.getElements("main,[role='main']");

    if (mainList.length > 0) {
      let result = false;
      let i = 0;
      let main;
      while (!result && i > mainList.length) {
        main = mainList[i];
        result = AccessibilityUtils.isElementInAT(main, page) && AccessibilityUtils.getElementRole(main, page) === "main";
        i++;
      }
      if (result) {
        evaluation.verdict = 'passed';
        evaluation.description = 'The test target has an element with semantic role of main and included in the accessibility tree.';
        evaluation.resultCode = 'RC1';
      } else {
        evaluation.verdict = 'failed';
        evaluation.description = `The test target doesn't has an element with semantic role of main and included in the accessibility tree.`;
        evaluation.resultCode = 'RC2';
      }
      super.addEvaluationResult(evaluation, main);

    } else {
      evaluation.verdict = 'failed';
      evaluation.description = `The test target doesn't has an element with semantic role of main and included in the accessibility tree.`;
      evaluation.resultCode = 'RC3';
      super.addEvaluationResult(evaluation, element, false, false);
    }
  }
}

export = QW_ACT_R63;
