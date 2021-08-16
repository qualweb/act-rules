import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsImage } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R17 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsImage
  execute(element: typeof window.qwElement): void {
    const test = new Test();

    const name = element.getTagName();
    const elementInAT = element.isInTheAccessibilityTree();
    const role = element.getRole();
    const hidden = element.isHidden();

    const alt = element.getAttribute('alt');

    if (name === 'img' && !hidden && (alt === '' || role === 'presentation' || role === 'none')) {
      test.verdict = 'passed';
      test.resultCode = 'P1';

      test.addElement(element);
      super.addTestResult(test);
    } else if (elementInAT) {
      const accessibleName = element.getAccessibleName();
      if (accessibleName && accessibleName.trim() !== '') {
        test.verdict = 'passed';
        test.resultCode = 'P2';
      } else {
        test.verdict = 'failed';
        test.resultCode = 'F1';
      }

      test.addElement(element, true, false, true);
      super.addTestResult(test);
    }
  }
}

export = QW_ACT_R17;
