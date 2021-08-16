import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R49 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  execute(element: typeof window.qwElement): void {
    const test = new Test();

    const autoplay = element.isMediaWithAutoplay();
    const paused = element.getAttribute('paused');
    const muted = element.isMediaMuted();
    const srcAttr = element.getAttribute('src');
    const childSrc = element.findAll('source[src]');
    const duration = element.getMediaDuration();
    const hasSoundTrack = element.videoHasAudio();
    const hasPuppeteerApplicableData = duration && duration > 3 && hasSoundTrack;
    const src = new Array<string | null>();

    if (childSrc.length > 0) {
      for (const child of childSrc || []) {
        src.push(child.getAttribute('src'));
      }
    } else {
      src.push(srcAttr);
    }

    if (!(!autoplay || paused || muted || (!srcAttr && childSrc.length === 0))) {
      if (!(duration && duration >= 0 && hasSoundTrack)) {
        test.verdict = 'warning';
        test.resultCode = 'W1';
      } else if (hasPuppeteerApplicableData) {
        if (this.srcTimeIsLessThanThree(src)) {
          test.verdict = 'passed';
          test.resultCode = 'P1';
        } else {
          test.verdict = 'warning';
          test.resultCode = 'W2';
        }
      }

      test.addElement(element);
      super.addTestResult(test);
    }
  }

  private srcTimeIsLessThanThree(src: any[]): boolean {
    let result = false;
    for (const child of src || []) {
      if (child) {
        const values = String(child).split('#t=');
        if (values.length > 1) {
          const separatedValues = values[1].split(',');
          const value1 = Number(separatedValues[0]);
          const value2 = Number(separatedValues[1]);

          if (value1 && value2) {
            result = Math.abs(value1 - value2) <= 3;
          }
        }
      }
    }
    return result;
  }
}

export = QW_ACT_R49;
