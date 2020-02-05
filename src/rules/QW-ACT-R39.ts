'use strict';

import {ElementHandle, Page} from 'puppeteer';
import Rule from './Rule.object';
import {ACTRuleResult} from '@qualweb/act-rules';
import {AccessibilityUtils, DomUtils} from '@qualweb/util';
import _ from 'lodash';

class QW_ACT_R39 extends Rule {

  constructor() {
    super({
      name: 'All table header cells have assigned data cells',
      code: 'QW-ACT-R39',
      mapping: 'd0f69e',
      description: 'This rule checks that each table header has assigned data cells in a table element.',
      metadata: {
        target: {
          element: ['th', '*[role="columnheader"]', '*[role="rowheader"]'],
        },
        'success-criteria': [
          {
            name: '1.3.1',
            level: 'A',
            principle: 'Perceivable',
            url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
          }
        ],
        related: [],
        url: 'https://act-rules.github.io/rules/d0f69e',
        passed: 0,
        warning: 0,
        failed: 0,
        type: ['ACTRule', 'TestCase'],
        a11yReq: ['WCAG21:language'],
        outcome: '',
        description: ''
      },
      results: new Array<ACTRuleResult>()
    });
  }

  async execute(element: ElementHandle | undefined, page: Page): Promise<void> {

    if (!element) {
      return;
    }

    const role = await AccessibilityUtils.getElementRole(element, page);

    if (role !== 'columnheader' && role !== 'rowheader') {
      return;
    }

    const evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };

    const isInAT = await AccessibilityUtils.isElementInAT(element, page);
    if (isInAT) {
      const isVisible = await DomUtils.isElementVisible(element);
      if (isVisible) {
        let ancestorTableOrGrid = await getFirstAncestorElementByNameOrRoles(element, page, [], ['grid', 'table']);
        if (ancestorTableOrGrid !== null) {
          let isAncestorTableOrGridInAT = await AccessibilityUtils.isElementInAT(ancestorTableOrGrid, page);
          if (isAncestorTableOrGridInAT) {
            let rowElements = await ancestorTableOrGrid.$$('tr, [role="row"]');
            let elementParent = await DomUtils.getElementParent(element);
            let headerElementIndex = await getElementIndexOfParentChildren(element);
            let headerElementId = await DomUtils.getElementAttribute(element, 'id');

            let found = false;
            let index = 0;
            while (!found && index < rowElements.length) {
              // only searching rows where element is not included
              if (elementParent && await DomUtils.getElementSelector(rowElements[index]) !== await DomUtils.getElementSelector(elementParent)) {

                // all children of row
                const rowChildrenElements = await DomUtils.getElementChildren(rowElements[index]);

                // row element with same index as header
                const cellIndexElement = rowChildrenElements[headerElementIndex];

                // if there is an element in the same index as header...
                if (cellIndexElement) {
                  const cellIndexElementRole = cellIndexElement ? await AccessibilityUtils.getElementRole(cellIndexElement, page) : null;
                  const cellHeadersAttribute = cellIndexElement ? await DomUtils.getElementAttribute(cellIndexElement, 'headers') : null;
                  // if it does not have a headers attribute, it's found but if it has a headers attribute, we need to verify if it includes headerElement's id
                  found = (cellIndexElementRole === 'cell' || cellIndexElementRole === 'gridcell') && (cellHeadersAttribute ? _.includes(cellHeadersAttribute, headerElementId) : true);
                }
                else {
                  // if there is not an element in the same index as header, we need to check all row children...
                  for (let cellElement of rowChildrenElements) {
                    if (!found) {
                      const cellElementRole = await AccessibilityUtils.getElementRole(cellElement, page);

                      // verifying if it has a colspan attribute and it matches headerElement's index
                      const cellColspanAttribute = await DomUtils.getElementAttribute(cellElement, 'colspan');
                      const cellElementIndex = await getElementIndexOfParentChildren(cellElement);

                      // and verifying if it has a headers attribute that includes headerElement's id
                      found = (cellElementRole === 'cell' || cellElementRole === 'gridcell') && (_.includes(await DomUtils.getElementAttribute(cellElement, 'headers'), headerElementId) || (cellColspanAttribute ? cellElementIndex + +cellColspanAttribute - 1 <= headerElementIndex : false));
                    }
                  }
                }
              }
              index++;
            }

            if (found) {
              evaluation.verdict = 'passed';
              evaluation.description = `The column header element has at least one assigned cell`;
              evaluation.resultCode = 'RC1';
            } else {
              evaluation.verdict = 'failed';
              evaluation.description = `The column header element does not have at least one assigned cell`;
              evaluation.resultCode = 'RC2';
            }
          } else {
            evaluation.verdict = 'inapplicable';
            evaluation.description = `The test target's closest ancestor is not included in the accessibility tree`;
            evaluation.resultCode = 'RC3';
          }
        } else {
          evaluation.verdict = 'inapplicable';
          evaluation.description = `The test target does not have a closest ancestor with a semantic role of either table or grid`;
          evaluation.resultCode = 'RC4';
        }
      } else {
        evaluation.verdict = 'inapplicable';
        evaluation.description = `The test target is not visible`;
        evaluation.resultCode = 'RC5';
      }
    } else {
      evaluation.verdict = 'inapplicable';
      evaluation.description = 'The test target is not included in the accessibility tree.';
      evaluation.resultCode = 'RC6';
    }
    await super.addEvaluationResult(evaluation, element);
  }
}

async function getFirstAncestorElementByNameOrRoles(element: ElementHandle, page: Page, names: string[], roles: string[]): Promise<ElementHandle | null> {
  if (!element) {
    throw Error('Element is not defined');
  }

  let parent = await DomUtils.getElementParent(element);
  let result = false;
  let sameRole, sameName;

  if (parent !== null) {
    let parentName = await DomUtils.getElementTagName(parent);
    let parentRole = await AccessibilityUtils.getElementRole(parent, page);

    if (parentName !== null) {
      sameName = names.includes(parentName);
    }
    if (parentRole !== null) {
      sameRole = roles.includes(parentRole);
    }
    result = sameName || sameRole;
    if (!result) {
      return await getFirstAncestorElementByNameOrRoles(parent, page, names, roles);
    } else {
      return parent;
    }
  } else {
    return null;
  }
}

async function getElementIndexOfParentChildren(element: ElementHandle): Promise<number> {
  let elementIndex = 0;
  let foundIndex = false;
  let elementParent = await DomUtils.getElementParent(element);
  let elementParentChildren = elementParent ? await DomUtils.getElementChildren(elementParent) : null;
  while (elementParentChildren && !foundIndex && elementIndex < elementParentChildren.length) {
    if (await DomUtils.getElementSelector(elementParentChildren[elementIndex]) !== await DomUtils.getElementSelector(element)) {
      elementIndex++;
    } else {
      foundIndex = true;
    }
  }
  return elementIndex++;
}

export = QW_ACT_R39;
