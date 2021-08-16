import { ACTRule } from '@qualweb/act-rules';
import { Translate } from '@qualweb/locale';
import AtomicRule from '../lib/AtomicRule.object';
import {
  ACTRuleDecorator,
  ElementExists,
  ElementHasOneOfTheFollowingRoles,
  ElementIsInAccessibilityTree,
  ElementIsVisible
} from '../lib/decorator';
import Test from '../lib/Test.object';

@ACTRuleDecorator
class QW_ACT_R39 extends AtomicRule {
  private readonly cellRoles = ['cell', 'gridcell', 'rowheader', 'columnheader'];

  constructor(rule: ACTRule, locale: Translate) {
    super(rule, locale);
  }

  @ElementExists
  @ElementIsInAccessibilityTree
  @ElementIsVisible
  @ElementHasOneOfTheFollowingRoles(['columnheader', 'rowheader'])
  execute(element: typeof window.qwElement): void {
    const ancestorTableOrGrid = getFirstAncestorElementByNameOrRoles(element, [], ['grid', 'table']);
    if (ancestorTableOrGrid !== null) {
      const isAncestorTableOrGridInAT = ancestorTableOrGrid.isInTheAccessibilityTree();
      if (isAncestorTableOrGridInAT) {
        const rowElements = ancestorTableOrGrid.findAll('tr, [role="row"]');
        const elementParent = element.getParent();
        const colspan = element.getAttribute('colspan');
        const headerElementIndex = getElementIndexOfParentChildren(element);
        const headerElementId = element.getAttribute('id');

        let found = false;
        let index = 0;
        while (!found && index < rowElements.length) {
          if (elementParent && rowElements[index].getSelector() !== elementParent.getSelector()) {
            // all children of row
            const rowChildrenElements = rowElements[index].getChildren();

            // row element with same index as header

            // if there is an element in the same index as header...
            if (rowChildrenElements.length > headerElementIndex) {
              const cellIndexElements = [rowChildrenElements[headerElementIndex]];

              if (colspan) {
                let i = headerElementIndex + 1;
                for (i; i < headerElementIndex + parseInt(colspan) && i < rowChildrenElements.length; i++) {
                  cellIndexElements.push(rowChildrenElements[i]);
                }
              }
              for (const cellIndexElement of cellIndexElements ?? []) {
                const cellIndexElementRole = cellIndexElement ? cellIndexElement.getRole() : null;
                const cellHeadersAttribute = cellIndexElement ? cellIndexElement.getAttribute('headers') : null;

                // if it does not have a headers attribute, it's found but if it has a headers attribute, we need to verify if it includes headerElement's id
                found =
                  !!cellIndexElementRole &&
                  this.cellRoles.includes(cellIndexElementRole) &&
                  (cellHeadersAttribute
                    ? headerElementId
                      ? cellHeadersAttribute.includes(headerElementId)
                      : false
                    : true);
              }
            } else {
              // if there is not an element in the same index as header, we need to check all row children...
              for (const cellElement of rowChildrenElements) {
                if (!found) {
                  const cellElementRole = cellElement.getRole();
                  // verifying if it has a colspan attribute and it matches headerElement's index
                  const cellColspanAttribute = cellElement.getAttribute('colspan');
                  const cellElementIndex = getElementIndexOfParentChildren(cellElement);

                  // and verifying if it has a headers attribute that includes headerElement's id
                  const headers = cellElement.getAttribute('headers');
                  found =
                    !!cellElementRole &&
                    this.cellRoles.includes(cellElementRole) &&
                    ((!!headerElementId && !!headers && headers.includes(headerElementId)) ||
                      (cellColspanAttribute
                        ? cellElementIndex + +cellColspanAttribute - 1 <= headerElementIndex
                        : false));
                }
              }
            }
          } else {
            const elements = rowElements[index].findAll("td,[role='cell'],[role='gridcell']");
            for (const cellElement of elements) {
              if (!found) {
                const cellElementRole = cellElement.getRole();
                // and verifying if it has a headers attribute that includes headerElement's id
                const headers = cellElement.getAttribute('headers');
                found =
                  !!cellElementRole &&
                  this.cellRoles.includes(cellElementRole) &&
                  (!headers || (!!headerElementId && !!headers && headers.includes(headerElementId)));
              }
            }
          }
          index++;
        }

        const test = new Test();
        if (found) {
          test.verdict = 'passed';
          test.resultCode = 'P1';
        } else {
          //if (elementParent) // FIX: the hell is this if for?

          test.verdict = 'failed';
          test.resultCode = 'F1';
        }

        test.addElement(element);
        super.addTestResult(test);
      }
    }
  }
}

function getFirstAncestorElementByNameOrRoles(
  element: typeof window.qwElement,
  names: string[],
  roles: string[]
): typeof window.qwElement | null {
  const parent = element.getParent();

  let sameRole = false;
  let sameName = false;

  if (parent !== null) {
    const parentName = parent.getTagName();
    const parentRole = parent.getRole();

    if (parentName !== null) {
      sameName = names.includes(parentName);
    }
    if (parentRole !== null) {
      sameRole = roles.includes(parentRole);
    }

    if (sameName || sameRole) {
      return parent;
    } else {
      return getFirstAncestorElementByNameOrRoles(parent, names, roles);
    }
  } else {
    return null;
  }
}

function getElementIndexOfParentChildren(element: typeof window.qwElement): number {
  let elementIndex = 0;
  let foundIndex = false;
  const elementParent = element.getParent();
  const elementParentChildren = elementParent ? elementParent.getChildren() : null;
  while (elementParentChildren && !foundIndex && elementIndex < elementParentChildren.length) {
    if (elementParentChildren[elementIndex].getSelector() !== element.getSelector()) {
      elementIndex++;
    } else {
      foundIndex = true;
    }
  }
  return elementIndex++;
}

export = QW_ACT_R39;
