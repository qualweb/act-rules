import { ACTRule, ACTRuleResult } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import rules from './rules.json';

function ACTRuleDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  const newConstructor: any = function () {
    const locales = <Translate>arguments[0];

    //@ts-ignore
    const rule = <ACTRule>rules[constructor.name];

    rule.metadata.passed = 0;
    rule.metadata.warning = 0;
    rule.metadata.failed = 0;
    rule.metadata.inapplicable = 0;
    rule.metadata.outcome = 'inapplicable';
    try {
      rule.name = <string>(
        (locales.translate['act-rules']?.[rule.code]?.name ?? locales.fallback['act-rules']?.[rule.code]?.name)
      );
      rule.description = <string>(
        (locales.translate['act-rules']?.[rule.code]?.description ??
          locales.fallback['act-rules']?.[rule.code]?.description)
      );
      rule.metadata.description = <string>(
        (locales.translate['act-rules']?.[rule.code]?.results?.I0 ??
          locales.fallback['act-rules']?.[rule.code].results?.I0)
      );
    } catch (err) {
      console.error(err);
    }
    rule.results = new Array<ACTRuleResult>();

    const func: any = function () {
      return new constructor(rule, locales);
    };
    func.prototype = constructor.prototype;
    return new func();
  };
  newConstructor.prototype = constructor.prototype;
  return newConstructor;
}

function ElementExists(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    if (<typeof window.qwElement>arguments[0]) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsHTMLElement(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const element = <typeof window.qwElement>arguments[0];
    if (element.isHTMLElement()) {
      return method.apply(this, arguments);
    }
  };
}

function ElementHasAttributes(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const hasAttributes = (<typeof window.qwElement>arguments[0]).hasAttributes();
    if (hasAttributes) {
      return method.apply(this, arguments);
    }
  };
}

function ElementHasAttribute(attribute: string) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const attr = (<typeof window.qwElement>arguments[0]).hasAttribute(attribute);
      if (attr) {
        return method.apply(this, arguments);
      }
    };
  };
}

function ElementHasNonEmptyAttribute(attribute: string) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const attr = (<typeof window.qwElement>arguments[0]).getAttribute(attribute);
      if (attr && attr.trim()) {
        return method.apply(this, arguments);
      }
    };
  };
}

function ElementHasAttributeRole(role: string) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const _role = (<typeof window.qwElement>arguments[0]).getRole();
      if (!_role || _role === role) {
        return method.apply(this, arguments);
      }
    };
  };
}

function ElementHasAttributeValue(attribute: string, value: string) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const attr = (<typeof window.qwElement>arguments[0]).getAttribute(attribute);
      if (attr && attr === value) {
        return method.apply(this, arguments);
      }
    };
  };
}

function IfElementHasTagNameMustHaveAttributeRole(tagName: string, role: string) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const _tagName = (<typeof window.qwElement>arguments[0]).getTagName();
      if (_tagName === tagName) {
        const _role = (<typeof window.qwElement>arguments[0]).getAttribute('role'); // window.AccessibilityUtils.getElementRole(arguments[0], arguments[1]);
        if (!_role || _role === role) {
          return method.apply(this, arguments);
        }
      } else {
        return method.apply(this, arguments);
      }
    };
  };
}

function ElementHasText(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const element = <typeof window.qwElement>arguments[0];
    if (element.getText()?.trim() !== '') {
      return method.apply(this, arguments);
    }
  };
}

function ElementHasTextNode(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const element = <typeof window.qwElement>arguments[0];
    if (element.hasTextNode()) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsInAccessibilityTree(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const isInAT = (<typeof window.qwElement>arguments[0]).isInTheAccessibilityTree();
    if (isInAT) {
      return method.apply(this, arguments);
    }
  };
}

