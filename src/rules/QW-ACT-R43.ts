import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsVisible } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R43 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsVisible
  execute(element: typeof window.qwElement): void {
    if (element.getTagName().toLowerCase() === 'iframe') {
      return;
    }

    let hasVisibleChildren = false;
    let isApplicable = false;
    for (const child of element.getChildren()) {
      if (child.isVisible()) {
        hasVisibleChildren = true;
        break;
      }
    }
    if (hasVisibleChildren) {
      const of = element.getComputedStyle('overflow', null);
      const ofx = element.getComputedStyle('overflow-x', null);
      const ofy = element.getComputedStyle('overflow-y', null);

      if (
        of === 'auto' ||
        of === 'clip' ||
        of === 'scroll' ||
        ofx === 'auto' ||
        ofx === 'clip' ||
        ofx === 'scroll' ||
        ofy === 'auto' ||
        ofy === 'clip' ||
        ofy === 'scroll'
      ) {
        const scrollWidth = element.getScrollWidth();
        const clientWidth = element.getClientWidth();

        const differenceWidth = scrollWidth - clientWidth;

        const scrollHeight = element.getScrollHeight();
        const clientHeight = element.getClientHeight();

        const differenceHeight = scrollHeight - clientHeight;

        const paddingLeft = element.getComputedStyle('padding-left', null);
        const paddingRight = element.getComputedStyle('padding-right', null);

        const paddingTop = element.getComputedStyle('padding-top', null);
        const paddingBottom = element.getComputedStyle('padding-bottom', null);

        isApplicable =
          differenceWidth > parseInt(paddingLeft) ||
          differenceWidth > parseInt(paddingRight) ||
          differenceHeight > parseInt(paddingTop) ||
          differenceHeight > parseInt(paddingBottom);
      }
    }

    if (isApplicable) {
      const test = new Test();

      if (this.isInSequentialFocusNavigation(element)) {
        test.verdict = 'passed';
        test.resultCode = 'P1';
      } else {
        test.verdict = 'failed';
        test.resultCode = 'F1';
      }

      test.addElement(element);
      super.addTestResult(test);
    }
  }

  private isInSequentialFocusNavigation(element: typeof window.qwElement): boolean {
    if (element.isPartOfSequentialFocusNavigation()) {
      return true;
    } else {
      let result = false;
      for (const child of element.getChildren()) {
        if (child.isPartOfSequentialFocusNavigation()) {
          return true;
        } else {
          result = result || this.isInSequentialFocusNavigation(child);
        }
      }
      return result;
    }
  }
}

export = QW_ACT_R43;
