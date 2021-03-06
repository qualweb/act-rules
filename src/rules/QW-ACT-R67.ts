import { ACTRule } from '@qualweb/act-rules';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsVisible } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R67 extends AtomicRule {
  constructor(rule: ACTRule) {
    super(rule);
  }

  @ElementExists
  @ElementIsVisible
  execute(element: typeof window.qwElement): void {
    const test = new Test();

    if (element.hasCSSProperty('letter-spacing')) {
      const styleAttribute = element.getElementAttribute('style');
      const declaredLetterSpacing = this.parseStyle(styleAttribute);
      const computedRawLetterSpacing = element.getCSSProperty('letter-spacing');
      const computedLetterSpacing = element.getElementStyleProperty('letter-spacing', null);
      const fontSize = element.getElementStyleProperty('font-size', null);

      if (!this.isImportant(computedRawLetterSpacing, element)) {
        test.verdict = 'passed';
        test.description = 'The letter-spacing property is not !important';
        test.resultCode = 'RC1';
      } else if (this.isWide(computedLetterSpacing, fontSize)) {
        test.verdict = 'passed';
        test.description = 'The letter-spacing is at least 0.12 times the font-size.';
        test.resultCode = 'RC2';
      } else if (!this.isCascade(declaredLetterSpacing, computedRawLetterSpacing)) {
        test.verdict = 'passed';
        test.description = 'The cascaded letter-spacing is not the declared value.';
        test.resultCode = 'RC3';
      } else {
        test.verdict = 'failed';
        test.description = 'CSS styles prevent the letter-spacing to be above the minimum value.';
        test.resultCode = 'RC4';
      }

      test.addElement(element, true, false, true);
      super.addTestResult(test);
    }
  }

  private parseStyle(style: string | null): string {
    if (style === null) {
      style = '';
    }
    const startLS = style.indexOf('letter-spacing:');
    let endLS = style.indexOf(';', startLS);
    if (endLS === -1) {
      endLS = style.length;
    }
    return style?.substring(startLS + 15, endLS);
  }

  private isImportant(cssValue: any, element: typeof window.qwElement): boolean {
    if (cssValue.value === 'inherit' || cssValue.value === 'unset') {
      const parent = this.findParentWithCSSProperty(element.getElementParent());
      if (parent === null) return false;
      return this.isImportant(parent?.getCSSProperty('letter-spacing'), parent);
    }
    return cssValue.important;
  }

  private isWide(letterSpacing: string, fontSize: string): boolean {
    const letter = parseFloat(letterSpacing.slice(0, -2)); //remove px from end of string
    const font = parseFloat(fontSize.slice(0, -2));
    return letter >= font * 0.12;
  }

  private isCascade(declaredStyle: string, computedStyle: any): boolean {
    return declaredStyle.includes(computedStyle.value);
  }

  private findParentWithCSSProperty(element: typeof window.qwElement | null): typeof window.qwElement | null {
    while (element !== null) {
      if (element?.getCSSProperty('letter-spacing')) {
        return element;
      }
      element = element.getElementParent();
    }
    return null;
  }
}

export = QW_ACT_R67;
