'use strict';

import { ACTRuleResult } from '@qualweb/act-rules';
import Rule from '../lib/Rule.object';
import { ACTRule, ElementExists } from '../lib/decorator';
import { QWElement } from '@qualweb/qw-element';
import { DomUtils } from '@qualweb/util';

@ACTRule
class QW_ACT_R43 extends Rule {

  constructor(rule?: any) {
    super(rule);
  }
  
  @ElementExists
  execute(element: QWElement): void {
    
    if (element.getElementTagName().toLowerCase() === 'iframe') {
      return;
    }

    const evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };

    let hasVisibleChildren = false;
    for (const child of element.getElementChildren()) {
      if (DomUtils.isElementVisible(child)) {
        hasVisibleChildren = true;
        break;
      }
    }

    const of = element.getElementStyleProperty('overflow', null);
    const ofx = element.getElementStyleProperty('overflow-x', null);
    const ofy = element.getElementStyleProperty('overflow-y', null);

    let isApplicable = false;
    if (of === 'auto' || of === 'clip' || of === 'scroll' || ofx === 'auto' || ofx === 'clip' || ofx === 'scroll' || ofy === 'auto' || ofy === 'clip' || ofy === 'scroll') {
      const scrollWidth = element.getElementProperty('scrollWidth');
      const clientWidth = element.getElementProperty('clientWidth');

      const differenceWidth = parseInt(scrollWidth) - parseInt(clientWidth);

      const scrollHeight = element.getElementProperty('scrollHeight');
      const clientHeight = element.getElementProperty('clientHeight');

      const differenceHeight = parseInt(scrollHeight) - parseInt(clientHeight);

      const paddingLeft = element.getElementStyleProperty('padding-left', null);
      const paddingRight = element.getElementStyleProperty('padding-right', null);

      const paddingTop = element.getElementStyleProperty('padding-top', null);
      const paddingBottom = element.getElementStyleProperty('padding-bottom', null);

      if (differenceWidth > parseInt(paddingLeft) || differenceWidth > parseInt(paddingRight)) {
        isApplicable = true;
      }

      if (differenceHeight > parseInt(paddingTop) || differenceHeight > parseInt(paddingBottom)) {
        isApplicable = true;
      }
    }

    if (hasVisibleChildren && isApplicable) {
      
      if (this.isInSequentialFocusNavigation(element)) {
        evaluation.verdict = 'passed';
      } else {
        evaluation.verdict = 'failed'
      }

      super.addEvaluationResult(evaluation, element);
    }
  }

  private isInSequentialFocusNavigation(element: QWElement): boolean {
    if (DomUtils.isElementFocusable(element)) {
      return true;
    } else {
      for (const child of element.getElementChildren()) {
        if (DomUtils.isElementFocusable(child)) {
          return true;
        } else {
          return this.isInSequentialFocusNavigation(child);
        }
      }
      return false;
    }
  }
}

export = QW_ACT_R43;