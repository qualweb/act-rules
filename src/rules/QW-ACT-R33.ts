import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsInAccessibilityTree } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R33 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsInAccessibilityTree
  execute(element: typeof window.qwElement): void {
    const roles = window.AccessibilityUtils.roles;

    const explicitRole = element.getValidExplicitRole();
    const implicitRole = element.getImplicitRole('');
    const isValidRole = element.hasValidRole();

    if (
      explicitRole !== null &&
      isValidRole &&
      explicitRole !== implicitRole &&
      roles[explicitRole]['requiredContextRole'] !== ''
    ) {
      const test = new Test();

      const requiredContextRole = roles[explicitRole]['requiredContextRole'];
      const id = element.getAttribute('id');

      const ariaOwns = window.qwPage.find('[aria-owns' + `~="${id}"]`, element);

      if (ariaOwns !== null) {
        const ariaOwnsRole = ariaOwns.getRole();
        if (ariaOwnsRole && requiredContextRole.includes(ariaOwnsRole)) {
          test.verdict = 'passed';
          test.resultCode = 'P1';
        } else {
          test.verdict = 'failed';
          test.resultCode = 'F1';
        }
      } else if (this.isElementADescendantOf(element, <string[]>requiredContextRole)) {
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

  private isElementADescendantOf(element: typeof window.qwElement, roles: string[]): boolean {
    let parent = element.getParent();
    if (!parent) {
      const documentSelector = element.getAttribute('_documentSelector');
      if (!!documentSelector && !documentSelector.includes('iframe')) {
        parent = window.qwPage.find(documentSelector);
      }
    }
    let result = false;
    let sameRole = false;

    if (parent !== null) {
      const parentRole = parent.getRole();
      if (parentRole !== null) {
        sameRole = roles.includes(parentRole);
      }
      result = sameRole;
      if (parentRole === null || parentRole === 'presentation' || parentRole === 'none') {
        return this.isElementADescendantOf(parent, roles);
      } else {
        return result;
      }
    } else {
      return result;
    }
  }
}

export = QW_ACT_R33;
