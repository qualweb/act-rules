import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsVisible } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R51 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsVisible
  execute(element: typeof window.qwElement): void {
    const duration = element.getMediaDuration();
    const hasSoundTrack = element.videoHasAudio();

    const hasPuppeteerApplicableData = duration && duration > 0 && !hasSoundTrack;

    const test = new Test('warning');

    if (!(duration && duration >= 0 && hasSoundTrack)) {
      test.resultCode = 'W1';
      test.addElement(element);
      super.addTestResult(test);
    } else if (hasPuppeteerApplicableData) {
      test.resultCode = 'W2';
      test.addElement(element);
      super.addTestResult(test);
    }
  }
}

export = QW_ACT_R51;
