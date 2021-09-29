import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import { ACTRuleDecorator, ElementExists, ElementIsVisible } from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R24 extends AtomicRule {
  private readonly autoCompleteTable = {
    home: [
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'email',
      'impp'
    ],
    work: [
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'email',
      'impp'
    ],
    mobile: [
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'email',
      'impp'
    ],
    fax: [
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'email',
      'impp'
    ],
    pager: [
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'email',
      'impp'
    ],
    modifiers: ['pager', 'fax', 'mobile', 'work', 'home', 'shipping', 'billing'],
    correctTerms: [
      'name',
      'honorific-prefix',
      'given-name',
      'additional-name',
      'family-name',
      'honorific-suffix',
      'nickname',
      'organization-title',
      'username',
      'new-password',
      'current-password',
      'organization',
      'street-address',
      'address-line1',
      'address-line2',
      'address-line3',
      'address-level4',
      'address-level3',
      'address-level2',
      'address-level1',
      'country',
      'country-name',
      'postal-code',
      'cc-name',
      'cc-given-name',
      'cc-additional-name',
      'cc-family-name',
      'cc-number',
      'cc-exp',
      'cc-exp-month',
      'cc-exp-year',
      'cc-csc',
      'cc-type',
      'transaction-currency',
      'transaction-amount',
      'language',
      'bday',
      'bday-day',
      'bday-month',
      'bday-year',
      'sex',
      'url',
      'photo',
      'tel',
      'tel-country-code',
      'tel-national',
      'tel-area-code',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-extension',
      'email',
      'impp',
      'off'
    ],
    fieldControl: {
      name: 'text',
      'honorific-prefix': 'text',
      'given-name': 'text',
      'additional-name': 'text',
      'family-name': 'text',
      'honorific-suffix': 'text',
      nickname: 'text',
      'organization-title': 'text',
      username: 'text',
      'new-password': 'password',
      'current-password': 'password',
      organization: 'text',
      'street-address': 'multiline',
      'address-line1': 'text',
      'address-line2': 'text',
      'address-line3': 'text',
      'address-level4': 'text',
      'address-level3': 'text',
      'address-level2': 'text',
      'address-level1': 'text',
      country: 'text',
      'country-name': 'text',
      'postal-code': 'text',
      'cc-name': 'text',
      'cc-given-name': 'text',
      'cc-additional-name': 'text',
      'cc-family-name': 'text',
      'cc-number': 'text',
      'cc-exp': 'month',
      'cc-exp-month': 'numeric',
      'cc-exp-year': 'numeric',
      'cc-csc': 'text',
      'cc-type': 'text',
      'transaction-currency': 'text',
      'transaction-amount': 'numeric',
      language: 'text',
      bday: 'date',
      'bday-day': 'numeric,tel',
      'bday-month': 'numeric',
      'bday-year': 'numeric',
      sex: 'text',
      url: 'url',
      photo: 'url',
      tel: 'tel',
      'tel-country-code': 'text',
      'tel-national': 'text',
      'tel-area-code': 'text',
      'tel-local': 'text',
      'tel-local-prefix': 'text',
      'tel-local-suffix': 'text',
      'tel-extension': 'text',
      email: 'email',
      impp: 'url'
    }
  };

  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsVisible
  execute(element: typeof window.qwElement): void {
    const test = new Test();

    const tag = element.getTagName();

    if (tag === 'input') {
      const type = element.getAttribute('type');
      const disabled = element.hasAttribute('disabled');
      if (disabled) {
        return;
      }
      if (type === 'hidden' || type === 'button' || type === 'submit' || type === 'reset') {
        return;
      }
    }
    // aria-disable true
    const ariaDisable = element.getAttribute('aria-disabled');

    if (ariaDisable === 'true') {
      return;
    }

    // sequential focus nav and has semantic role that is not widget role
    const isFocusable = element.isPartOfSequentialFocusNavigation();
    const widgetRole = element.isWidget();

    if (!isFocusable && !widgetRole) {
      return;
    }

    let autoComplete = element.getAttribute('autocomplete');

    if (autoComplete) {
      autoComplete = autoComplete.trim();
      if (autoComplete === '' || autoComplete === 'off') {
        return;
      }

      const correctAutocompleteField = this.isCorrectAutocompleteField(element, autoComplete);
      if (correctAutocompleteField) {
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

  private isAutoCompleteField(field: string): boolean {
    try {
      return this.autoCompleteTable.correctTerms.includes(field.toLowerCase());
    } catch (err) {
      return false;
    }
  }

  private isModifier(field: string): boolean {
    try {
      return this.autoCompleteTable.modifiers.includes(field.toLowerCase());
    } catch (err) {
      return false;
    }
  }

  private isValidModifier(modifier: string, field: string): boolean {
    try {
      //@ts-ignore
      return this.autoCompleteTable[modifier.toLowerCase()].includes(field.toLowerCase());
    } catch (err) {
      return false;
    }
  }

  private isText(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }
    return false;
  }

  private isMultiline(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }
    return false;
  }

  private isPassword(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'password') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isURL(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'url') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isEmail(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'email') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isTel(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'tel') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isNumeric(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'number') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isMonth(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'month') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isDate(element: typeof window.qwElement): boolean {
    const tag = element.getTagName();
    if (tag === 'input') {
      const type = element.getAttribute('type');
      if (type === null || type === 'hidden' || type === 'text' || type === 'search' || type === 'date') {
        return true;
      }
    } else if (tag === 'textarea' || tag === 'select') {
      return true;
    }

    return false;
  }

  private isAppropriateFieldForTheFormControl(field: string, element: typeof window.qwElement): boolean {
    //@ts-ignore
    const fieldControl = this.autoCompleteTable.fieldControl[field.toLowerCase()];
    if (!fieldControl.includes(',')) {
      switch (fieldControl) {
        case 'text':
          return this.isText(element);
        case 'multiline':
          return this.isMultiline(element);
        case 'password':
          return this.isPassword(element);
        case 'url':
          return this.isURL(element);
        case 'email':
          return this.isEmail(element);
        case 'tel':
          return this.isTel(element);
        case 'numeric':
          return this.isNumeric(element);
        case 'month':
          return this.isMonth(element);
        case 'date':
          return this.isDate(element);
      }
    } else {
      const fields = fieldControl.split(',');
      let isAppropriate = false;
      for (const field of fields ?? []) {
        switch (field) {
          case 'text':
            isAppropriate ||= this.isText(element);
            break;
          case 'multiline':
            isAppropriate ||= this.isMultiline(element);
            break;
          case 'password':
            isAppropriate ||= this.isPassword(element);
            break;
          case 'url':
            isAppropriate ||= this.isURL(element);
            break;
          case 'email':
            isAppropriate ||= this.isEmail(element);
            break;
          case 'tel':
            isAppropriate ||= this.isTel(element);
            break;
          case 'numeric':
            isAppropriate ||= this.isNumeric(element);
            break;
          case 'month':
            isAppropriate ||= this.isMonth(element);
            break;
          case 'date':
            isAppropriate ||= this.isDate(element);
            break;
        }
      }

      return isAppropriate;
    }

    return false;
  }

  private isCorrectAutocompleteField(element: typeof window.qwElement, autoCompleteField: string): boolean {
    const fields = autoCompleteField
      .split(' ')
      .map((field: string) => {
        return field.trim();
      })
      .filter((field: string) => {
        return field !== '';
      });

    if (fields[0].startsWith('section-')) fields.splice(0, 1);

    let field;
    let lastField = '';
    for (let i = fields.length - 1; i > -1; i--) {
      field = fields[i].toLowerCase();

      if (this.isModifier(field)) {
        if (!(field === 'shipping' || field === 'billing')) {
          if (!this.isValidModifier(field, lastField)) {
            return false;
          }
        }
      } else if (!this.isAutoCompleteField(field)) {
        return false;
      } else {
        const isAppropriate = this.isAppropriateFieldForTheFormControl(field, element);
        if (!isAppropriate) {
          return false;
        }
      }

      lastField = field;
    }
    return true;
  }
}

export = QW_ACT_R24;