function ElementHasNegativeTabIndex(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const tabindex = (<typeof window.qwElement>arguments[0]).getAttribute('tabindex');
    if (tabindex && parseInt(tabindex) <= -1) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsVisibleOrInAccessibilityTree(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const page = <typeof window.qwPage>window.qwPage;
    const elements = page.findAll('*').filter((element: typeof window.qwElement) => {
      return element.hasTextNode() && (element.isVisible() || element.isInTheAccessibilityTree());
    });
    if (elements.length > 0) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsNotHidden(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const notHidden = !(<typeof window.qwElement>arguments[0]).isHidden();
    if (notHidden) {
      return method.apply(this, arguments);
    }
  };
}

function ElementSrcAttributeFilenameEqualsAccessibleName(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value;
  descriptor.value = function () {
    const src = (<typeof window.qwElement>arguments[0]).getAttribute('src');
    const srcSet = (<typeof window.qwElement>arguments[0]).getAttribute('srcset');
    const parent = (<typeof window.qwElement>arguments[0]).getParent();
    let filenameWithExtension = new Array<string>();
    if (src) {
      const filePath = src.split('/');
      filenameWithExtension = [filePath[filePath.length - 1].trim().toLowerCase()];
    }
    if (srcSet) {
      const srcSetElements = srcSet.split(',');
      for (const srcsetElement of srcSetElements || []) {
        const srcValue = srcsetElement.split(' ')[0];
        const fileSrc = srcValue.split('/');
        filenameWithExtension.push(fileSrc[fileSrc.length - 1].trim().toLowerCase());
      }
    }
    if (parent) {
      const parentTag = parent.getTagName();
      if (parentTag === 'picture') {
        const sourceElements = parent.findAll('source');
        for (const sourceElement of sourceElements) {
          const src = sourceElement.getAttribute('srcset');
          if (src) {
            const filePath = src.split('/');
            filenameWithExtension.push(filePath[filePath.length - 1].trim().toLowerCase());
          }
        }
      }
    }

    const accessibleName = (<typeof window.qwElement>arguments[0]).getAccessibleName();

    if (accessibleName && filenameWithExtension && filenameWithExtension.includes(accessibleName.toLowerCase())) {
      return method.apply(this, arguments);
    }
  };
}

function isInMainContext(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const differentContext = (<typeof window.qwElement>arguments[0]).getAttribute('_documentSelector');
    if (!differentContext || !differentContext.includes('>')) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsVisible(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const isVisible = (<typeof window.qwElement>arguments[0]).isVisible();
    if (isVisible) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsNot(names: string[]) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const name = (<typeof window.qwElement>arguments[0]).getTagName();
      if (name && !names.includes(name)) {
        return method.apply(this, arguments);
      }
    };
  };
}

function ElementHasOneOfTheFollowingRoles(roles: string[]) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const role = (<typeof window.qwElement>arguments[0]).getRole();
      if (!!role && roles.includes(role)) {
        return method.apply(this, arguments);
      }
    };
  };
}

function ElementIsWidget(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const isWidget = (<typeof window.qwElement>arguments[0]).isWidget();
    if (isWidget) {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsNotWidget(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const isWidget = (<typeof window.qwElement>arguments[0]).isWidget();
    if (!isWidget) {
      return method.apply(this, arguments);
    }
  };
}

function ElementAllowsNameFromContent(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const supportsNameFromContent = (<typeof window.qwElement>arguments[0]).allowsNameFromContent();
    if (supportsNameFromContent) {
      return method.apply(this, arguments);
    }
  };
}

function IsHTMLDocument(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    let IsNonHTMLDocument = false;
    const htmlElement = window.qwPage.find('html');
    if (htmlElement) IsNonHTMLDocument = htmlElement.getAttribute('nonHTMLPage') === 'true';
    if (!IsNonHTMLDocument) {
      return method.apply(this, arguments);
    }
  };
}

function ElementHasCSSRules(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const element = <typeof window.qwElement>arguments[0];
    if (element.getCSSRules()) {
      return method.apply(this, arguments);
    }
  };
}

function IsLangSubTagValid(attribute: string) {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
      const attr = (<typeof window.qwElement>arguments[0]).getAttribute(attribute);
      if (attr && isSubTagValid(attr.split('-')[0])) {
        return method.apply(this, arguments);
      }
    };
  };
}

function isSubTagValid(subTag: string): boolean {
  const languages = window.AccessibilityUtils.languages;
  return languages.hasOwnProperty(subTag.toLowerCase());
}

function ElementIsImage(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const element = <typeof window.qwElement>arguments[0];
    const role = element.getRole();
    if (element.getTagName() === 'img' || role === 'img') {
      return method.apply(this, arguments);
    }
  };
}

function ElementIsNonText(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function () {
    const element = <typeof window.qwElement>arguments[0];
    const isNonText = window.DomUtils.objectElementIsNonText(element);
    if (isNonText) {
      return method.apply(this, arguments);
    }
  };
}

export {
  ACTRuleDecorator,
  ElementExists,
  ElementIsHTMLElement,
  ElementHasAttributes,
  ElementHasAttribute,
  ElementHasAttributeRole,
  ElementHasAttributeValue,
  IfElementHasTagNameMustHaveAttributeRole,
  ElementHasNonEmptyAttribute,
  ElementHasText,
  ElementHasTextNode,
  ElementIsInAccessibilityTree,
  ElementSrcAttributeFilenameEqualsAccessibleName,
  ElementIsVisible,
  ElementIsNot,
  ElementHasOneOfTheFollowingRoles,
  ElementIsWidget,
  ElementIsNotWidget,
  ElementAllowsNameFromContent,
  IsHTMLDocument,
  IsLangSubTagValid,
  isInMainContext,
  ElementIsNotHidden,
  ElementIsVisibleOrInAccessibilityTree,
  ElementHasNegativeTabIndex,
  ElementHasCSSRules,
  ElementIsImage,
  ElementIsNonText
};
