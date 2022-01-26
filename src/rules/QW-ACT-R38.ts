import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsInAccessibilityTree } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R38 extends AtomicRule {
  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsInAccessibilityTree
  execute(element: typeof window.qwElement): void {
    const rolesJSON = window.AccessibilityUtils.roles;

    const test = new Test();

    const explicitRole = element.getAttribute('role');
    const implicitRole = element.getImplicitRole(''); //fixme
    const ariaBusy = this.isElementADescendantOfAriaBusy(element) || element.getAttribute('aria-busy');

    if (explicitRole !== null && explicitRole !== implicitRole && explicitRole !== 'combobox' && !ariaBusy) {
      const result = this.checkOwnedElementsRole(
        rolesJSON[explicitRole]['requiredOwnedElements'],
        element.getOwnedElements()
      );

      if (result) {
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

  private checkOwnedElementsRole(ownedRoles: string[][], elements: typeof window.qwElement[]): boolean {
    let result = false,
      end = false;
    let i = 0,
      j = 0;
    let hasOwnedRole, currentElement, currentOwnedRole;
    while (i < elements.length && !end) {
      hasOwnedRole = false;
      currentElement = elements[i];
      const role = currentElement.getRole();
      while (j < ownedRoles.length && !hasOwnedRole) {
        currentOwnedRole = ownedRoles[j];
        if (currentOwnedRole.length === 1) {
          hasOwnedRole = role === currentOwnedRole[0];
        } else {
          hasOwnedRole =
            role === currentOwnedRole[0] &&
            this.checkOwnedElementsRole([[currentOwnedRole[1]]], currentElement.getOwnedElements());
        }
        j++;
      }
      result = hasOwnedRole;

      j = 0;
      i++;
      if (result) {
        end = true;
      }
    }

    return result;
  }

  private isElementADescendantOfAriaBusy(element: typeof window.qwElement): boolean {
    const parent = element.getParent();
    let result = false;

    if (parent !== null) {
      const inAt = parent.isInTheAccessibilityTree();
      if (inAt) {
        result = !!parent.getAttribute('aria-busy');
      }
      if (!result) {
        return this.isElementADescendantOfAriaBusy(parent);
      } else {
        return result;
      }
    } else {
      return result;
    }
  }
}

export = QW_ACT_R38;
