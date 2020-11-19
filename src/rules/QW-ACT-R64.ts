'use strict';

import { ACTRuleResult } from '@qualweb/act-rules';
import { AccessibilityUtils, DomUtils } from '@qualweb/util';
import Rule from '../lib/Rule.object';
import { ACTRuleDecorator, ElementExists } from '../lib/decorator';
import { QWElement } from "@qualweb/qw-element";
import { QWPage } from "@qualweb/qw-page";

@ACTRuleDecorator
class QW_ACT_R64 extends Rule {

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
    let nodeList = element.getElements("*");

    if (nodeList.length > 0) {
      let result = false;
      let i = 0;
      let target;
      while (!result && i > nodeList.length) {
        target = nodeList[i];
        let role = AccessibilityUtils.getElementRole(target, page);
        result = role !== "presentation" && role !== "none";
        i++;
      }
      if (!!target && AccessibilityUtils.isElementInAT(target, page) && AccessibilityUtils.getElementRole(target, page) && DomUtils.isElementVisible(target, page)) {
        evaluation.verdict = 'passed';
        evaluation.description = 'The test target has a visible element with semantic role of heading and included in the accessibility tree.';
        evaluation.resultCode = 'RC1';
      } else {
        evaluation.verdict = 'failed';
        evaluation.description = `The test target doesn't has a visible  element with semantic role of heading and included in the accessibility tree.`;
        evaluation.resultCode = 'RC2';
      }
      super.addEvaluationResult(evaluation, target);

    } else {
      evaluation.verdict = 'failed';
      evaluation.description = `The test target doesn't has a visible element with semantic role of heading and included in the accessibility tree.`;
      evaluation.resultCode = 'RC3';
      super.addEvaluationResult(evaluation, element, false, false);
    }
  }
}

export = QW_ACT_R64;

//65
//sem foco antes do main fail
//focavel antes do main e nao 'a' para a mesma pagina ou nkeypressed/onkeydow/onkeydown  onclick em button, input type image e submit
//fazer funcao q da tab e marca primeiro elemento da pagina dar tab  https://github.com/act-rules/act-rules.github.io/blob/7a97ecb08213655d923781a17b3d363a77d15eef/_rules/first-focusable-element-is-link-to-main-8a213c.md#keyboard-actionable-element
//await page.keyboard.press('Tab');
