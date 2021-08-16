import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementHasTextNode, ElementIsVisible } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R40 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementHasTextNode
  @ElementIsVisible
  execute(element: typeof window.qwElement): void {
    let isApplicable = false;

    let parent: typeof window.qwElement | null = element;
    while (parent && parent.getTagName().toLowerCase() !== 'html') {
      if (parent.getTagName().toLowerCase() === 'svg') {
        isApplicable = false;
        break;
      }

      const of = parent.getComputedStyle('overflow', null);
      const ofx = parent.getComputedStyle('overflow-x', null);
      const ofy = parent.getComputedStyle('overflow-y', null);

      if (
        of === 'hidden' ||
        of === 'clip' ||
        ofx === 'hidden' ||
        ofx === 'clip' ||
        ofy === 'hidden' ||
        ofy === 'clip'
      ) {
        isApplicable = true;
      }

      const ariaHidden = parent.getAttribute('aria-hidden');
      if (ariaHidden !== null && ariaHidden === 'true') {
        isApplicable = false;
        break;
      }

      parent = parent.getParent();
    }

    if (isApplicable) {
      const test = new Test('warning', undefined, 'W1');
      test.addElement(element);
      super.addTestResult(test);
    }
  }
}

export = QW_ACT_R40;
