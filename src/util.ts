'use strict';

import { DomElement } from 'htmlparser2';
import html from 'htmlparser-to-html';
import clone from 'lodash/clone';
import md5 from 'md5';
const puppeteer = require('puppeteer');
import { DomUtils as DomUtil, AccessibilityTreeUtils } from '@qualweb/util';
import {trim} from 'lodash';


function getSelfLocationInParent(element: DomElement): string {
    let selector = '';

    if (element.name === 'body' || element.name === 'head') {
        return element.name;
    }

    let sameEleCount = 0;

    let prev = element.prev;
    while (prev) {
        if (prev.type === 'tag' && prev.name === element.name) {
            sameEleCount++;
        }
        prev = prev.prev;
    }

    selector += `${element.name}:nth-of-type(${sameEleCount + 1})`;

    return selector;
}

function getElementSelector(element: DomElement): string {

    if (element.name === 'html') {
        return 'html';
    } else if (element.name === 'head') {
        return 'html > head';
    } else if (element.name === 'body') {
        return 'html > body';
    }

    let selector = 'html > ';

    let parents = new Array<string>();
    let parent = element.parent;
    while (parent && parent.name !== 'html') {
        parents.unshift(getSelfLocationInParent(parent));
        parent = parent.parent;
    }
    selector += parents.join(' > ');
    selector += ' > ' + getSelfLocationInParent(element);

    return selector;
}

function transform_element_into_html(element: DomElement, withText: boolean = true, fullElement: boolean = false): string {

    if (!element) {
        return '';
    }

    let codeElement: DomElement = clone(element);

    if (codeElement.attribs) {
        delete codeElement.attribs['computed-style'];
        delete codeElement.attribs['computed-style-after'];
        delete codeElement.attribs['computed-style-before'];
        delete codeElement.attribs['w-scrollx'];
        delete codeElement.attribs['w-scrolly'];
        delete codeElement.attribs['b-right'];
        delete codeElement.attribs['b-bottom'];
        delete codeElement.attribs['window-inner-height'];
        delete codeElement.attribs['window-inner-width'];
        delete codeElement.attribs['document-client-height'];
        delete codeElement.attribs['document-client-width'];
    }

    if (codeElement.attribs && codeElement.attribs.id && codeElement.attribs.id.startsWith('qw-generated-id')) {
        delete codeElement.attribs.id;
    }

    if (!fullElement) {
        if (withText) {
            let children = clone(codeElement.children);
            codeElement.children = [];

            for (let child of children || []) {
                if (child.type === 'text') {
                    codeElement.children.push(clone(child));
                }
            }
        } else {
            codeElement.children = [];
        }
    }

    return html(codeElement);
}

async function getContentHash(url: string) {
    const browser = await puppeteer.launch();
    let content="";
    try{
        const page = await browser.newPage();
        await page.goto(url, { 'waitUntil': 'networkidle0'});
        content = await page.evaluate(() => {
            return document.documentElement.innerHTML;
        });}catch (e) {
    }
    await browser.close();
    return md5(content.replace(/\s|\r/g, ""));
}



function getAccessibleNameSVG(element: DomElement, processedHTML: DomElement[]): string | undefined {
  return getAccessibleNameSVGRecursion(element, processedHTML, false);
}
//elementos q sao usados para outros: desc(descricao),title
//link role if the element has a valid href or xlink:href attribute. For a elements that are not links, use the mapping for tspan if the a element is a descendent of text, or the mapping for g otherwise.
function getAccessibleNameSVGRecursion(element: DomElement, processedHTML: DomElement[], recursion: boolean): string | undefined {
  let AName, ariaLabelBy, ariaLabel,id,tag;
  
  tag = element.name;
  let noAccessibleObjectOrChild = ["clipPath","cursor","defs","desc","metadata","pattern"]
  let noAccessibleObject = ["animate","animateMotion","animateTransform","discard","filter","hatch","hatchPath","linearGradient","marker","mask","meshPatch","meshRow","mpath","radialGradient","script","set","solidColor","stop","style","switch","view","title"]//fazer is "fe*",
  let specialElements = ["circle","elipse","line","path","polygon","polyline","rect","use","g","image","mesh","textPath","tspan","foreignObject"];//https://www.w3.org/TR/svg-aam-1.0/#include_elements
  let elementsLikeHtml = ["canvas","iframe","source","track","video"];
  if (element.attribs) {
    ariaLabelBy = DomUtil.getElementById(element.attribs["aria-labelledby"], processedHTML).length > 0 ? element.attribs["aria-labelledby"] : "";
    ariaLabel = element.attribs["aria-label"];
    id = element.attribs["id"];
  }
  let referencedByAriaLabel = AccessibilityTreeUtils.isElementReferencedByAriaLabel(id, processedHTML, element);
  let title =  DomUtil.getElementChildTextContent(element, "title");
  let titleAtt = DomUtil.getElementAttribute(element, "xlink:title");//tem de ser a


  if (AccessibilityTreeUtils.isElementHidden(element) && !recursion) {
    //noAName
  } else if (ariaLabelBy && ariaLabelBy !== "" && !(referencedByAriaLabel && recursion)) {
    AName = getAccessibleNameFromAriaLabelledBy(element, ariaLabelBy, processedHTML);
  } else if (ariaLabel && trim(ariaLabel) !== "") {
    AName = ariaLabel;
  } else if (title && trim(title) !== "") {
    AName = title;
  } else if (titleAtt && trim(titleAtt) !== "") {
    AName = titleAtt;
  } else if (tag && tag === "text" ) {
    AName = AccessibilityTreeUtils.getTrimmedText(element);
  } 

  return AName;
}

/*function getFirstNotUndefined(...args: any[]): string | undefined {
  let result;
  let i = 0;
  let arg;
  let end = false;

  while (i < args.length && !end) {
    arg = args[i];
    if (arg !== undefined) {
      result = arg;
      if (trim(String(arg)) !== "") {
        end = true;
      }
    }
    i++;
  }

  return result;
}*/




function getAccessibleNameFromAriaLabelledBy(element: DomElement, ariaLabelId: string, processedHTML: DomElement[]): string | undefined {
  let ListIdRefs = ariaLabelId.split(" ");
  let result: string | undefined;
  let accessNameFromId: string | undefined;

  for (let id of ListIdRefs) {
    accessNameFromId = getAccessibleNameSVGRecursion(DomUtil.getElementById(id, processedHTML)[0], processedHTML, true);
    if (accessNameFromId) {
      if (result) {
        result += accessNameFromId;
      } else {
        result = accessNameFromId;
      }
    }
  }

  return result;
}

/*function getAccessibleNameFromChildren(element: DomElement, processedHTML: DomElement[]): string {
  let isWidget = isElementWidget(element);
  let result, aName;

  if (element.children) {
    for (let child of element.children) {
      aName = getAccessibleNameRecursion(child, processedHTML, true, isWidget);
      if (aName) {
        if (result) {
          result += aName;
        } else {
          result = aName;
        }
      }
    }
  }}*/

export {
    getElementSelector,
    transform_element_into_html,
    getContentHash
};
