const {
  configure,
  executeACTR,
  resetConfiguration
} = require('../../dist/index');
const {
  getDom
} = require('@qualweb/get-dom-puppeteer');
const { expect } = require('chai');
//const request = require('request-promise');

describe('Rule QW-ACT-R7', function () {

  const json = {
  "name": "[object Object] test cases",
  "website": "https://act-rules.github.io",
  "license": "https://act-rules.github.io/pages/license/",
  "description": "Accessibility conformance testing rules for HTML",
  "count": 600,
  "testcases": [
    {
      "testcaseId": "29097dbe000aa32fd9a66fce65a9a7f4b413e7ff",
      "url": "https://act-rules.github.io/testcases/5f99a7/29097dbe000aa32fd9a66fce65a9a7f4b413e7ff.html",
      "relativePath": "testcases/5f99a7/29097dbe000aa32fd9a66fce65a9a7f4b413e7ff.html",
      "expected": "passed",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "5eb5795bbd267479e08950e2d875309d6c98f805",
      "url": "https://act-rules.github.io/testcases/5f99a7/5eb5795bbd267479e08950e2d875309d6c98f805.html",
      "relativePath": "testcases/5f99a7/5eb5795bbd267479e08950e2d875309d6c98f805.html",
      "expected": "passed",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "fd830c9ba6e9ca7ab1833a958f1fb6471439ccc7",
      "url": "https://act-rules.github.io/testcases/5f99a7/fd830c9ba6e9ca7ab1833a958f1fb6471439ccc7.html",
      "relativePath": "testcases/5f99a7/fd830c9ba6e9ca7ab1833a958f1fb6471439ccc7.html",
      "expected": "passed",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "90a35eaa163f2f5718f5753f1751615c5fcc9616",
      "url": "https://act-rules.github.io/testcases/5f99a7/90a35eaa163f2f5718f5753f1751615c5fcc9616.html",
      "relativePath": "testcases/5f99a7/90a35eaa163f2f5718f5753f1751615c5fcc9616.html",
      "expected": "passed",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "0ffdf518d87d1176543311da2d3dc97780aeabd2",
      "url": "https://act-rules.github.io/testcases/5f99a7/0ffdf518d87d1176543311da2d3dc97780aeabd2.html",
      "relativePath": "testcases/5f99a7/0ffdf518d87d1176543311da2d3dc97780aeabd2.html",
      "expected": "failed",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "115496ae58eea99085c847c9a04a27a4e6a1137f",
      "url": "https://act-rules.github.io/testcases/5f99a7/115496ae58eea99085c847c9a04a27a4e6a1137f.html",
      "relativePath": "testcases/5f99a7/115496ae58eea99085c847c9a04a27a4e6a1137f.html",
      "expected": "failed",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "cd908d4edbb9fe94badb0d53a3953de86a4ec680",
      "url": "https://act-rules.github.io/testcases/5f99a7/cd908d4edbb9fe94badb0d53a3953de86a4ec680.html",
      "relativePath": "testcases/5f99a7/cd908d4edbb9fe94badb0d53a3953de86a4ec680.html",
      "expected": "inapplicable",
      "ruleId": "5f99a7",
      "ruleName": "`aria-*` attribute is defined in WAI-ARIA",
      "rulePage": "https://act-rules.github.io/rules/5f99a7",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "031ce334e0405bc42f3028964a8f1d94b0c06afc",
      "url": "https://act-rules.github.io/testcases/6cfa84/031ce334e0405bc42f3028964a8f1d94b0c06afc.html",
      "relativePath": "testcases/6cfa84/031ce334e0405bc42f3028964a8f1d94b0c06afc.html",
      "expected": "passed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "da5e04b7672db2b6d31cada644bb1f64e925456d",
      "url": "https://act-rules.github.io/testcases/6cfa84/da5e04b7672db2b6d31cada644bb1f64e925456d.html",
      "relativePath": "testcases/6cfa84/da5e04b7672db2b6d31cada644bb1f64e925456d.html",
      "expected": "passed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f2314113af607a4c18bc36185e7ae59e8c0f5b68",
      "url": "https://act-rules.github.io/testcases/6cfa84/f2314113af607a4c18bc36185e7ae59e8c0f5b68.html",
      "relativePath": "testcases/6cfa84/f2314113af607a4c18bc36185e7ae59e8c0f5b68.html",
      "expected": "passed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4c9a75a7f2fa6f4b5eaa55e93d9d5638b34f6575",
      "url": "https://act-rules.github.io/testcases/6cfa84/4c9a75a7f2fa6f4b5eaa55e93d9d5638b34f6575.html",
      "relativePath": "testcases/6cfa84/4c9a75a7f2fa6f4b5eaa55e93d9d5638b34f6575.html",
      "expected": "passed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "30d2fd76fac324265b6c5059972630ddf3131022",
      "url": "https://act-rules.github.io/testcases/6cfa84/30d2fd76fac324265b6c5059972630ddf3131022.html",
      "relativePath": "testcases/6cfa84/30d2fd76fac324265b6c5059972630ddf3131022.html",
      "expected": "passed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "78ab7e01e487828a19c59119308ab400ba598153",
      "url": "https://act-rules.github.io/testcases/6cfa84/78ab7e01e487828a19c59119308ab400ba598153.html",
      "relativePath": "testcases/6cfa84/78ab7e01e487828a19c59119308ab400ba598153.html",
      "expected": "passed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9fce299a6ff222196867bda8ce1479b42eac4607",
      "url": "https://act-rules.github.io/testcases/6cfa84/9fce299a6ff222196867bda8ce1479b42eac4607.html",
      "relativePath": "testcases/6cfa84/9fce299a6ff222196867bda8ce1479b42eac4607.html",
      "expected": "failed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ba7c8fac5b065a5f0662b886e51ddf62c7ffdcba",
      "url": "https://act-rules.github.io/testcases/6cfa84/ba7c8fac5b065a5f0662b886e51ddf62c7ffdcba.html",
      "relativePath": "testcases/6cfa84/ba7c8fac5b065a5f0662b886e51ddf62c7ffdcba.html",
      "expected": "failed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "43ad8b0f5df88f9c17bae00ddd52dbb56871b993",
      "url": "https://act-rules.github.io/testcases/6cfa84/43ad8b0f5df88f9c17bae00ddd52dbb56871b993.html",
      "relativePath": "testcases/6cfa84/43ad8b0f5df88f9c17bae00ddd52dbb56871b993.html",
      "expected": "failed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "67784ff95d4fd496d9e2139cf855b3bfab19fb49",
      "url": "https://act-rules.github.io/testcases/6cfa84/67784ff95d4fd496d9e2139cf855b3bfab19fb49.html",
      "relativePath": "testcases/6cfa84/67784ff95d4fd496d9e2139cf855b3bfab19fb49.html",
      "expected": "failed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cecb4c0a9872981475d4240e1e0e00fd72130432",
      "url": "https://act-rules.github.io/testcases/6cfa84/cecb4c0a9872981475d4240e1e0e00fd72130432.html",
      "relativePath": "testcases/6cfa84/cecb4c0a9872981475d4240e1e0e00fd72130432.html",
      "expected": "failed",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "69bdf98fd12aeb0a2608112a8f5d9c76dbe75aa9",
      "url": "https://act-rules.github.io/testcases/6cfa84/69bdf98fd12aeb0a2608112a8f5d9c76dbe75aa9.html",
      "relativePath": "testcases/6cfa84/69bdf98fd12aeb0a2608112a8f5d9c76dbe75aa9.html",
      "expected": "inapplicable",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5fb4319a6f555f90dd42ae45be96ee85ca5523c3",
      "url": "https://act-rules.github.io/testcases/6cfa84/5fb4319a6f555f90dd42ae45be96ee85ca5523c3.html",
      "relativePath": "testcases/6cfa84/5fb4319a6f555f90dd42ae45be96ee85ca5523c3.html",
      "expected": "inapplicable",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "83e4a31694a45ef604060a365dff22c38ef307c0",
      "url": "https://act-rules.github.io/testcases/6cfa84/83e4a31694a45ef604060a365dff22c38ef307c0.html",
      "relativePath": "testcases/6cfa84/83e4a31694a45ef604060a365dff22c38ef307c0.html",
      "expected": "inapplicable",
      "ruleId": "6cfa84",
      "ruleName": "Element with `aria-hidden` has no focusable content",
      "rulePage": "https://act-rules.github.io/rules/6cfa84",
      "ruleAccessibilityRequirements": {
        "wcag20:1.3.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cfaa2f5a95793320808dc8d850ce067c2df94255",
      "url": "https://act-rules.github.io/testcases/5c01ea/cfaa2f5a95793320808dc8d850ce067c2df94255.html",
      "relativePath": "testcases/5c01ea/cfaa2f5a95793320808dc8d850ce067c2df94255.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "f0a78870c66af24e8d482b8487d2b1593e1e3c67",
      "url": "https://act-rules.github.io/testcases/5c01ea/f0a78870c66af24e8d482b8487d2b1593e1e3c67.html",
      "relativePath": "testcases/5c01ea/f0a78870c66af24e8d482b8487d2b1593e1e3c67.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "e120eed865c7077478d0574e91d9e47d5f72e4bf",
      "url": "https://act-rules.github.io/testcases/5c01ea/e120eed865c7077478d0574e91d9e47d5f72e4bf.html",
      "relativePath": "testcases/5c01ea/e120eed865c7077478d0574e91d9e47d5f72e4bf.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "49c162723eb5e4d6066da865bfe8650e313a0f0e",
      "url": "https://act-rules.github.io/testcases/5c01ea/49c162723eb5e4d6066da865bfe8650e313a0f0e.html",
      "relativePath": "testcases/5c01ea/49c162723eb5e4d6066da865bfe8650e313a0f0e.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "13533acc1891bcec877f5d13c2512ce23645eaa8",
      "url": "https://act-rules.github.io/testcases/5c01ea/13533acc1891bcec877f5d13c2512ce23645eaa8.html",
      "relativePath": "testcases/5c01ea/13533acc1891bcec877f5d13c2512ce23645eaa8.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "c63ac6081b36acc2b5d141fd11ed528b3a76f32a",
      "url": "https://act-rules.github.io/testcases/5c01ea/c63ac6081b36acc2b5d141fd11ed528b3a76f32a.html",
      "relativePath": "testcases/5c01ea/c63ac6081b36acc2b5d141fd11ed528b3a76f32a.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "5839e28fc5486666e40903a7b9569b0301d9adf4",
      "url": "https://act-rules.github.io/testcases/5c01ea/5839e28fc5486666e40903a7b9569b0301d9adf4.html",
      "relativePath": "testcases/5c01ea/5839e28fc5486666e40903a7b9569b0301d9adf4.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "179eae0d765ce731effbf48bc11528b811db9f92",
      "url": "https://act-rules.github.io/testcases/5c01ea/179eae0d765ce731effbf48bc11528b811db9f92.html",
      "relativePath": "testcases/5c01ea/179eae0d765ce731effbf48bc11528b811db9f92.html",
      "expected": "passed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "e72701eda2666580257bf197b6f5345ee4b82db9",
      "url": "https://act-rules.github.io/testcases/5c01ea/e72701eda2666580257bf197b6f5345ee4b82db9.html",
      "relativePath": "testcases/5c01ea/e72701eda2666580257bf197b6f5345ee4b82db9.html",
      "expected": "failed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "eee77bdda9502edc28350142f00bbb1faf6203a4",
      "url": "https://act-rules.github.io/testcases/5c01ea/eee77bdda9502edc28350142f00bbb1faf6203a4.html",
      "relativePath": "testcases/5c01ea/eee77bdda9502edc28350142f00bbb1faf6203a4.html",
      "expected": "failed",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "d102061601e7aed064788c238fadbdbdc8c16dac",
      "url": "https://act-rules.github.io/testcases/5c01ea/d102061601e7aed064788c238fadbdbdc8c16dac.html",
      "relativePath": "testcases/5c01ea/d102061601e7aed064788c238fadbdbdc8c16dac.html",
      "expected": "inapplicable",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "0fdeadc08f1bb22090517bc7696fc358197b7b74",
      "url": "https://act-rules.github.io/testcases/5c01ea/0fdeadc08f1bb22090517bc7696fc358197b7b74.html",
      "relativePath": "testcases/5c01ea/0fdeadc08f1bb22090517bc7696fc358197b7b74.html",
      "expected": "inapplicable",
      "ruleId": "5c01ea",
      "ruleName": "ARIA state or property is permitted",
      "rulePage": "https://act-rules.github.io/rules/5c01ea",
      "ruleAccessibilityRequirements": {
        "aria11:state_property_processing": {
          "title": "ARIA 1.1, 7.6 State and Property Attribute Processing",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "bc3318ff3769aeac3c9e3e06f59630f98acf6d19",
      "url": "https://act-rules.github.io/testcases/6a7281/bc3318ff3769aeac3c9e3e06f59630f98acf6d19.html",
      "relativePath": "testcases/6a7281/bc3318ff3769aeac3c9e3e06f59630f98acf6d19.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "cfe0638e919d2d0b88bbcbabd90d35de79c968d4",
      "url": "https://act-rules.github.io/testcases/6a7281/cfe0638e919d2d0b88bbcbabd90d35de79c968d4.html",
      "relativePath": "testcases/6a7281/cfe0638e919d2d0b88bbcbabd90d35de79c968d4.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "8c23c572dc00ef2364246bae98fac3daabf0d71f",
      "url": "https://act-rules.github.io/testcases/6a7281/8c23c572dc00ef2364246bae98fac3daabf0d71f.html",
      "relativePath": "testcases/6a7281/8c23c572dc00ef2364246bae98fac3daabf0d71f.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "fe53ee105c942fb90385b9f198d34a1bcdaf2e11",
      "url": "https://act-rules.github.io/testcases/6a7281/fe53ee105c942fb90385b9f198d34a1bcdaf2e11.html",
      "relativePath": "testcases/6a7281/fe53ee105c942fb90385b9f198d34a1bcdaf2e11.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "2a7787fe33cc25e3493452150d0898817c9d71fc",
      "url": "https://act-rules.github.io/testcases/6a7281/2a7787fe33cc25e3493452150d0898817c9d71fc.html",
      "relativePath": "testcases/6a7281/2a7787fe33cc25e3493452150d0898817c9d71fc.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "52aa01d992fe3ca4f552f7f84d29974e16667966",
      "url": "https://act-rules.github.io/testcases/6a7281/52aa01d992fe3ca4f552f7f84d29974e16667966.html",
      "relativePath": "testcases/6a7281/52aa01d992fe3ca4f552f7f84d29974e16667966.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "aaec342be6c86daeb748f3ad0d73a057867bea89",
      "url": "https://act-rules.github.io/testcases/6a7281/aaec342be6c86daeb748f3ad0d73a057867bea89.html",
      "relativePath": "testcases/6a7281/aaec342be6c86daeb748f3ad0d73a057867bea89.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "6139657a43860afea9b3804fc7738aaa2ad98bbf",
      "url": "https://act-rules.github.io/testcases/6a7281/6139657a43860afea9b3804fc7738aaa2ad98bbf.html",
      "relativePath": "testcases/6a7281/6139657a43860afea9b3804fc7738aaa2ad98bbf.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "b3a1d17132d473f44d0306f65b0b9a6d4b246ebe",
      "url": "https://act-rules.github.io/testcases/6a7281/b3a1d17132d473f44d0306f65b0b9a6d4b246ebe.html",
      "relativePath": "testcases/6a7281/b3a1d17132d473f44d0306f65b0b9a6d4b246ebe.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "dfe11fd4c7b1fdb06f8d5022406270b498d02bb0",
      "url": "https://act-rules.github.io/testcases/6a7281/dfe11fd4c7b1fdb06f8d5022406270b498d02bb0.html",
      "relativePath": "testcases/6a7281/dfe11fd4c7b1fdb06f8d5022406270b498d02bb0.html",
      "expected": "passed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "0823ce8f6b24a484304325b3fbb012623d657f52",
      "url": "https://act-rules.github.io/testcases/6a7281/0823ce8f6b24a484304325b3fbb012623d657f52.html",
      "relativePath": "testcases/6a7281/0823ce8f6b24a484304325b3fbb012623d657f52.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "76c03c757f3dd7e89ca5749f6f824cae441aa6c2",
      "url": "https://act-rules.github.io/testcases/6a7281/76c03c757f3dd7e89ca5749f6f824cae441aa6c2.html",
      "relativePath": "testcases/6a7281/76c03c757f3dd7e89ca5749f6f824cae441aa6c2.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "81a4026035da499c42cceccff76e9cebe47457d2",
      "url": "https://act-rules.github.io/testcases/6a7281/81a4026035da499c42cceccff76e9cebe47457d2.html",
      "relativePath": "testcases/6a7281/81a4026035da499c42cceccff76e9cebe47457d2.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "c183eaf5681481a94dd60c135ebdd27794951f20",
      "url": "https://act-rules.github.io/testcases/6a7281/c183eaf5681481a94dd60c135ebdd27794951f20.html",
      "relativePath": "testcases/6a7281/c183eaf5681481a94dd60c135ebdd27794951f20.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "384a70098b8062af008449374676d4119c46fbd3",
      "url": "https://act-rules.github.io/testcases/6a7281/384a70098b8062af008449374676d4119c46fbd3.html",
      "relativePath": "testcases/6a7281/384a70098b8062af008449374676d4119c46fbd3.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "3aed3786735318db89dc845d2ad9044c87102cde",
      "url": "https://act-rules.github.io/testcases/6a7281/3aed3786735318db89dc845d2ad9044c87102cde.html",
      "relativePath": "testcases/6a7281/3aed3786735318db89dc845d2ad9044c87102cde.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "527542abe91c98da99fa126a8eeb02dc89d6c57d",
      "url": "https://act-rules.github.io/testcases/6a7281/527542abe91c98da99fa126a8eeb02dc89d6c57d.html",
      "relativePath": "testcases/6a7281/527542abe91c98da99fa126a8eeb02dc89d6c57d.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "f700847651bf961c896beea9a8a7db676c4bc099",
      "url": "https://act-rules.github.io/testcases/6a7281/f700847651bf961c896beea9a8a7db676c4bc099.html",
      "relativePath": "testcases/6a7281/f700847651bf961c896beea9a8a7db676c4bc099.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "2afc4bb374e2d1f2aa2bbaa6eb9d50a6bc76658a",
      "url": "https://act-rules.github.io/testcases/6a7281/2afc4bb374e2d1f2aa2bbaa6eb9d50a6bc76658a.html",
      "relativePath": "testcases/6a7281/2afc4bb374e2d1f2aa2bbaa6eb9d50a6bc76658a.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "af6958a617c75dccd9ef44c803ff61737f79e45e",
      "url": "https://act-rules.github.io/testcases/6a7281/af6958a617c75dccd9ef44c803ff61737f79e45e.html",
      "relativePath": "testcases/6a7281/af6958a617c75dccd9ef44c803ff61737f79e45e.html",
      "expected": "failed",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "68f4deb60a987588b521a9a771cad1b4e88323cc",
      "url": "https://act-rules.github.io/testcases/6a7281/68f4deb60a987588b521a9a771cad1b4e88323cc.html",
      "relativePath": "testcases/6a7281/68f4deb60a987588b521a9a771cad1b4e88323cc.html",
      "expected": "inapplicable",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "4c12873cdb5c72e6eb99b75888f673025f1b03bc",
      "url": "https://act-rules.github.io/testcases/6a7281/4c12873cdb5c72e6eb99b75888f673025f1b03bc.html",
      "relativePath": "testcases/6a7281/4c12873cdb5c72e6eb99b75888f673025f1b03bc.html",
      "expected": "inapplicable",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "ae78affd9ba70da8f5c3ab5f3851167939e689a7",
      "url": "https://act-rules.github.io/testcases/6a7281/ae78affd9ba70da8f5c3ab5f3851167939e689a7.html",
      "relativePath": "testcases/6a7281/ae78affd9ba70da8f5c3ab5f3851167939e689a7.html",
      "expected": "inapplicable",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "0a41dce9a5dc6ed0c90f8828f6d42804081b166d",
      "url": "https://act-rules.github.io/testcases/6a7281/0a41dce9a5dc6ed0c90f8828f6d42804081b166d.html",
      "relativePath": "testcases/6a7281/0a41dce9a5dc6ed0c90f8828f6d42804081b166d.html",
      "expected": "inapplicable",
      "ruleId": "6a7281",
      "ruleName": "ARIA state or property has valid value",
      "rulePage": "https://act-rules.github.io/rules/6a7281",
      "ruleAccessibilityRequirements": {
        "aria11:state_prop_values": {
          "title": "ARIA 1.1, 6.3 Values for States and Properties",
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "satisfied"
        }
      }
    },
    {
      "testcaseId": "31344533349a50ad08ad892d445e8b6284e6a6f4",
      "url": "https://act-rules.github.io/testcases/e6952f/31344533349a50ad08ad892d445e8b6284e6a6f4.html",
      "relativePath": "testcases/e6952f/31344533349a50ad08ad892d445e8b6284e6a6f4.html",
      "expected": "passed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d0273f1f44d4846cb8957218a71bc8b74c59a514",
      "url": "https://act-rules.github.io/testcases/e6952f/d0273f1f44d4846cb8957218a71bc8b74c59a514.html",
      "relativePath": "testcases/e6952f/d0273f1f44d4846cb8957218a71bc8b74c59a514.html",
      "expected": "passed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e013e1979f653aa7c1373df914555859574049dd",
      "url": "https://act-rules.github.io/testcases/e6952f/e013e1979f653aa7c1373df914555859574049dd.html",
      "relativePath": "testcases/e6952f/e013e1979f653aa7c1373df914555859574049dd.html",
      "expected": "passed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "dbb5d99734d7f2276ea29e58cc5fe19c3836cd2a",
      "url": "https://act-rules.github.io/testcases/e6952f/dbb5d99734d7f2276ea29e58cc5fe19c3836cd2a.html",
      "relativePath": "testcases/e6952f/dbb5d99734d7f2276ea29e58cc5fe19c3836cd2a.html",
      "expected": "passed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "93ebc699215bf1613aa475aa38c23238b13fc3dc",
      "url": "https://act-rules.github.io/testcases/e6952f/93ebc699215bf1613aa475aa38c23238b13fc3dc.html",
      "relativePath": "testcases/e6952f/93ebc699215bf1613aa475aa38c23238b13fc3dc.html",
      "expected": "passed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "71bb9ea79d8f31d8443723b97929f537340e7ed7",
      "url": "https://act-rules.github.io/testcases/e6952f/71bb9ea79d8f31d8443723b97929f537340e7ed7.html",
      "relativePath": "testcases/e6952f/71bb9ea79d8f31d8443723b97929f537340e7ed7.html",
      "expected": "failed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e13e0fdf574212d3cc43de457781afc1847378fc",
      "url": "https://act-rules.github.io/testcases/e6952f/e13e0fdf574212d3cc43de457781afc1847378fc.html",
      "relativePath": "testcases/e6952f/e13e0fdf574212d3cc43de457781afc1847378fc.html",
      "expected": "failed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "af32dfe602a8afdc786535b84f8893e38c7e7781",
      "url": "https://act-rules.github.io/testcases/e6952f/af32dfe602a8afdc786535b84f8893e38c7e7781.html",
      "relativePath": "testcases/e6952f/af32dfe602a8afdc786535b84f8893e38c7e7781.html",
      "expected": "failed",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "96fa91a155d36434a6e4b8ebb65b608b852dd501",
      "url": "https://act-rules.github.io/testcases/e6952f/96fa91a155d36434a6e4b8ebb65b608b852dd501.html",
      "relativePath": "testcases/e6952f/96fa91a155d36434a6e4b8ebb65b608b852dd501.html",
      "expected": "inapplicable",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2a18f755cea58ab5bb8a10566e4dc2cfc79c7ef1",
      "url": "https://act-rules.github.io/testcases/e6952f/2a18f755cea58ab5bb8a10566e4dc2cfc79c7ef1.html",
      "relativePath": "testcases/e6952f/2a18f755cea58ab5bb8a10566e4dc2cfc79c7ef1.html",
      "expected": "inapplicable",
      "ruleId": "e6952f",
      "ruleName": "Attribute is not duplicated",
      "rulePage": "https://act-rules.github.io/rules/e6952f",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e5262838620857fb2f059352595f940a89835064",
      "url": "https://act-rules.github.io/testcases/afb423/e5262838620857fb2f059352595f940a89835064.html",
      "relativePath": "testcases/afb423/e5262838620857fb2f059352595f940a89835064.html",
      "expected": "passed",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "da1652467d8105c29763699ab58c2f8dac1bab59",
      "url": "https://act-rules.github.io/testcases/afb423/da1652467d8105c29763699ab58c2f8dac1bab59.html",
      "relativePath": "testcases/afb423/da1652467d8105c29763699ab58c2f8dac1bab59.html",
      "expected": "failed",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "99e03ccf1d20f1b5b01e51989f53a8b7ac3ecb00",
      "url": "https://act-rules.github.io/testcases/afb423/99e03ccf1d20f1b5b01e51989f53a8b7ac3ecb00.html",
      "relativePath": "testcases/afb423/99e03ccf1d20f1b5b01e51989f53a8b7ac3ecb00.html",
      "expected": "failed",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "58ce70ac4f642250674a9ec0f10676dbe426f26d",
      "url": "https://act-rules.github.io/testcases/afb423/58ce70ac4f642250674a9ec0f10676dbe426f26d.html",
      "relativePath": "testcases/afb423/58ce70ac4f642250674a9ec0f10676dbe426f26d.html",
      "expected": "failed",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "55a80d28164dee9b263ab039e62625203f7d6088",
      "url": "https://act-rules.github.io/testcases/afb423/55a80d28164dee9b263ab039e62625203f7d6088.html",
      "relativePath": "testcases/afb423/55a80d28164dee9b263ab039e62625203f7d6088.html",
      "expected": "failed",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "75a3cd6ae38ab0532b0420b21c5b05a29e81f675",
      "url": "https://act-rules.github.io/testcases/afb423/75a3cd6ae38ab0532b0420b21c5b05a29e81f675.html",
      "relativePath": "testcases/afb423/75a3cd6ae38ab0532b0420b21c5b05a29e81f675.html",
      "expected": "inapplicable",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "63992b5e959a02c868c191a094edae5c55f9fc34",
      "url": "https://act-rules.github.io/testcases/afb423/63992b5e959a02c868c191a094edae5c55f9fc34.html",
      "relativePath": "testcases/afb423/63992b5e959a02c868c191a094edae5c55f9fc34.html",
      "expected": "inapplicable",
      "ruleId": "afb423",
      "ruleName": "`audio` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/afb423",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "dc12fde101f79c833e6c85b7642116745f8bb576",
      "url": "https://act-rules.github.io/testcases/e7aa44/dc12fde101f79c833e6c85b7642116745f8bb576.html",
      "relativePath": "testcases/e7aa44/dc12fde101f79c833e6c85b7642116745f8bb576.html",
      "expected": "passed",
      "ruleId": "e7aa44",
      "ruleName": "`audio` element content has text alternative",
      "rulePage": "https://act-rules.github.io/rules/e7aa44",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c774ac183b2b4bee196fda1b7f9e3769743d4068",
      "url": "https://act-rules.github.io/testcases/e7aa44/c774ac183b2b4bee196fda1b7f9e3769743d4068.html",
      "relativePath": "testcases/e7aa44/c774ac183b2b4bee196fda1b7f9e3769743d4068.html",
      "expected": "passed",
      "ruleId": "e7aa44",
      "ruleName": "`audio` element content has text alternative",
      "rulePage": "https://act-rules.github.io/rules/e7aa44",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "dec5f4626d1ea2444ebc02e536c566c74f34b17d",
      "url": "https://act-rules.github.io/testcases/e7aa44/dec5f4626d1ea2444ebc02e536c566c74f34b17d.html",
      "relativePath": "testcases/e7aa44/dec5f4626d1ea2444ebc02e536c566c74f34b17d.html",
      "expected": "failed",
      "ruleId": "e7aa44",
      "ruleName": "`audio` element content has text alternative",
      "rulePage": "https://act-rules.github.io/rules/e7aa44",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1afa787d0325148be92c7596e920143bdfd20fd6",
      "url": "https://act-rules.github.io/testcases/e7aa44/1afa787d0325148be92c7596e920143bdfd20fd6.html",
      "relativePath": "testcases/e7aa44/1afa787d0325148be92c7596e920143bdfd20fd6.html",
      "expected": "failed",
      "ruleId": "e7aa44",
      "ruleName": "`audio` element content has text alternative",
      "rulePage": "https://act-rules.github.io/rules/e7aa44",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cc758a451b12748fd0e46f73cc56b53f83d75725",
      "url": "https://act-rules.github.io/testcases/e7aa44/cc758a451b12748fd0e46f73cc56b53f83d75725.html",
      "relativePath": "testcases/e7aa44/cc758a451b12748fd0e46f73cc56b53f83d75725.html",
      "expected": "inapplicable",
      "ruleId": "e7aa44",
      "ruleName": "`audio` element content has text alternative",
      "rulePage": "https://act-rules.github.io/rules/e7aa44",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c45034fcc42742f91c3d4bb922b4cf65a9776530",
      "url": "https://act-rules.github.io/testcases/e7aa44/c45034fcc42742f91c3d4bb922b4cf65a9776530.html",
      "relativePath": "testcases/e7aa44/c45034fcc42742f91c3d4bb922b4cf65a9776530.html",
      "expected": "inapplicable",
      "ruleId": "e7aa44",
      "ruleName": "`audio` element content has text alternative",
      "rulePage": "https://act-rules.github.io/rules/e7aa44",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f2708a20bec207e83c2894e43a86cd984d73ea04",
      "url": "https://act-rules.github.io/testcases/2eb176/f2708a20bec207e83c2894e43a86cd984d73ea04.html",
      "relativePath": "testcases/2eb176/f2708a20bec207e83c2894e43a86cd984d73ea04.html",
      "expected": "passed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "7e3dc0719f2dbb96e11b190f581435695b0279a0",
      "url": "https://act-rules.github.io/testcases/2eb176/7e3dc0719f2dbb96e11b190f581435695b0279a0.html",
      "relativePath": "testcases/2eb176/7e3dc0719f2dbb96e11b190f581435695b0279a0.html",
      "expected": "passed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "4912313d27923c38fac58e8a1853513814f07011",
      "url": "https://act-rules.github.io/testcases/2eb176/4912313d27923c38fac58e8a1853513814f07011.html",
      "relativePath": "testcases/2eb176/4912313d27923c38fac58e8a1853513814f07011.html",
      "expected": "passed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "9ee5227398192a33c3c1ef690b23301c32c70e06",
      "url": "https://act-rules.github.io/testcases/2eb176/9ee5227398192a33c3c1ef690b23301c32c70e06.html",
      "relativePath": "testcases/2eb176/9ee5227398192a33c3c1ef690b23301c32c70e06.html",
      "expected": "failed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "7c340585ba94393d0d8afb5fe83728e16ed6a5b1",
      "url": "https://act-rules.github.io/testcases/2eb176/7c340585ba94393d0d8afb5fe83728e16ed6a5b1.html",
      "relativePath": "testcases/2eb176/7c340585ba94393d0d8afb5fe83728e16ed6a5b1.html",
      "expected": "failed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "58364af53ccb208afb1b77e11a6e697fb3395766",
      "url": "https://act-rules.github.io/testcases/2eb176/58364af53ccb208afb1b77e11a6e697fb3395766.html",
      "relativePath": "testcases/2eb176/58364af53ccb208afb1b77e11a6e697fb3395766.html",
      "expected": "failed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "9fb18d21147481bad43651cf5073d19d2bd72aad",
      "url": "https://act-rules.github.io/testcases/2eb176/9fb18d21147481bad43651cf5073d19d2bd72aad.html",
      "relativePath": "testcases/2eb176/9fb18d21147481bad43651cf5073d19d2bd72aad.html",
      "expected": "failed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "458017e20b702967ffa91db2e667ed3e2986cf0c",
      "url": "https://act-rules.github.io/testcases/2eb176/458017e20b702967ffa91db2e667ed3e2986cf0c.html",
      "relativePath": "testcases/2eb176/458017e20b702967ffa91db2e667ed3e2986cf0c.html",
      "expected": "failed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "b8dba00bb41dead7406efa79538b2c068f6f862b",
      "url": "https://act-rules.github.io/testcases/2eb176/b8dba00bb41dead7406efa79538b2c068f6f862b.html",
      "relativePath": "testcases/2eb176/b8dba00bb41dead7406efa79538b2c068f6f862b.html",
      "expected": "failed",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "5724aced2da653aae642470850ae54e0a1b51074",
      "url": "https://act-rules.github.io/testcases/2eb176/5724aced2da653aae642470850ae54e0a1b51074.html",
      "relativePath": "testcases/2eb176/5724aced2da653aae642470850ae54e0a1b51074.html",
      "expected": "inapplicable",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "8e29a8b981217eab0ed7891f947054f50284fc09",
      "url": "https://act-rules.github.io/testcases/2eb176/8e29a8b981217eab0ed7891f947054f50284fc09.html",
      "relativePath": "testcases/2eb176/8e29a8b981217eab0ed7891f947054f50284fc09.html",
      "expected": "inapplicable",
      "ruleId": "2eb176",
      "ruleName": "`audio` element content has transcript",
      "rulePage": "https://act-rules.github.io/rules/2eb176",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "945ad4e661ad9dd20cd451048d15322fc9f9c534",
      "url": "https://act-rules.github.io/testcases/aaa1bf/945ad4e661ad9dd20cd451048d15322fc9f9c534.html",
      "relativePath": "testcases/aaa1bf/945ad4e661ad9dd20cd451048d15322fc9f9c534.html",
      "expected": "passed",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "3babec3037bcc1cd9e5bf8e6de85c59438d54206",
      "url": "https://act-rules.github.io/testcases/aaa1bf/3babec3037bcc1cd9e5bf8e6de85c59438d54206.html",
      "relativePath": "testcases/aaa1bf/3babec3037bcc1cd9e5bf8e6de85c59438d54206.html",
      "expected": "passed",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "390a1ceda9611dfb392cb59f9968d02e0212556f",
      "url": "https://act-rules.github.io/testcases/aaa1bf/390a1ceda9611dfb392cb59f9968d02e0212556f.html",
      "relativePath": "testcases/aaa1bf/390a1ceda9611dfb392cb59f9968d02e0212556f.html",
      "expected": "failed",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "35ef10a2f125300f9efa2860c130362bdedc1642",
      "url": "https://act-rules.github.io/testcases/aaa1bf/35ef10a2f125300f9efa2860c130362bdedc1642.html",
      "relativePath": "testcases/aaa1bf/35ef10a2f125300f9efa2860c130362bdedc1642.html",
      "expected": "failed",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "d26423080b852e0c9fd2d1d56a75af41c5151269",
      "url": "https://act-rules.github.io/testcases/aaa1bf/d26423080b852e0c9fd2d1d56a75af41c5151269.html",
      "relativePath": "testcases/aaa1bf/d26423080b852e0c9fd2d1d56a75af41c5151269.html",
      "expected": "inapplicable",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "2ca3b2aa5ba3c3d2b6964d9b8e0623f4493a58d6",
      "url": "https://act-rules.github.io/testcases/aaa1bf/2ca3b2aa5ba3c3d2b6964d9b8e0623f4493a58d6.html",
      "relativePath": "testcases/aaa1bf/2ca3b2aa5ba3c3d2b6964d9b8e0623f4493a58d6.html",
      "expected": "inapplicable",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "22db72e6a902e9eef487cbf4d926527b574fd205",
      "url": "https://act-rules.github.io/testcases/aaa1bf/22db72e6a902e9eef487cbf4d926527b574fd205.html",
      "relativePath": "testcases/aaa1bf/22db72e6a902e9eef487cbf4d926527b574fd205.html",
      "expected": "inapplicable",
      "ruleId": "aaa1bf",
      "ruleName": "auto-play audio does not exceed 3 seconds",
      "rulePage": "https://act-rules.github.io/rules/aaa1bf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "08e96dfea0f3953da4ebd9e6b11d550f488281e0",
      "url": "https://act-rules.github.io/testcases/4c31df/08e96dfea0f3953da4ebd9e6b11d550f488281e0.html",
      "relativePath": "testcases/4c31df/08e96dfea0f3953da4ebd9e6b11d550f488281e0.html",
      "expected": "passed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "2d633c8cb3fe6b34648d1b8924c18a7620cb05e8",
      "url": "https://act-rules.github.io/testcases/4c31df/2d633c8cb3fe6b34648d1b8924c18a7620cb05e8.html",
      "relativePath": "testcases/4c31df/2d633c8cb3fe6b34648d1b8924c18a7620cb05e8.html",
      "expected": "passed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "3fa6b43ddd6ce27cb54c34326d5dd1a8a6b14bc5",
      "url": "https://act-rules.github.io/testcases/4c31df/3fa6b43ddd6ce27cb54c34326d5dd1a8a6b14bc5.html",
      "relativePath": "testcases/4c31df/3fa6b43ddd6ce27cb54c34326d5dd1a8a6b14bc5.html",
      "expected": "passed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "ceb7422fcb489531ed58fcd922f285550b59c18f",
      "url": "https://act-rules.github.io/testcases/4c31df/ceb7422fcb489531ed58fcd922f285550b59c18f.html",
      "relativePath": "testcases/4c31df/ceb7422fcb489531ed58fcd922f285550b59c18f.html",
      "expected": "failed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "d3554bbdd0e1f940f1ceb6628c7277c2c70711f7",
      "url": "https://act-rules.github.io/testcases/4c31df/d3554bbdd0e1f940f1ceb6628c7277c2c70711f7.html",
      "relativePath": "testcases/4c31df/d3554bbdd0e1f940f1ceb6628c7277c2c70711f7.html",
      "expected": "failed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "ff4bb63cc172b3a4e38b8217c58a71febc7b2e03",
      "url": "https://act-rules.github.io/testcases/4c31df/ff4bb63cc172b3a4e38b8217c58a71febc7b2e03.html",
      "relativePath": "testcases/4c31df/ff4bb63cc172b3a4e38b8217c58a71febc7b2e03.html",
      "expected": "failed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "73af94d13d50409cd781b90808da04d74ff87d71",
      "url": "https://act-rules.github.io/testcases/4c31df/73af94d13d50409cd781b90808da04d74ff87d71.html",
      "relativePath": "testcases/4c31df/73af94d13d50409cd781b90808da04d74ff87d71.html",
      "expected": "failed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "56eefe7e1be69d7c0b94f3ea99ec8050f1cdd49a",
      "url": "https://act-rules.github.io/testcases/4c31df/56eefe7e1be69d7c0b94f3ea99ec8050f1cdd49a.html",
      "relativePath": "testcases/4c31df/56eefe7e1be69d7c0b94f3ea99ec8050f1cdd49a.html",
      "expected": "failed",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "00fc0708bf89f2c345ec2678f3436406cdc2d5c2",
      "url": "https://act-rules.github.io/testcases/4c31df/00fc0708bf89f2c345ec2678f3436406cdc2d5c2.html",
      "relativePath": "testcases/4c31df/00fc0708bf89f2c345ec2678f3436406cdc2d5c2.html",
      "expected": "inapplicable",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "392d3bf3fe8da8559ade5c1093130b88c17b929c",
      "url": "https://act-rules.github.io/testcases/4c31df/392d3bf3fe8da8559ade5c1093130b88c17b929c.html",
      "relativePath": "testcases/4c31df/392d3bf3fe8da8559ade5c1093130b88c17b929c.html",
      "expected": "inapplicable",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "c6c1ec743dbb5d9a162115021a288d2839751969",
      "url": "https://act-rules.github.io/testcases/4c31df/c6c1ec743dbb5d9a162115021a288d2839751969.html",
      "relativePath": "testcases/4c31df/c6c1ec743dbb5d9a162115021a288d2839751969.html",
      "expected": "inapplicable",
      "ruleId": "4c31df",
      "ruleName": "auto-play audio has a control mechanism",
      "rulePage": "https://act-rules.github.io/rules/4c31df",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "f0156a0cde081a2a340265d8e0d169192fafc8e4",
      "url": "https://act-rules.github.io/testcases/73f2c2/f0156a0cde081a2a340265d8e0d169192fafc8e4.html",
      "relativePath": "testcases/73f2c2/f0156a0cde081a2a340265d8e0d169192fafc8e4.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b0ac20f6350808a6a37a393b44b6943274e3b176",
      "url": "https://act-rules.github.io/testcases/73f2c2/b0ac20f6350808a6a37a393b44b6943274e3b176.html",
      "relativePath": "testcases/73f2c2/b0ac20f6350808a6a37a393b44b6943274e3b176.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "262c7f3f06e34519deecec2ccb3098fc2c38afec",
      "url": "https://act-rules.github.io/testcases/73f2c2/262c7f3f06e34519deecec2ccb3098fc2c38afec.html",
      "relativePath": "testcases/73f2c2/262c7f3f06e34519deecec2ccb3098fc2c38afec.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "99e1670503ef329da2ec9401acd372ee20389754",
      "url": "https://act-rules.github.io/testcases/73f2c2/99e1670503ef329da2ec9401acd372ee20389754.html",
      "relativePath": "testcases/73f2c2/99e1670503ef329da2ec9401acd372ee20389754.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f6d03d83b6b562d1840bf8c4089e395592553661",
      "url": "https://act-rules.github.io/testcases/73f2c2/f6d03d83b6b562d1840bf8c4089e395592553661.html",
      "relativePath": "testcases/73f2c2/f6d03d83b6b562d1840bf8c4089e395592553661.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "279e442fc8f94783615b9d56dc45ef8917c3d064",
      "url": "https://act-rules.github.io/testcases/73f2c2/279e442fc8f94783615b9d56dc45ef8917c3d064.html",
      "relativePath": "testcases/73f2c2/279e442fc8f94783615b9d56dc45ef8917c3d064.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5a83eb56b6fb8a8ea5679141d2747000001a09c9",
      "url": "https://act-rules.github.io/testcases/73f2c2/5a83eb56b6fb8a8ea5679141d2747000001a09c9.html",
      "relativePath": "testcases/73f2c2/5a83eb56b6fb8a8ea5679141d2747000001a09c9.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "94982760f469e40a9d788244b2791ad7752cf348",
      "url": "https://act-rules.github.io/testcases/73f2c2/94982760f469e40a9d788244b2791ad7752cf348.html",
      "relativePath": "testcases/73f2c2/94982760f469e40a9d788244b2791ad7752cf348.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b9e85545b1a57fbdab00e07314ceca614a434497",
      "url": "https://act-rules.github.io/testcases/73f2c2/b9e85545b1a57fbdab00e07314ceca614a434497.html",
      "relativePath": "testcases/73f2c2/b9e85545b1a57fbdab00e07314ceca614a434497.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a62b8eaaeb15dcdceacf65574d182d99e0a07790",
      "url": "https://act-rules.github.io/testcases/73f2c2/a62b8eaaeb15dcdceacf65574d182d99e0a07790.html",
      "relativePath": "testcases/73f2c2/a62b8eaaeb15dcdceacf65574d182d99e0a07790.html",
      "expected": "passed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "804d52f203dc470d99d779acbe26425bada58df9",
      "url": "https://act-rules.github.io/testcases/73f2c2/804d52f203dc470d99d779acbe26425bada58df9.html",
      "relativePath": "testcases/73f2c2/804d52f203dc470d99d779acbe26425bada58df9.html",
      "expected": "failed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ab2f46f44bffc49caa5a50cbae5f64076e8a2ff2",
      "url": "https://act-rules.github.io/testcases/73f2c2/ab2f46f44bffc49caa5a50cbae5f64076e8a2ff2.html",
      "relativePath": "testcases/73f2c2/ab2f46f44bffc49caa5a50cbae5f64076e8a2ff2.html",
      "expected": "failed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6c547657ff38cf7072c5ba754397d293aaccf4bd",
      "url": "https://act-rules.github.io/testcases/73f2c2/6c547657ff38cf7072c5ba754397d293aaccf4bd.html",
      "relativePath": "testcases/73f2c2/6c547657ff38cf7072c5ba754397d293aaccf4bd.html",
      "expected": "failed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e4e0b31f9e53fb4dbf687ed9ea23157ad508d502",
      "url": "https://act-rules.github.io/testcases/73f2c2/e4e0b31f9e53fb4dbf687ed9ea23157ad508d502.html",
      "relativePath": "testcases/73f2c2/e4e0b31f9e53fb4dbf687ed9ea23157ad508d502.html",
      "expected": "failed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e22feb53b7d69b29e7e8f2a466d8fcd3124eade6",
      "url": "https://act-rules.github.io/testcases/73f2c2/e22feb53b7d69b29e7e8f2a466d8fcd3124eade6.html",
      "relativePath": "testcases/73f2c2/e22feb53b7d69b29e7e8f2a466d8fcd3124eade6.html",
      "expected": "failed",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a69117acb0cdbbeadafdee7677feeb4499889cd6",
      "url": "https://act-rules.github.io/testcases/73f2c2/a69117acb0cdbbeadafdee7677feeb4499889cd6.html",
      "relativePath": "testcases/73f2c2/a69117acb0cdbbeadafdee7677feeb4499889cd6.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "97ffc23e4937c6088a127175c3e82291f3324e39",
      "url": "https://act-rules.github.io/testcases/73f2c2/97ffc23e4937c6088a127175c3e82291f3324e39.html",
      "relativePath": "testcases/73f2c2/97ffc23e4937c6088a127175c3e82291f3324e39.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "efe356ba295d4c9e8dcb7ce5a33370d95b4fddd3",
      "url": "https://act-rules.github.io/testcases/73f2c2/efe356ba295d4c9e8dcb7ce5a33370d95b4fddd3.html",
      "relativePath": "testcases/73f2c2/efe356ba295d4c9e8dcb7ce5a33370d95b4fddd3.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "51a1408c260acba97c26290109fbc9a64d8c192f",
      "url": "https://act-rules.github.io/testcases/73f2c2/51a1408c260acba97c26290109fbc9a64d8c192f.html",
      "relativePath": "testcases/73f2c2/51a1408c260acba97c26290109fbc9a64d8c192f.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bd01302d95b7e32136b439159a460b1097cca109",
      "url": "https://act-rules.github.io/testcases/73f2c2/bd01302d95b7e32136b439159a460b1097cca109.html",
      "relativePath": "testcases/73f2c2/bd01302d95b7e32136b439159a460b1097cca109.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a20f1cc8995ae32226613ef2e0040d515297dd8f",
      "url": "https://act-rules.github.io/testcases/73f2c2/a20f1cc8995ae32226613ef2e0040d515297dd8f.html",
      "relativePath": "testcases/73f2c2/a20f1cc8995ae32226613ef2e0040d515297dd8f.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "474de7a1a8a10efb7be48deac5159d9de8150954",
      "url": "https://act-rules.github.io/testcases/73f2c2/474de7a1a8a10efb7be48deac5159d9de8150954.html",
      "relativePath": "testcases/73f2c2/474de7a1a8a10efb7be48deac5159d9de8150954.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "fa3d96edde25609bba283e6e6fb4346c80158d28",
      "url": "https://act-rules.github.io/testcases/73f2c2/fa3d96edde25609bba283e6e6fb4346c80158d28.html",
      "relativePath": "testcases/73f2c2/fa3d96edde25609bba283e6e6fb4346c80158d28.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a491316da10c63c4b620cbfa8d7819ce571022ae",
      "url": "https://act-rules.github.io/testcases/73f2c2/a491316da10c63c4b620cbfa8d7819ce571022ae.html",
      "relativePath": "testcases/73f2c2/a491316da10c63c4b620cbfa8d7819ce571022ae.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "14d6eeffc9cd28e3eed213a61d272e081fc5328f",
      "url": "https://act-rules.github.io/testcases/73f2c2/14d6eeffc9cd28e3eed213a61d272e081fc5328f.html",
      "relativePath": "testcases/73f2c2/14d6eeffc9cd28e3eed213a61d272e081fc5328f.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "151c29fabfa2e44b127a32088b3fcb8695652936",
      "url": "https://act-rules.github.io/testcases/73f2c2/151c29fabfa2e44b127a32088b3fcb8695652936.html",
      "relativePath": "testcases/73f2c2/151c29fabfa2e44b127a32088b3fcb8695652936.html",
      "expected": "inapplicable",
      "ruleId": "73f2c2",
      "ruleName": "`autocomplete` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/73f2c2",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3f1791e11d02c11f950a13172fc1c03d9e84f7cf",
      "url": "https://act-rules.github.io/testcases/97a4e1/3f1791e11d02c11f950a13172fc1c03d9e84f7cf.html",
      "relativePath": "testcases/97a4e1/3f1791e11d02c11f950a13172fc1c03d9e84f7cf.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d408cca4ab3468dde1dec3fb48e51c508cbb70d7",
      "url": "https://act-rules.github.io/testcases/97a4e1/d408cca4ab3468dde1dec3fb48e51c508cbb70d7.html",
      "relativePath": "testcases/97a4e1/d408cca4ab3468dde1dec3fb48e51c508cbb70d7.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "104a9256c8e8b0752c43ae0821daf92c18781ce8",
      "url": "https://act-rules.github.io/testcases/97a4e1/104a9256c8e8b0752c43ae0821daf92c18781ce8.html",
      "relativePath": "testcases/97a4e1/104a9256c8e8b0752c43ae0821daf92c18781ce8.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "83899857cdc304726341cea593e3f72efc7e22ee",
      "url": "https://act-rules.github.io/testcases/97a4e1/83899857cdc304726341cea593e3f72efc7e22ee.html",
      "relativePath": "testcases/97a4e1/83899857cdc304726341cea593e3f72efc7e22ee.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "064ac1119c78804ee67d6fc4001b86279675466f",
      "url": "https://act-rules.github.io/testcases/97a4e1/064ac1119c78804ee67d6fc4001b86279675466f.html",
      "relativePath": "testcases/97a4e1/064ac1119c78804ee67d6fc4001b86279675466f.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "46ceea6d3ce5a938db807802a3cd8914ce154c14",
      "url": "https://act-rules.github.io/testcases/97a4e1/46ceea6d3ce5a938db807802a3cd8914ce154c14.html",
      "relativePath": "testcases/97a4e1/46ceea6d3ce5a938db807802a3cd8914ce154c14.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cce47b593783fb76f84de37a53cd8af0f15a889f",
      "url": "https://act-rules.github.io/testcases/97a4e1/cce47b593783fb76f84de37a53cd8af0f15a889f.html",
      "relativePath": "testcases/97a4e1/cce47b593783fb76f84de37a53cd8af0f15a889f.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3378832ac24e2a6460efededb922a1355a1ccfba",
      "url": "https://act-rules.github.io/testcases/97a4e1/3378832ac24e2a6460efededb922a1355a1ccfba.html",
      "relativePath": "testcases/97a4e1/3378832ac24e2a6460efededb922a1355a1ccfba.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9cf07b4a24c6a3e24dd6093d967599518d26846a",
      "url": "https://act-rules.github.io/testcases/97a4e1/9cf07b4a24c6a3e24dd6093d967599518d26846a.html",
      "relativePath": "testcases/97a4e1/9cf07b4a24c6a3e24dd6093d967599518d26846a.html",
      "expected": "passed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a6c40a95f261ac27993f8205d91f7f4540f91f23",
      "url": "https://act-rules.github.io/testcases/97a4e1/a6c40a95f261ac27993f8205d91f7f4540f91f23.html",
      "relativePath": "testcases/97a4e1/a6c40a95f261ac27993f8205d91f7f4540f91f23.html",
      "expected": "failed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "34247af6724ee7bcdc0a71e0def98d5410e7363e",
      "url": "https://act-rules.github.io/testcases/97a4e1/34247af6724ee7bcdc0a71e0def98d5410e7363e.html",
      "relativePath": "testcases/97a4e1/34247af6724ee7bcdc0a71e0def98d5410e7363e.html",
      "expected": "failed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9cd3d7152dbd99cc60b83939ffb3003ab1a3d7de",
      "url": "https://act-rules.github.io/testcases/97a4e1/9cd3d7152dbd99cc60b83939ffb3003ab1a3d7de.html",
      "relativePath": "testcases/97a4e1/9cd3d7152dbd99cc60b83939ffb3003ab1a3d7de.html",
      "expected": "failed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8eb7978d588ab8fd27918075581699ba3ec3d57e",
      "url": "https://act-rules.github.io/testcases/97a4e1/8eb7978d588ab8fd27918075581699ba3ec3d57e.html",
      "relativePath": "testcases/97a4e1/8eb7978d588ab8fd27918075581699ba3ec3d57e.html",
      "expected": "failed",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "18536a16b216da886cf45842e7a16ffebf80af8c",
      "url": "https://act-rules.github.io/testcases/97a4e1/18536a16b216da886cf45842e7a16ffebf80af8c.html",
      "relativePath": "testcases/97a4e1/18536a16b216da886cf45842e7a16ffebf80af8c.html",
      "expected": "inapplicable",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "20901e2525d4f6c77476caacf41ec9d5c234a59a",
      "url": "https://act-rules.github.io/testcases/97a4e1/20901e2525d4f6c77476caacf41ec9d5c234a59a.html",
      "relativePath": "testcases/97a4e1/20901e2525d4f6c77476caacf41ec9d5c234a59a.html",
      "expected": "inapplicable",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6cd354877d9f74fb27e250616b44abe1d70ed41e",
      "url": "https://act-rules.github.io/testcases/97a4e1/6cd354877d9f74fb27e250616b44abe1d70ed41e.html",
      "relativePath": "testcases/97a4e1/6cd354877d9f74fb27e250616b44abe1d70ed41e.html",
      "expected": "inapplicable",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e34c1f2a007d5711980c45f6051a3f2e52b66847",
      "url": "https://act-rules.github.io/testcases/97a4e1/e34c1f2a007d5711980c45f6051a3f2e52b66847.html",
      "relativePath": "testcases/97a4e1/e34c1f2a007d5711980c45f6051a3f2e52b66847.html",
      "expected": "inapplicable",
      "ruleId": "97a4e1",
      "ruleName": "Button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/97a4e1",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cd018789b49540702f2d4a43e7c4fdba43868d73",
      "url": "https://act-rules.github.io/testcases/b33eff/cd018789b49540702f2d4a43e7c4fdba43868d73.html",
      "relativePath": "testcases/b33eff/cd018789b49540702f2d4a43e7c4fdba43868d73.html",
      "expected": "passed",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2a565685e5eff487582e927c88b57dbab76cb8fc",
      "url": "https://act-rules.github.io/testcases/b33eff/2a565685e5eff487582e927c88b57dbab76cb8fc.html",
      "relativePath": "testcases/b33eff/2a565685e5eff487582e927c88b57dbab76cb8fc.html",
      "expected": "passed",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2caf0636361e576d50b3b20aef24c11329465ec7",
      "url": "https://act-rules.github.io/testcases/b33eff/2caf0636361e576d50b3b20aef24c11329465ec7.html",
      "relativePath": "testcases/b33eff/2caf0636361e576d50b3b20aef24c11329465ec7.html",
      "expected": "passed",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0ac7841fba568c64ef44aaf0817f51508603cf4a",
      "url": "https://act-rules.github.io/testcases/b33eff/0ac7841fba568c64ef44aaf0817f51508603cf4a.html",
      "relativePath": "testcases/b33eff/0ac7841fba568c64ef44aaf0817f51508603cf4a.html",
      "expected": "failed",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "70d571c05bb64f851b46e4b6fd9b82e174860f66",
      "url": "https://act-rules.github.io/testcases/b33eff/70d571c05bb64f851b46e4b6fd9b82e174860f66.html",
      "relativePath": "testcases/b33eff/70d571c05bb64f851b46e4b6fd9b82e174860f66.html",
      "expected": "failed",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7e666e7c0116bc2ad66e691a66e159fa0873a778",
      "url": "https://act-rules.github.io/testcases/b33eff/7e666e7c0116bc2ad66e691a66e159fa0873a778.html",
      "relativePath": "testcases/b33eff/7e666e7c0116bc2ad66e691a66e159fa0873a778.html",
      "expected": "inapplicable",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d288295be774625969b1efa1086ab590c0066667",
      "url": "https://act-rules.github.io/testcases/b33eff/d288295be774625969b1efa1086ab590c0066667.html",
      "relativePath": "testcases/b33eff/d288295be774625969b1efa1086ab590c0066667.html",
      "expected": "inapplicable",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6c82b06a37af7bdc4937f2b3b7225b13bf10ba79",
      "url": "https://act-rules.github.io/testcases/b33eff/6c82b06a37af7bdc4937f2b3b7225b13bf10ba79.html",
      "relativePath": "testcases/b33eff/6c82b06a37af7bdc4937f2b3b7225b13bf10ba79.html",
      "expected": "inapplicable",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "99fccda1d8c85bbfc30f8706b644c8d36cdbdfda",
      "url": "https://act-rules.github.io/testcases/b33eff/99fccda1d8c85bbfc30f8706b644c8d36cdbdfda.html",
      "relativePath": "testcases/b33eff/99fccda1d8c85bbfc30f8706b644c8d36cdbdfda.html",
      "expected": "inapplicable",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c3deb42f8c65d190d89da433d2e5816057a2e5dc",
      "url": "https://act-rules.github.io/testcases/b33eff/c3deb42f8c65d190d89da433d2e5816057a2e5dc.html",
      "relativePath": "testcases/b33eff/c3deb42f8c65d190d89da433d2e5816057a2e5dc.html",
      "expected": "inapplicable",
      "ruleId": "b33eff",
      "ruleName": "Orientation of the page is not restricted using CSS transform property",
      "rulePage": "https://act-rules.github.io/rules/b33eff",
      "ruleAccessibilityRequirements": {
        "wcag21:1.3.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bc5fb949b04ce0f7f2b25cd3aec8236583765faf",
      "url": "https://act-rules.github.io/testcases/de46e4/bc5fb949b04ce0f7f2b25cd3aec8236583765faf.html",
      "relativePath": "testcases/de46e4/bc5fb949b04ce0f7f2b25cd3aec8236583765faf.html",
      "expected": "passed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ea7fd8d68acc2c0343dd2d8e4b7aef198a600723",
      "url": "https://act-rules.github.io/testcases/de46e4/ea7fd8d68acc2c0343dd2d8e4b7aef198a600723.html",
      "relativePath": "testcases/de46e4/ea7fd8d68acc2c0343dd2d8e4b7aef198a600723.html",
      "expected": "passed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cc015884670decc500fda2e5b8afa04ba7079eb2",
      "url": "https://act-rules.github.io/testcases/de46e4/cc015884670decc500fda2e5b8afa04ba7079eb2.html",
      "relativePath": "testcases/de46e4/cc015884670decc500fda2e5b8afa04ba7079eb2.html",
      "expected": "passed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f3a4b479dff6aa3261798e969f514a0311844eb3",
      "url": "https://act-rules.github.io/testcases/de46e4/f3a4b479dff6aa3261798e969f514a0311844eb3.html",
      "relativePath": "testcases/de46e4/f3a4b479dff6aa3261798e969f514a0311844eb3.html",
      "expected": "passed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3df9675549273cdea249f5957265e151f81f59c8",
      "url": "https://act-rules.github.io/testcases/de46e4/3df9675549273cdea249f5957265e151f81f59c8.html",
      "relativePath": "testcases/de46e4/3df9675549273cdea249f5957265e151f81f59c8.html",
      "expected": "passed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f6f18d19b38152624efc680fc7d8e977e3adef9c",
      "url": "https://act-rules.github.io/testcases/de46e4/f6f18d19b38152624efc680fc7d8e977e3adef9c.html",
      "relativePath": "testcases/de46e4/f6f18d19b38152624efc680fc7d8e977e3adef9c.html",
      "expected": "failed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d1ccf7721f2e24dccde09df36a1fba4d3d9f8220",
      "url": "https://act-rules.github.io/testcases/de46e4/d1ccf7721f2e24dccde09df36a1fba4d3d9f8220.html",
      "relativePath": "testcases/de46e4/d1ccf7721f2e24dccde09df36a1fba4d3d9f8220.html",
      "expected": "failed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1d545cad6c6f2daae5cd97b10227a103ca871e17",
      "url": "https://act-rules.github.io/testcases/de46e4/1d545cad6c6f2daae5cd97b10227a103ca871e17.html",
      "relativePath": "testcases/de46e4/1d545cad6c6f2daae5cd97b10227a103ca871e17.html",
      "expected": "failed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "11e0b90162a89e8c51c8331f1e99f24cf09f5c44",
      "url": "https://act-rules.github.io/testcases/de46e4/11e0b90162a89e8c51c8331f1e99f24cf09f5c44.html",
      "relativePath": "testcases/de46e4/11e0b90162a89e8c51c8331f1e99f24cf09f5c44.html",
      "expected": "failed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6ce8600b806ac30ef6e15c5e9429632e8b5163c6",
      "url": "https://act-rules.github.io/testcases/de46e4/6ce8600b806ac30ef6e15c5e9429632e8b5163c6.html",
      "relativePath": "testcases/de46e4/6ce8600b806ac30ef6e15c5e9429632e8b5163c6.html",
      "expected": "failed",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d487d660ae20b1715096aa366f74ea93700fb883",
      "url": "https://act-rules.github.io/testcases/de46e4/d487d660ae20b1715096aa366f74ea93700fb883.html",
      "relativePath": "testcases/de46e4/d487d660ae20b1715096aa366f74ea93700fb883.html",
      "expected": "inapplicable",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cfb309fa744777cdcb0b3101e828deb19ea15237",
      "url": "https://act-rules.github.io/testcases/de46e4/cfb309fa744777cdcb0b3101e828deb19ea15237.html",
      "relativePath": "testcases/de46e4/cfb309fa744777cdcb0b3101e828deb19ea15237.html",
      "expected": "inapplicable",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f611affc2e8b6fc29174b48880d1d4e116ab7d47",
      "url": "https://act-rules.github.io/testcases/de46e4/f611affc2e8b6fc29174b48880d1d4e116ab7d47.html",
      "relativePath": "testcases/de46e4/f611affc2e8b6fc29174b48880d1d4e116ab7d47.html",
      "expected": "inapplicable",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5e17076527241704ceab3010eee08942e5a93988",
      "url": "https://act-rules.github.io/testcases/de46e4/5e17076527241704ceab3010eee08942e5a93988.html",
      "relativePath": "testcases/de46e4/5e17076527241704ceab3010eee08942e5a93988.html",
      "expected": "inapplicable",
      "ruleId": "de46e4",
      "ruleName": "Element within `body` has valid `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/de46e4",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "69410ed3505eb1562185b9f862ba37d927998de8",
      "url": "https://act-rules.github.io/testcases/80af7b/69410ed3505eb1562185b9f862ba37d927998de8.html",
      "relativePath": "testcases/80af7b/69410ed3505eb1562185b9f862ba37d927998de8.html",
      "expected": "passed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cb7788489955008fa42baa4f29929ec9d0c229fc",
      "url": "https://act-rules.github.io/testcases/80af7b/cb7788489955008fa42baa4f29929ec9d0c229fc.html",
      "relativePath": "testcases/80af7b/cb7788489955008fa42baa4f29929ec9d0c229fc.html",
      "expected": "passed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bb305c5ab78c9404613f3ad60b42aa1f2c5cdb57",
      "url": "https://act-rules.github.io/testcases/80af7b/bb305c5ab78c9404613f3ad60b42aa1f2c5cdb57.html",
      "relativePath": "testcases/80af7b/bb305c5ab78c9404613f3ad60b42aa1f2c5cdb57.html",
      "expected": "passed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "008cb1639bcba16dbd19eeb47893211f4af5bdb7",
      "url": "https://act-rules.github.io/testcases/80af7b/008cb1639bcba16dbd19eeb47893211f4af5bdb7.html",
      "relativePath": "testcases/80af7b/008cb1639bcba16dbd19eeb47893211f4af5bdb7.html",
      "expected": "passed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e9b1ed55f763dc90b77721d90e217028be92e3e8",
      "url": "https://act-rules.github.io/testcases/80af7b/e9b1ed55f763dc90b77721d90e217028be92e3e8.html",
      "relativePath": "testcases/80af7b/e9b1ed55f763dc90b77721d90e217028be92e3e8.html",
      "expected": "passed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2ebd78e348ef78a0f38324cec4a9a4a3890a0afb",
      "url": "https://act-rules.github.io/testcases/80af7b/2ebd78e348ef78a0f38324cec4a9a4a3890a0afb.html",
      "relativePath": "testcases/80af7b/2ebd78e348ef78a0f38324cec4a9a4a3890a0afb.html",
      "expected": "passed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3820e644ceea98676c75189b1f3dfbb7854ec1b4",
      "url": "https://act-rules.github.io/testcases/80af7b/3820e644ceea98676c75189b1f3dfbb7854ec1b4.html",
      "relativePath": "testcases/80af7b/3820e644ceea98676c75189b1f3dfbb7854ec1b4.html",
      "expected": "failed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "131e9069eb3c535e2d40602955546e822eb52201",
      "url": "https://act-rules.github.io/testcases/80af7b/131e9069eb3c535e2d40602955546e822eb52201.html",
      "relativePath": "testcases/80af7b/131e9069eb3c535e2d40602955546e822eb52201.html",
      "expected": "failed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "78fa1137d4ca4e566718258caf700b99f52fb503",
      "url": "https://act-rules.github.io/testcases/80af7b/78fa1137d4ca4e566718258caf700b99f52fb503.html",
      "relativePath": "testcases/80af7b/78fa1137d4ca4e566718258caf700b99f52fb503.html",
      "expected": "failed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0626b535042549f48d191334f32da06f956f8f3a",
      "url": "https://act-rules.github.io/testcases/80af7b/0626b535042549f48d191334f32da06f956f8f3a.html",
      "relativePath": "testcases/80af7b/0626b535042549f48d191334f32da06f956f8f3a.html",
      "expected": "failed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ce3ce66323bd4cdce2266513b44fe0b98e6b4827",
      "url": "https://act-rules.github.io/testcases/80af7b/ce3ce66323bd4cdce2266513b44fe0b98e6b4827.html",
      "relativePath": "testcases/80af7b/ce3ce66323bd4cdce2266513b44fe0b98e6b4827.html",
      "expected": "failed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ba8ceee1bc59c96667b421555b17ce1ab552c5ad",
      "url": "https://act-rules.github.io/testcases/80af7b/ba8ceee1bc59c96667b421555b17ce1ab552c5ad.html",
      "relativePath": "testcases/80af7b/ba8ceee1bc59c96667b421555b17ce1ab552c5ad.html",
      "expected": "failed",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0b85651f7b5522930967a5e243706419b81324ae",
      "url": "https://act-rules.github.io/testcases/80af7b/0b85651f7b5522930967a5e243706419b81324ae.html",
      "relativePath": "testcases/80af7b/0b85651f7b5522930967a5e243706419b81324ae.html",
      "expected": "inapplicable",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "117c07dd49f45f6180e42f261bb706b3c7345a19",
      "url": "https://act-rules.github.io/testcases/80af7b/117c07dd49f45f6180e42f261bb706b3c7345a19.html",
      "relativePath": "testcases/80af7b/117c07dd49f45f6180e42f261bb706b3c7345a19.html",
      "expected": "inapplicable",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ef698dcb80787790ad086be6abdc79493f02c5ab",
      "url": "https://act-rules.github.io/testcases/80af7b/ef698dcb80787790ad086be6abdc79493f02c5ab.html",
      "relativePath": "testcases/80af7b/ef698dcb80787790ad086be6abdc79493f02c5ab.html",
      "expected": "inapplicable",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1fc043dccfa2f1fa4761baacf607e510a27deb2c",
      "url": "https://act-rules.github.io/testcases/80af7b/1fc043dccfa2f1fa4761baacf607e510a27deb2c.html",
      "relativePath": "testcases/80af7b/1fc043dccfa2f1fa4761baacf607e510a27deb2c.html",
      "expected": "inapplicable",
      "ruleId": "80af7b",
      "ruleName": "Focusable element has no keyboard trap",
      "rulePage": "https://act-rules.github.io/rules/80af7b",
      "ruleAccessibilityRequirements": {
        "wcag20:2.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1f36218d8ed1d11e7658ba579803e7e32e5f4049",
      "url": "https://act-rules.github.io/testcases/ebe86a/1f36218d8ed1d11e7658ba579803e7e32e5f4049.html",
      "relativePath": "testcases/ebe86a/1f36218d8ed1d11e7658ba579803e7e32e5f4049.html",
      "expected": "passed",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "561211cf042da27aec06fd027e6a6cf428608333",
      "url": "https://act-rules.github.io/testcases/ebe86a/561211cf042da27aec06fd027e6a6cf428608333.html",
      "relativePath": "testcases/ebe86a/561211cf042da27aec06fd027e6a6cf428608333.html",
      "expected": "passed",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "ac1d4b12e346fa29acb2f06687bdddaa7791ceba",
      "url": "https://act-rules.github.io/testcases/ebe86a/ac1d4b12e346fa29acb2f06687bdddaa7791ceba.html",
      "relativePath": "testcases/ebe86a/ac1d4b12e346fa29acb2f06687bdddaa7791ceba.html",
      "expected": "passed",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "4bbece77c42e6d1b4e5d4eb42632361eaca4cfd9",
      "url": "https://act-rules.github.io/testcases/ebe86a/4bbece77c42e6d1b4e5d4eb42632361eaca4cfd9.html",
      "relativePath": "testcases/ebe86a/4bbece77c42e6d1b4e5d4eb42632361eaca4cfd9.html",
      "expected": "failed",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "2104edd33b6a7f69a56f9060291cb5c32b99e596",
      "url": "https://act-rules.github.io/testcases/ebe86a/2104edd33b6a7f69a56f9060291cb5c32b99e596.html",
      "relativePath": "testcases/ebe86a/2104edd33b6a7f69a56f9060291cb5c32b99e596.html",
      "expected": "failed",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "3c9a96a9ff9ed3fe0a4dfc0a68e008bf066a9d14",
      "url": "https://act-rules.github.io/testcases/ebe86a/3c9a96a9ff9ed3fe0a4dfc0a68e008bf066a9d14.html",
      "relativePath": "testcases/ebe86a/3c9a96a9ff9ed3fe0a4dfc0a68e008bf066a9d14.html",
      "expected": "failed",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "74e4cf67d0cff074ad62cb18d7b7bab1afff4b6e",
      "url": "https://act-rules.github.io/testcases/ebe86a/74e4cf67d0cff074ad62cb18d7b7bab1afff4b6e.html",
      "relativePath": "testcases/ebe86a/74e4cf67d0cff074ad62cb18d7b7bab1afff4b6e.html",
      "expected": "inapplicable",
      "ruleId": "ebe86a",
      "ruleName": "Focusable element has no keyboard trap via non-standard navigation",
      "rulePage": "https://act-rules.github.io/rules/ebe86a",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "b649e3398d560d331f246921648a872b7ec2f91f",
      "url": "https://act-rules.github.io/testcases/a1b64e/b649e3398d560d331f246921648a872b7ec2f91f.html",
      "relativePath": "testcases/a1b64e/b649e3398d560d331f246921648a872b7ec2f91f.html",
      "expected": "passed",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "29c88f9a19a9e42f2ba8a9b8d10f6c73cb0f3407",
      "url": "https://act-rules.github.io/testcases/a1b64e/29c88f9a19a9e42f2ba8a9b8d10f6c73cb0f3407.html",
      "relativePath": "testcases/a1b64e/29c88f9a19a9e42f2ba8a9b8d10f6c73cb0f3407.html",
      "expected": "passed",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "a4d96e9730229e898d49399cb3d6c96c8ad2512b",
      "url": "https://act-rules.github.io/testcases/a1b64e/a4d96e9730229e898d49399cb3d6c96c8ad2512b.html",
      "relativePath": "testcases/a1b64e/a4d96e9730229e898d49399cb3d6c96c8ad2512b.html",
      "expected": "passed",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "a0778d8b0f1733d078019254ed9eef1a280eea98",
      "url": "https://act-rules.github.io/testcases/a1b64e/a0778d8b0f1733d078019254ed9eef1a280eea98.html",
      "relativePath": "testcases/a1b64e/a0778d8b0f1733d078019254ed9eef1a280eea98.html",
      "expected": "failed",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "56d43d65ac07cfb154f253cf863089f48a1fc91f",
      "url": "https://act-rules.github.io/testcases/a1b64e/56d43d65ac07cfb154f253cf863089f48a1fc91f.html",
      "relativePath": "testcases/a1b64e/56d43d65ac07cfb154f253cf863089f48a1fc91f.html",
      "expected": "failed",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "b130a03d93874f7ade3f6ff7cdd9f88892dd752f",
      "url": "https://act-rules.github.io/testcases/a1b64e/b130a03d93874f7ade3f6ff7cdd9f88892dd752f.html",
      "relativePath": "testcases/a1b64e/b130a03d93874f7ade3f6ff7cdd9f88892dd752f.html",
      "expected": "failed",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "2608f99c483fe8d6152df40ac43d13e0db301f66",
      "url": "https://act-rules.github.io/testcases/a1b64e/2608f99c483fe8d6152df40ac43d13e0db301f66.html",
      "relativePath": "testcases/a1b64e/2608f99c483fe8d6152df40ac43d13e0db301f66.html",
      "expected": "inapplicable",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "80db1a97837de008e4a5e98dd4b374951e3bb26a",
      "url": "https://act-rules.github.io/testcases/a1b64e/80db1a97837de008e4a5e98dd4b374951e3bb26a.html",
      "relativePath": "testcases/a1b64e/80db1a97837de008e4a5e98dd4b374951e3bb26a.html",
      "expected": "inapplicable",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "ea5502776faf15def1238ef4495b8c46e046cc3c",
      "url": "https://act-rules.github.io/testcases/a1b64e/ea5502776faf15def1238ef4495b8c46e046cc3c.html",
      "relativePath": "testcases/a1b64e/ea5502776faf15def1238ef4495b8c46e046cc3c.html",
      "expected": "inapplicable",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "bce10aed4e161ce93978b74a54ccc31b73ddd3fb",
      "url": "https://act-rules.github.io/testcases/a1b64e/bce10aed4e161ce93978b74a54ccc31b73ddd3fb.html",
      "relativePath": "testcases/a1b64e/bce10aed4e161ce93978b74a54ccc31b73ddd3fb.html",
      "expected": "inapplicable",
      "ruleId": "a1b64e",
      "ruleName": "Focusable element has no keyboard trap via standard navigation",
      "rulePage": "https://act-rules.github.io/rules/a1b64e",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "561cfd59f6e94b62ba259f034bc4d7157394fd1a",
      "url": "https://act-rules.github.io/testcases/e086e5/561cfd59f6e94b62ba259f034bc4d7157394fd1a.html",
      "relativePath": "testcases/e086e5/561cfd59f6e94b62ba259f034bc4d7157394fd1a.html",
      "expected": "passed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1ad00779b51e64bde2517c3f505c56ca111fb103",
      "url": "https://act-rules.github.io/testcases/e086e5/1ad00779b51e64bde2517c3f505c56ca111fb103.html",
      "relativePath": "testcases/e086e5/1ad00779b51e64bde2517c3f505c56ca111fb103.html",
      "expected": "passed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "52b7a12fea954b3fcf0187267ba3b76267dc2400",
      "url": "https://act-rules.github.io/testcases/e086e5/52b7a12fea954b3fcf0187267ba3b76267dc2400.html",
      "relativePath": "testcases/e086e5/52b7a12fea954b3fcf0187267ba3b76267dc2400.html",
      "expected": "passed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "fea54a84d60e88f318fa2e588e670e56af75c011",
      "url": "https://act-rules.github.io/testcases/e086e5/fea54a84d60e88f318fa2e588e670e56af75c011.html",
      "relativePath": "testcases/e086e5/fea54a84d60e88f318fa2e588e670e56af75c011.html",
      "expected": "passed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bdb551d769e2249b51d346d5c9025bdfb8215c1d",
      "url": "https://act-rules.github.io/testcases/e086e5/bdb551d769e2249b51d346d5c9025bdfb8215c1d.html",
      "relativePath": "testcases/e086e5/bdb551d769e2249b51d346d5c9025bdfb8215c1d.html",
      "expected": "passed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3422b215e2af85de0d497170df7885b3f4edfad9",
      "url": "https://act-rules.github.io/testcases/e086e5/3422b215e2af85de0d497170df7885b3f4edfad9.html",
      "relativePath": "testcases/e086e5/3422b215e2af85de0d497170df7885b3f4edfad9.html",
      "expected": "passed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c722b7b589a463b954d3d34824c6fc32588d0a79",
      "url": "https://act-rules.github.io/testcases/e086e5/c722b7b589a463b954d3d34824c6fc32588d0a79.html",
      "relativePath": "testcases/e086e5/c722b7b589a463b954d3d34824c6fc32588d0a79.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c7e9ba3fb23a49f197685b962ed36e96b2c16e42",
      "url": "https://act-rules.github.io/testcases/e086e5/c7e9ba3fb23a49f197685b962ed36e96b2c16e42.html",
      "relativePath": "testcases/e086e5/c7e9ba3fb23a49f197685b962ed36e96b2c16e42.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "064fa0d03ddabb4aad68525213e7697a4ffa57d0",
      "url": "https://act-rules.github.io/testcases/e086e5/064fa0d03ddabb4aad68525213e7697a4ffa57d0.html",
      "relativePath": "testcases/e086e5/064fa0d03ddabb4aad68525213e7697a4ffa57d0.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a55d1bea3f609e2b972a03ed07f77cf958b72024",
      "url": "https://act-rules.github.io/testcases/e086e5/a55d1bea3f609e2b972a03ed07f77cf958b72024.html",
      "relativePath": "testcases/e086e5/a55d1bea3f609e2b972a03ed07f77cf958b72024.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6a74abc191da8abecbbad6fc2d007d50913a2331",
      "url": "https://act-rules.github.io/testcases/e086e5/6a74abc191da8abecbbad6fc2d007d50913a2331.html",
      "relativePath": "testcases/e086e5/6a74abc191da8abecbbad6fc2d007d50913a2331.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "934b30a38e189d724737ca32902a7d2da45b72f4",
      "url": "https://act-rules.github.io/testcases/e086e5/934b30a38e189d724737ca32902a7d2da45b72f4.html",
      "relativePath": "testcases/e086e5/934b30a38e189d724737ca32902a7d2da45b72f4.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0db47508b614ad9296ed8d06a07fe356edb9ffb8",
      "url": "https://act-rules.github.io/testcases/e086e5/0db47508b614ad9296ed8d06a07fe356edb9ffb8.html",
      "relativePath": "testcases/e086e5/0db47508b614ad9296ed8d06a07fe356edb9ffb8.html",
      "expected": "failed",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c2f1556a3082d9c4100dbadf07bfbe73f1fc497a",
      "url": "https://act-rules.github.io/testcases/e086e5/c2f1556a3082d9c4100dbadf07bfbe73f1fc497a.html",
      "relativePath": "testcases/e086e5/c2f1556a3082d9c4100dbadf07bfbe73f1fc497a.html",
      "expected": "inapplicable",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "34951088441536c223f0db8e9fd2ee711011b340",
      "url": "https://act-rules.github.io/testcases/e086e5/34951088441536c223f0db8e9fd2ee711011b340.html",
      "relativePath": "testcases/e086e5/34951088441536c223f0db8e9fd2ee711011b340.html",
      "expected": "inapplicable",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e4cfcf467a485a76b3c139daa5ee8f3dac16b8ee",
      "url": "https://act-rules.github.io/testcases/e086e5/e4cfcf467a485a76b3c139daa5ee8f3dac16b8ee.html",
      "relativePath": "testcases/e086e5/e4cfcf467a485a76b3c139daa5ee8f3dac16b8ee.html",
      "expected": "inapplicable",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "533bd9059749c50f0c14fc880a5826a60bd4ffe6",
      "url": "https://act-rules.github.io/testcases/e086e5/533bd9059749c50f0c14fc880a5826a60bd4ffe6.html",
      "relativePath": "testcases/e086e5/533bd9059749c50f0c14fc880a5826a60bd4ffe6.html",
      "expected": "inapplicable",
      "ruleId": "e086e5",
      "ruleName": "Form control has accessible name",
      "rulePage": "https://act-rules.github.io/rules/e086e5",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "79fe962174a406c5c08f9a5d8122e01426a132b8",
      "url": "https://act-rules.github.io/testcases/cc0f0a/79fe962174a406c5c08f9a5d8122e01426a132b8.html",
      "relativePath": "testcases/cc0f0a/79fe962174a406c5c08f9a5d8122e01426a132b8.html",
      "expected": "passed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1794013d122ddba77b8bc372956ced1d13010edd",
      "url": "https://act-rules.github.io/testcases/cc0f0a/1794013d122ddba77b8bc372956ced1d13010edd.html",
      "relativePath": "testcases/cc0f0a/1794013d122ddba77b8bc372956ced1d13010edd.html",
      "expected": "passed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "841d05cb60af908d083243cb0e64528f6e36df2a",
      "url": "https://act-rules.github.io/testcases/cc0f0a/841d05cb60af908d083243cb0e64528f6e36df2a.html",
      "relativePath": "testcases/cc0f0a/841d05cb60af908d083243cb0e64528f6e36df2a.html",
      "expected": "passed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b62c6bb01f48cb5631f9ec891462aee8ce4d252a",
      "url": "https://act-rules.github.io/testcases/cc0f0a/b62c6bb01f48cb5631f9ec891462aee8ce4d252a.html",
      "relativePath": "testcases/cc0f0a/b62c6bb01f48cb5631f9ec891462aee8ce4d252a.html",
      "expected": "passed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d3d69cae8f46a82b10ad203101542c8e4abfc314",
      "url": "https://act-rules.github.io/testcases/cc0f0a/d3d69cae8f46a82b10ad203101542c8e4abfc314.html",
      "relativePath": "testcases/cc0f0a/d3d69cae8f46a82b10ad203101542c8e4abfc314.html",
      "expected": "passed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ef16d89f0d356c491365ec962ce250aedf1c029f",
      "url": "https://act-rules.github.io/testcases/cc0f0a/ef16d89f0d356c491365ec962ce250aedf1c029f.html",
      "relativePath": "testcases/cc0f0a/ef16d89f0d356c491365ec962ce250aedf1c029f.html",
      "expected": "failed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c36ecb9ef962fc1635a63073d71b35b21744dc36",
      "url": "https://act-rules.github.io/testcases/cc0f0a/c36ecb9ef962fc1635a63073d71b35b21744dc36.html",
      "relativePath": "testcases/cc0f0a/c36ecb9ef962fc1635a63073d71b35b21744dc36.html",
      "expected": "failed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "124aca19dd362d95f12be4e018f594cdc0e30820",
      "url": "https://act-rules.github.io/testcases/cc0f0a/124aca19dd362d95f12be4e018f594cdc0e30820.html",
      "relativePath": "testcases/cc0f0a/124aca19dd362d95f12be4e018f594cdc0e30820.html",
      "expected": "failed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "334f32d645ad9264f060b80055971fb556382c4c",
      "url": "https://act-rules.github.io/testcases/cc0f0a/334f32d645ad9264f060b80055971fb556382c4c.html",
      "relativePath": "testcases/cc0f0a/334f32d645ad9264f060b80055971fb556382c4c.html",
      "expected": "failed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "567e247cf9558d078511d17155e6d8e9fbddb8eb",
      "url": "https://act-rules.github.io/testcases/cc0f0a/567e247cf9558d078511d17155e6d8e9fbddb8eb.html",
      "relativePath": "testcases/cc0f0a/567e247cf9558d078511d17155e6d8e9fbddb8eb.html",
      "expected": "failed",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c29e711c0a515944a14e8074a37d1b08b462c298",
      "url": "https://act-rules.github.io/testcases/cc0f0a/c29e711c0a515944a14e8074a37d1b08b462c298.html",
      "relativePath": "testcases/cc0f0a/c29e711c0a515944a14e8074a37d1b08b462c298.html",
      "expected": "inapplicable",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "56bd31e2f8654f4c48b170f10da3bb6fe6b6b29a",
      "url": "https://act-rules.github.io/testcases/cc0f0a/56bd31e2f8654f4c48b170f10da3bb6fe6b6b29a.html",
      "relativePath": "testcases/cc0f0a/56bd31e2f8654f4c48b170f10da3bb6fe6b6b29a.html",
      "expected": "inapplicable",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "11129b1da85eb77b342174d553e055462f819df2",
      "url": "https://act-rules.github.io/testcases/cc0f0a/11129b1da85eb77b342174d553e055462f819df2.html",
      "relativePath": "testcases/cc0f0a/11129b1da85eb77b342174d553e055462f819df2.html",
      "expected": "inapplicable",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "850969eec810c7f7e51c6f0cf317e1cfa4984e6a",
      "url": "https://act-rules.github.io/testcases/cc0f0a/850969eec810c7f7e51c6f0cf317e1cfa4984e6a.html",
      "relativePath": "testcases/cc0f0a/850969eec810c7f7e51c6f0cf317e1cfa4984e6a.html",
      "expected": "inapplicable",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b03cf088345e7a0d93bd6be1155a7d61a2e22af3",
      "url": "https://act-rules.github.io/testcases/cc0f0a/b03cf088345e7a0d93bd6be1155a7d61a2e22af3.html",
      "relativePath": "testcases/cc0f0a/b03cf088345e7a0d93bd6be1155a7d61a2e22af3.html",
      "expected": "inapplicable",
      "ruleId": "cc0f0a",
      "ruleName": "Form control label is descriptive",
      "rulePage": "https://act-rules.github.io/rules/cc0f0a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bb5bf78e3e47e1877d766e1129cd8e279698a953",
      "url": "https://act-rules.github.io/testcases/b49b2e/bb5bf78e3e47e1877d766e1129cd8e279698a953.html",
      "relativePath": "testcases/b49b2e/bb5bf78e3e47e1877d766e1129cd8e279698a953.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "738c219fb0369eb0e53cac36ddf18c801740360b",
      "url": "https://act-rules.github.io/testcases/b49b2e/738c219fb0369eb0e53cac36ddf18c801740360b.html",
      "relativePath": "testcases/b49b2e/738c219fb0369eb0e53cac36ddf18c801740360b.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e500dcc58ca0270dd73e15cb57bbf4349a6466a0",
      "url": "https://act-rules.github.io/testcases/b49b2e/e500dcc58ca0270dd73e15cb57bbf4349a6466a0.html",
      "relativePath": "testcases/b49b2e/e500dcc58ca0270dd73e15cb57bbf4349a6466a0.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2147e1c089f295f7f89fe88c6eacb0cb4ffade37",
      "url": "https://act-rules.github.io/testcases/b49b2e/2147e1c089f295f7f89fe88c6eacb0cb4ffade37.html",
      "relativePath": "testcases/b49b2e/2147e1c089f295f7f89fe88c6eacb0cb4ffade37.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "88991c831b912b2ec899cd896f700f464aa9bae3",
      "url": "https://act-rules.github.io/testcases/b49b2e/88991c831b912b2ec899cd896f700f464aa9bae3.html",
      "relativePath": "testcases/b49b2e/88991c831b912b2ec899cd896f700f464aa9bae3.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "53ffba524362d6988baf35f963cc5434ca3deaed",
      "url": "https://act-rules.github.io/testcases/b49b2e/53ffba524362d6988baf35f963cc5434ca3deaed.html",
      "relativePath": "testcases/b49b2e/53ffba524362d6988baf35f963cc5434ca3deaed.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7b89386b4c39ee5001ff6b927993fdaf54799088",
      "url": "https://act-rules.github.io/testcases/b49b2e/7b89386b4c39ee5001ff6b927993fdaf54799088.html",
      "relativePath": "testcases/b49b2e/7b89386b4c39ee5001ff6b927993fdaf54799088.html",
      "expected": "passed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "51efa2e33c9984445d163168214785aadb5f6a43",
      "url": "https://act-rules.github.io/testcases/b49b2e/51efa2e33c9984445d163168214785aadb5f6a43.html",
      "relativePath": "testcases/b49b2e/51efa2e33c9984445d163168214785aadb5f6a43.html",
      "expected": "failed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ee952b7b33d829577b12c066241ca1e5797d5f8f",
      "url": "https://act-rules.github.io/testcases/b49b2e/ee952b7b33d829577b12c066241ca1e5797d5f8f.html",
      "relativePath": "testcases/b49b2e/ee952b7b33d829577b12c066241ca1e5797d5f8f.html",
      "expected": "failed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8f54083ed6d90224eb28dcacfbd7a69185ab3f40",
      "url": "https://act-rules.github.io/testcases/b49b2e/8f54083ed6d90224eb28dcacfbd7a69185ab3f40.html",
      "relativePath": "testcases/b49b2e/8f54083ed6d90224eb28dcacfbd7a69185ab3f40.html",
      "expected": "failed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "36bbc0f3ea260725735381b7576c2c3940c70fd4",
      "url": "https://act-rules.github.io/testcases/b49b2e/36bbc0f3ea260725735381b7576c2c3940c70fd4.html",
      "relativePath": "testcases/b49b2e/36bbc0f3ea260725735381b7576c2c3940c70fd4.html",
      "expected": "failed",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c156bcc9fc754dc60aa36df8277105816e5253b1",
      "url": "https://act-rules.github.io/testcases/b49b2e/c156bcc9fc754dc60aa36df8277105816e5253b1.html",
      "relativePath": "testcases/b49b2e/c156bcc9fc754dc60aa36df8277105816e5253b1.html",
      "expected": "inapplicable",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7b2e67ab09b1793cad8e87a89a9e62b38644ec2c",
      "url": "https://act-rules.github.io/testcases/b49b2e/7b2e67ab09b1793cad8e87a89a9e62b38644ec2c.html",
      "relativePath": "testcases/b49b2e/7b2e67ab09b1793cad8e87a89a9e62b38644ec2c.html",
      "expected": "inapplicable",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6b60a0099b0ab3480cfbdcc4aa8e44088e870daa",
      "url": "https://act-rules.github.io/testcases/b49b2e/6b60a0099b0ab3480cfbdcc4aa8e44088e870daa.html",
      "relativePath": "testcases/b49b2e/6b60a0099b0ab3480cfbdcc4aa8e44088e870daa.html",
      "expected": "inapplicable",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "722f24c45bb352eb38dcd48937876aac08ef4376",
      "url": "https://act-rules.github.io/testcases/b49b2e/722f24c45bb352eb38dcd48937876aac08ef4376.html",
      "relativePath": "testcases/b49b2e/722f24c45bb352eb38dcd48937876aac08ef4376.html",
      "expected": "inapplicable",
      "ruleId": "b49b2e",
      "ruleName": "Heading is descriptive",
      "rulePage": "https://act-rules.github.io/rules/b49b2e",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.6": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e8c6920a352d46ff2cf6257e8e4cbcc4e574797f",
      "url": "https://act-rules.github.io/testcases/b5c3f8/e8c6920a352d46ff2cf6257e8e4cbcc4e574797f.html",
      "relativePath": "testcases/b5c3f8/e8c6920a352d46ff2cf6257e8e4cbcc4e574797f.html",
      "expected": "passed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1a34a7d427f335d39867e8e706057357ba4a7fb0",
      "url": "https://act-rules.github.io/testcases/b5c3f8/1a34a7d427f335d39867e8e706057357ba4a7fb0.html",
      "relativePath": "testcases/b5c3f8/1a34a7d427f335d39867e8e706057357ba4a7fb0.html",
      "expected": "passed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b9e26c1db931217d8455574f1b226610c8e7ffa6",
      "url": "https://act-rules.github.io/testcases/b5c3f8/b9e26c1db931217d8455574f1b226610c8e7ffa6.html",
      "relativePath": "testcases/b5c3f8/b9e26c1db931217d8455574f1b226610c8e7ffa6.html",
      "expected": "passed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4f0fdf35fcceb1bf73eb53a004cd4260af63c2b1",
      "url": "https://act-rules.github.io/testcases/b5c3f8/4f0fdf35fcceb1bf73eb53a004cd4260af63c2b1.html",
      "relativePath": "testcases/b5c3f8/4f0fdf35fcceb1bf73eb53a004cd4260af63c2b1.html",
      "expected": "passed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "19ab5124623c09399dd5d6aeb0b082e11b1fc9a1",
      "url": "https://act-rules.github.io/testcases/b5c3f8/19ab5124623c09399dd5d6aeb0b082e11b1fc9a1.html",
      "relativePath": "testcases/b5c3f8/19ab5124623c09399dd5d6aeb0b082e11b1fc9a1.html",
      "expected": "passed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c728f6e0d5175040383c5410a68fa7512d7a0586",
      "url": "https://act-rules.github.io/testcases/b5c3f8/c728f6e0d5175040383c5410a68fa7512d7a0586.html",
      "relativePath": "testcases/b5c3f8/c728f6e0d5175040383c5410a68fa7512d7a0586.html",
      "expected": "failed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9004a706c2100c6649e7c64a1ffa673d5c185dc7",
      "url": "https://act-rules.github.io/testcases/b5c3f8/9004a706c2100c6649e7c64a1ffa673d5c185dc7.html",
      "relativePath": "testcases/b5c3f8/9004a706c2100c6649e7c64a1ffa673d5c185dc7.html",
      "expected": "failed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6c23d52df135e149a1849886ab9ec190ebc6fe3f",
      "url": "https://act-rules.github.io/testcases/b5c3f8/6c23d52df135e149a1849886ab9ec190ebc6fe3f.html",
      "relativePath": "testcases/b5c3f8/6c23d52df135e149a1849886ab9ec190ebc6fe3f.html",
      "expected": "failed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "00d53f76d0fe833b15e9fd0cb178267b2c0dd96c",
      "url": "https://act-rules.github.io/testcases/b5c3f8/00d53f76d0fe833b15e9fd0cb178267b2c0dd96c.html",
      "relativePath": "testcases/b5c3f8/00d53f76d0fe833b15e9fd0cb178267b2c0dd96c.html",
      "expected": "failed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "54e1f6d8f4701189bbe2cc2798957c2e9992c000",
      "url": "https://act-rules.github.io/testcases/b5c3f8/54e1f6d8f4701189bbe2cc2798957c2e9992c000.html",
      "relativePath": "testcases/b5c3f8/54e1f6d8f4701189bbe2cc2798957c2e9992c000.html",
      "expected": "failed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cb40f44ed89775e7774102ac9c431e1b5e818dc9",
      "url": "https://act-rules.github.io/testcases/b5c3f8/cb40f44ed89775e7774102ac9c431e1b5e818dc9.html",
      "relativePath": "testcases/b5c3f8/cb40f44ed89775e7774102ac9c431e1b5e818dc9.html",
      "expected": "failed",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d7564695869ac55c02956ec17844d69ab6c28907",
      "url": "https://act-rules.github.io/testcases/b5c3f8/d7564695869ac55c02956ec17844d69ab6c28907.svg",
      "relativePath": "testcases/b5c3f8/d7564695869ac55c02956ec17844d69ab6c28907.svg",
      "expected": "inapplicable",
      "ruleId": "b5c3f8",
      "ruleName": "HTML page has `lang` attribute",
      "rulePage": "https://act-rules.github.io/rules/b5c3f8",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c31b1fb00860505c2df2713bea279907b263972b",
      "url": "https://act-rules.github.io/testcases/bf051a/c31b1fb00860505c2df2713bea279907b263972b.html",
      "relativePath": "testcases/bf051a/c31b1fb00860505c2df2713bea279907b263972b.html",
      "expected": "passed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b20f422ae3e21f58a68320cea7b56888c9a1c327",
      "url": "https://act-rules.github.io/testcases/bf051a/b20f422ae3e21f58a68320cea7b56888c9a1c327.html",
      "relativePath": "testcases/bf051a/b20f422ae3e21f58a68320cea7b56888c9a1c327.html",
      "expected": "passed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "97f9355be3966ed3055700266b421fb6e1015604",
      "url": "https://act-rules.github.io/testcases/bf051a/97f9355be3966ed3055700266b421fb6e1015604.html",
      "relativePath": "testcases/bf051a/97f9355be3966ed3055700266b421fb6e1015604.html",
      "expected": "passed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "544be6643ddbb98a930227ca32e7c4a03fdf6ac9",
      "url": "https://act-rules.github.io/testcases/bf051a/544be6643ddbb98a930227ca32e7c4a03fdf6ac9.html",
      "relativePath": "testcases/bf051a/544be6643ddbb98a930227ca32e7c4a03fdf6ac9.html",
      "expected": "passed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c840906cc9ce1ec3c4b5662b59bbeab3eeac12d4",
      "url": "https://act-rules.github.io/testcases/bf051a/c840906cc9ce1ec3c4b5662b59bbeab3eeac12d4.html",
      "relativePath": "testcases/bf051a/c840906cc9ce1ec3c4b5662b59bbeab3eeac12d4.html",
      "expected": "passed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "fa3e3fac5dbdc32c700b250ad420ef8ca26e16e5",
      "url": "https://act-rules.github.io/testcases/bf051a/fa3e3fac5dbdc32c700b250ad420ef8ca26e16e5.html",
      "relativePath": "testcases/bf051a/fa3e3fac5dbdc32c700b250ad420ef8ca26e16e5.html",
      "expected": "passed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "fb1123f5baba9492c2fdc7ecd9a3d66678ebc95a",
      "url": "https://act-rules.github.io/testcases/bf051a/fb1123f5baba9492c2fdc7ecd9a3d66678ebc95a.html",
      "relativePath": "testcases/bf051a/fb1123f5baba9492c2fdc7ecd9a3d66678ebc95a.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9599221436e0d1c16085d69b6e9b3ce2f0b7e5de",
      "url": "https://act-rules.github.io/testcases/bf051a/9599221436e0d1c16085d69b6e9b3ce2f0b7e5de.html",
      "relativePath": "testcases/bf051a/9599221436e0d1c16085d69b6e9b3ce2f0b7e5de.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "776b84ec8a3c1c18c9282437f8c666dd0bf6bae5",
      "url": "https://act-rules.github.io/testcases/bf051a/776b84ec8a3c1c18c9282437f8c666dd0bf6bae5.html",
      "relativePath": "testcases/bf051a/776b84ec8a3c1c18c9282437f8c666dd0bf6bae5.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "90ac9c3118483559f1979bf7b4e57a46e3a63eaf",
      "url": "https://act-rules.github.io/testcases/bf051a/90ac9c3118483559f1979bf7b4e57a46e3a63eaf.html",
      "relativePath": "testcases/bf051a/90ac9c3118483559f1979bf7b4e57a46e3a63eaf.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3d835d61d5eb774fbfba245013b0ad9446027bb8",
      "url": "https://act-rules.github.io/testcases/bf051a/3d835d61d5eb774fbfba245013b0ad9446027bb8.html",
      "relativePath": "testcases/bf051a/3d835d61d5eb774fbfba245013b0ad9446027bb8.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "25342c1edeebb82f905891a420b539667a1d8653",
      "url": "https://act-rules.github.io/testcases/bf051a/25342c1edeebb82f905891a420b539667a1d8653.html",
      "relativePath": "testcases/bf051a/25342c1edeebb82f905891a420b539667a1d8653.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "abbfd272b819bc6ab49b86e9300f1ccd8beb325b",
      "url": "https://act-rules.github.io/testcases/bf051a/abbfd272b819bc6ab49b86e9300f1ccd8beb325b.html",
      "relativePath": "testcases/bf051a/abbfd272b819bc6ab49b86e9300f1ccd8beb325b.html",
      "expected": "failed",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "455ed0f037647f3831ff9a4ebde4a1e6fcd7dad3",
      "url": "https://act-rules.github.io/testcases/bf051a/455ed0f037647f3831ff9a4ebde4a1e6fcd7dad3.svg",
      "relativePath": "testcases/bf051a/455ed0f037647f3831ff9a4ebde4a1e6fcd7dad3.svg",
      "expected": "inapplicable",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "60c3d3121a00675b4724d5b9cb635c2f79f1519b",
      "url": "https://act-rules.github.io/testcases/bf051a/60c3d3121a00675b4724d5b9cb635c2f79f1519b.html",
      "relativePath": "testcases/bf051a/60c3d3121a00675b4724d5b9cb635c2f79f1519b.html",
      "expected": "inapplicable",
      "ruleId": "bf051a",
      "ruleName": "HTML page language is valid",
      "rulePage": "https://act-rules.github.io/rules/bf051a",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e3391915b6e4ca2f63959f602230762da13c756b",
      "url": "https://act-rules.github.io/testcases/5b7ae0/e3391915b6e4ca2f63959f602230762da13c756b.html",
      "relativePath": "testcases/5b7ae0/e3391915b6e4ca2f63959f602230762da13c756b.html",
      "expected": "passed",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c38e4da6949ef7c73fa7060e6c0f3a528fb807a2",
      "url": "https://act-rules.github.io/testcases/5b7ae0/c38e4da6949ef7c73fa7060e6c0f3a528fb807a2.html",
      "relativePath": "testcases/5b7ae0/c38e4da6949ef7c73fa7060e6c0f3a528fb807a2.html",
      "expected": "passed",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ac2af59a26032d003e22bb8e49e73e39baa8e508",
      "url": "https://act-rules.github.io/testcases/5b7ae0/ac2af59a26032d003e22bb8e49e73e39baa8e508.html",
      "relativePath": "testcases/5b7ae0/ac2af59a26032d003e22bb8e49e73e39baa8e508.html",
      "expected": "passed",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "56a878567758376953caa80759ab3274b297ca3f",
      "url": "https://act-rules.github.io/testcases/5b7ae0/56a878567758376953caa80759ab3274b297ca3f.html",
      "relativePath": "testcases/5b7ae0/56a878567758376953caa80759ab3274b297ca3f.html",
      "expected": "passed",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d8e598008c70250101d5983d0e94403332486129",
      "url": "https://act-rules.github.io/testcases/5b7ae0/d8e598008c70250101d5983d0e94403332486129.html",
      "relativePath": "testcases/5b7ae0/d8e598008c70250101d5983d0e94403332486129.html",
      "expected": "passed",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b8d450119f62c913c36a618d0419426b85a01253",
      "url": "https://act-rules.github.io/testcases/5b7ae0/b8d450119f62c913c36a618d0419426b85a01253.html",
      "relativePath": "testcases/5b7ae0/b8d450119f62c913c36a618d0419426b85a01253.html",
      "expected": "failed",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9d1397438bea784d70e961a2abcbdd7b7c2f7d9f",
      "url": "https://act-rules.github.io/testcases/5b7ae0/9d1397438bea784d70e961a2abcbdd7b7c2f7d9f.svg",
      "relativePath": "testcases/5b7ae0/9d1397438bea784d70e961a2abcbdd7b7c2f7d9f.svg",
      "expected": "inapplicable",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "06a45142f4e6e5d2feccc108ffc223b6fa0a1851",
      "url": "https://act-rules.github.io/testcases/5b7ae0/06a45142f4e6e5d2feccc108ffc223b6fa0a1851.html",
      "relativePath": "testcases/5b7ae0/06a45142f4e6e5d2feccc108ffc223b6fa0a1851.html",
      "expected": "inapplicable",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ff391832901abd30b4bce209063fdc693321dbe1",
      "url": "https://act-rules.github.io/testcases/5b7ae0/ff391832901abd30b4bce209063fdc693321dbe1.html",
      "relativePath": "testcases/5b7ae0/ff391832901abd30b4bce209063fdc693321dbe1.html",
      "expected": "inapplicable",
      "ruleId": "5b7ae0",
      "ruleName": "HTML page `lang` and `xml:lang` attributes have matching values",
      "rulePage": "https://act-rules.github.io/rules/5b7ae0",
      "ruleAccessibilityRequirements": {
        "wcag20:3.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "15b0afb2496c5e7bf5ff0409cb5b39a8d5ae234b",
      "url": "https://act-rules.github.io/testcases/2779a5/15b0afb2496c5e7bf5ff0409cb5b39a8d5ae234b.html",
      "relativePath": "testcases/2779a5/15b0afb2496c5e7bf5ff0409cb5b39a8d5ae234b.html",
      "expected": "passed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7fbf32d69229cb570b3b0e58c62333d55a0ad567",
      "url": "https://act-rules.github.io/testcases/2779a5/7fbf32d69229cb570b3b0e58c62333d55a0ad567.html",
      "relativePath": "testcases/2779a5/7fbf32d69229cb570b3b0e58c62333d55a0ad567.html",
      "expected": "passed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bf1b811b607247364c2322dd45c047f2e3211229",
      "url": "https://act-rules.github.io/testcases/2779a5/bf1b811b607247364c2322dd45c047f2e3211229.html",
      "relativePath": "testcases/2779a5/bf1b811b607247364c2322dd45c047f2e3211229.html",
      "expected": "passed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2938f229ef636ed99cd23a3d1e8315131a1215cd",
      "url": "https://act-rules.github.io/testcases/2779a5/2938f229ef636ed99cd23a3d1e8315131a1215cd.html",
      "relativePath": "testcases/2779a5/2938f229ef636ed99cd23a3d1e8315131a1215cd.html",
      "expected": "passed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7c4ace0d67554bfb9917bce8965917de6c8a29f3",
      "url": "https://act-rules.github.io/testcases/2779a5/7c4ace0d67554bfb9917bce8965917de6c8a29f3.html",
      "relativePath": "testcases/2779a5/7c4ace0d67554bfb9917bce8965917de6c8a29f3.html",
      "expected": "passed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a49a08353a9370e068946b4089b5cdb51ff09a11",
      "url": "https://act-rules.github.io/testcases/2779a5/a49a08353a9370e068946b4089b5cdb51ff09a11.html",
      "relativePath": "testcases/2779a5/a49a08353a9370e068946b4089b5cdb51ff09a11.html",
      "expected": "passed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "676e3ccf785aa2315dda455217694b55f9a279aa",
      "url": "https://act-rules.github.io/testcases/2779a5/676e3ccf785aa2315dda455217694b55f9a279aa.html",
      "relativePath": "testcases/2779a5/676e3ccf785aa2315dda455217694b55f9a279aa.html",
      "expected": "failed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c425dc0257c8b895f1821219e880823561ffef3d",
      "url": "https://act-rules.github.io/testcases/2779a5/c425dc0257c8b895f1821219e880823561ffef3d.html",
      "relativePath": "testcases/2779a5/c425dc0257c8b895f1821219e880823561ffef3d.html",
      "expected": "failed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "37528789a63203943f689afa90a400a99c4f861d",
      "url": "https://act-rules.github.io/testcases/2779a5/37528789a63203943f689afa90a400a99c4f861d.html",
      "relativePath": "testcases/2779a5/37528789a63203943f689afa90a400a99c4f861d.html",
      "expected": "failed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d7c4202aa42aefe7f687247d289acd1b0ad44790",
      "url": "https://act-rules.github.io/testcases/2779a5/d7c4202aa42aefe7f687247d289acd1b0ad44790.html",
      "relativePath": "testcases/2779a5/d7c4202aa42aefe7f687247d289acd1b0ad44790.html",
      "expected": "failed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9619e9f28b767e8f5bd2fbf3e918df1f3859c9f4",
      "url": "https://act-rules.github.io/testcases/2779a5/9619e9f28b767e8f5bd2fbf3e918df1f3859c9f4.html",
      "relativePath": "testcases/2779a5/9619e9f28b767e8f5bd2fbf3e918df1f3859c9f4.html",
      "expected": "failed",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "af48a346ab1ee73d2b043e6346cadfad60d36aa4",
      "url": "https://act-rules.github.io/testcases/2779a5/af48a346ab1ee73d2b043e6346cadfad60d36aa4.svg",
      "relativePath": "testcases/2779a5/af48a346ab1ee73d2b043e6346cadfad60d36aa4.svg",
      "expected": "inapplicable",
      "ruleId": "2779a5",
      "ruleName": "HTML page has title",
      "rulePage": "https://act-rules.github.io/rules/2779a5",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3040ba5bd3485b7328c1cea8b5909982a10e4089",
      "url": "https://act-rules.github.io/testcases/c4a8a4/3040ba5bd3485b7328c1cea8b5909982a10e4089.html",
      "relativePath": "testcases/c4a8a4/3040ba5bd3485b7328c1cea8b5909982a10e4089.html",
      "expected": "passed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c9dbc781b5409dd551452fe36060c3b5fb5eab4d",
      "url": "https://act-rules.github.io/testcases/c4a8a4/c9dbc781b5409dd551452fe36060c3b5fb5eab4d.html",
      "relativePath": "testcases/c4a8a4/c9dbc781b5409dd551452fe36060c3b5fb5eab4d.html",
      "expected": "passed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7d92393eeccfa90b72c9f09de38cfe7c0d0aa15e",
      "url": "https://act-rules.github.io/testcases/c4a8a4/7d92393eeccfa90b72c9f09de38cfe7c0d0aa15e.html",
      "relativePath": "testcases/c4a8a4/7d92393eeccfa90b72c9f09de38cfe7c0d0aa15e.html",
      "expected": "passed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2d8761b5165a28b4b9d0f50d7731a02b3c41040f",
      "url": "https://act-rules.github.io/testcases/c4a8a4/2d8761b5165a28b4b9d0f50d7731a02b3c41040f.html",
      "relativePath": "testcases/c4a8a4/2d8761b5165a28b4b9d0f50d7731a02b3c41040f.html",
      "expected": "passed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "96c04cd150536de91138a329fd0f3c2d320bf1a0",
      "url": "https://act-rules.github.io/testcases/c4a8a4/96c04cd150536de91138a329fd0f3c2d320bf1a0.html",
      "relativePath": "testcases/c4a8a4/96c04cd150536de91138a329fd0f3c2d320bf1a0.html",
      "expected": "failed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "de6acada96b1cfb140e851646a7383154a748fd7",
      "url": "https://act-rules.github.io/testcases/c4a8a4/de6acada96b1cfb140e851646a7383154a748fd7.html",
      "relativePath": "testcases/c4a8a4/de6acada96b1cfb140e851646a7383154a748fd7.html",
      "expected": "failed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5d55c3142f9a6961b32e560a99eb99ea9eaa9073",
      "url": "https://act-rules.github.io/testcases/c4a8a4/5d55c3142f9a6961b32e560a99eb99ea9eaa9073.html",
      "relativePath": "testcases/c4a8a4/5d55c3142f9a6961b32e560a99eb99ea9eaa9073.html",
      "expected": "failed",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "aa75f943fdbf4055f9ae736cd2551b346d459147",
      "url": "https://act-rules.github.io/testcases/c4a8a4/aa75f943fdbf4055f9ae736cd2551b346d459147.svg",
      "relativePath": "testcases/c4a8a4/aa75f943fdbf4055f9ae736cd2551b346d459147.svg",
      "expected": "inapplicable",
      "ruleId": "c4a8a4",
      "ruleName": "HTML page title is descriptive",
      "rulePage": "https://act-rules.github.io/rules/c4a8a4",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "satisfied",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d3699cfa25c16abc46b14b728b3b8eeb303dbaf6",
      "url": "https://act-rules.github.io/testcases/3ea0c8/d3699cfa25c16abc46b14b728b3b8eeb303dbaf6.html",
      "relativePath": "testcases/3ea0c8/d3699cfa25c16abc46b14b728b3b8eeb303dbaf6.html",
      "expected": "passed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a0cf3d994c5d9f0b519bccd57f61be220f9f4f57",
      "url": "https://act-rules.github.io/testcases/3ea0c8/a0cf3d994c5d9f0b519bccd57f61be220f9f4f57.html",
      "relativePath": "testcases/3ea0c8/a0cf3d994c5d9f0b519bccd57f61be220f9f4f57.html",
      "expected": "passed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9976a79f227212ff02ea4285ca45840358380c49",
      "url": "https://act-rules.github.io/testcases/3ea0c8/9976a79f227212ff02ea4285ca45840358380c49.html",
      "relativePath": "testcases/3ea0c8/9976a79f227212ff02ea4285ca45840358380c49.html",
      "expected": "passed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e796a3abd41c4ec8d7d4e507914324c3f27d0e1e",
      "url": "https://act-rules.github.io/testcases/3ea0c8/e796a3abd41c4ec8d7d4e507914324c3f27d0e1e.html",
      "relativePath": "testcases/3ea0c8/e796a3abd41c4ec8d7d4e507914324c3f27d0e1e.html",
      "expected": "passed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "edcd4bf17e79263429442f229eab102fa7e9fef9",
      "url": "https://act-rules.github.io/testcases/3ea0c8/edcd4bf17e79263429442f229eab102fa7e9fef9.html",
      "relativePath": "testcases/3ea0c8/edcd4bf17e79263429442f229eab102fa7e9fef9.html",
      "expected": "failed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1d1a57fa832f6b497aca49fc25edc5f9ecfa9533",
      "url": "https://act-rules.github.io/testcases/3ea0c8/1d1a57fa832f6b497aca49fc25edc5f9ecfa9533.html",
      "relativePath": "testcases/3ea0c8/1d1a57fa832f6b497aca49fc25edc5f9ecfa9533.html",
      "expected": "failed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ab31e40e863b1e925ab7b93d30aebc86d8639bc2",
      "url": "https://act-rules.github.io/testcases/3ea0c8/ab31e40e863b1e925ab7b93d30aebc86d8639bc2.html",
      "relativePath": "testcases/3ea0c8/ab31e40e863b1e925ab7b93d30aebc86d8639bc2.html",
      "expected": "failed",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f9c6036873008af77f18b19b6f29cd2ff2f18782",
      "url": "https://act-rules.github.io/testcases/3ea0c8/f9c6036873008af77f18b19b6f29cd2ff2f18782.html",
      "relativePath": "testcases/3ea0c8/f9c6036873008af77f18b19b6f29cd2ff2f18782.html",
      "expected": "inapplicable",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "fac330f01f96514baa4f15bdf308cf35f7a5f406",
      "url": "https://act-rules.github.io/testcases/3ea0c8/fac330f01f96514baa4f15bdf308cf35f7a5f406.html",
      "relativePath": "testcases/3ea0c8/fac330f01f96514baa4f15bdf308cf35f7a5f406.html",
      "expected": "inapplicable",
      "ruleId": "3ea0c8",
      "ruleName": "`id` attribute value is unique",
      "rulePage": "https://act-rules.github.io/rules/3ea0c8",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0e79c04a2b68022220995516f5ab77eae78aebde",
      "url": "https://act-rules.github.io/testcases/cae760/0e79c04a2b68022220995516f5ab77eae78aebde.html",
      "relativePath": "testcases/cae760/0e79c04a2b68022220995516f5ab77eae78aebde.html",
      "expected": "passed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "35042dc3f9ace0082d260df87848f44c10babf35",
      "url": "https://act-rules.github.io/testcases/cae760/35042dc3f9ace0082d260df87848f44c10babf35.html",
      "relativePath": "testcases/cae760/35042dc3f9ace0082d260df87848f44c10babf35.html",
      "expected": "passed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f68bdbf79e416e510f4ae296cbf28179f825ba71",
      "url": "https://act-rules.github.io/testcases/cae760/f68bdbf79e416e510f4ae296cbf28179f825ba71.html",
      "relativePath": "testcases/cae760/f68bdbf79e416e510f4ae296cbf28179f825ba71.html",
      "expected": "passed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8d878dd328b0d13342cfaa2beb56bd0ec16ec64a",
      "url": "https://act-rules.github.io/testcases/cae760/8d878dd328b0d13342cfaa2beb56bd0ec16ec64a.html",
      "relativePath": "testcases/cae760/8d878dd328b0d13342cfaa2beb56bd0ec16ec64a.html",
      "expected": "passed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ea12dfb737753fe07adb69f3858a5e0c89b1e976",
      "url": "https://act-rules.github.io/testcases/cae760/ea12dfb737753fe07adb69f3858a5e0c89b1e976.html",
      "relativePath": "testcases/cae760/ea12dfb737753fe07adb69f3858a5e0c89b1e976.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "65d73c7dfeef2e7cdce2d77be76960179aa9b0a1",
      "url": "https://act-rules.github.io/testcases/cae760/65d73c7dfeef2e7cdce2d77be76960179aa9b0a1.html",
      "relativePath": "testcases/cae760/65d73c7dfeef2e7cdce2d77be76960179aa9b0a1.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a07b51429f368df4f017dc0de0a01e2615639b59",
      "url": "https://act-rules.github.io/testcases/cae760/a07b51429f368df4f017dc0de0a01e2615639b59.html",
      "relativePath": "testcases/cae760/a07b51429f368df4f017dc0de0a01e2615639b59.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "733c9ca6db504f361b71d568affd7fba1ee4dc02",
      "url": "https://act-rules.github.io/testcases/cae760/733c9ca6db504f361b71d568affd7fba1ee4dc02.html",
      "relativePath": "testcases/cae760/733c9ca6db504f361b71d568affd7fba1ee4dc02.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7b44ee66dcb848000bd6be9c98934c5779c1bd31",
      "url": "https://act-rules.github.io/testcases/cae760/7b44ee66dcb848000bd6be9c98934c5779c1bd31.html",
      "relativePath": "testcases/cae760/7b44ee66dcb848000bd6be9c98934c5779c1bd31.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6ac3ff2ce45bef735fdebb8f874900aeaad2f02e",
      "url": "https://act-rules.github.io/testcases/cae760/6ac3ff2ce45bef735fdebb8f874900aeaad2f02e.html",
      "relativePath": "testcases/cae760/6ac3ff2ce45bef735fdebb8f874900aeaad2f02e.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9ae9916e3d3db923ad7c687d8e2353967c4a57f6",
      "url": "https://act-rules.github.io/testcases/cae760/9ae9916e3d3db923ad7c687d8e2353967c4a57f6.html",
      "relativePath": "testcases/cae760/9ae9916e3d3db923ad7c687d8e2353967c4a57f6.html",
      "expected": "failed",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1cc9fdb1a9dc67f09c440c43308c2d29824baf1e",
      "url": "https://act-rules.github.io/testcases/cae760/1cc9fdb1a9dc67f09c440c43308c2d29824baf1e.html",
      "relativePath": "testcases/cae760/1cc9fdb1a9dc67f09c440c43308c2d29824baf1e.html",
      "expected": "inapplicable",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ea0b2facc10851c5136a690fb65c52ee22c90923",
      "url": "https://act-rules.github.io/testcases/cae760/ea0b2facc10851c5136a690fb65c52ee22c90923.html",
      "relativePath": "testcases/cae760/ea0b2facc10851c5136a690fb65c52ee22c90923.html",
      "expected": "inapplicable",
      "ruleId": "cae760",
      "ruleName": "`iframe` element has accessible name",
      "rulePage": "https://act-rules.github.io/rules/cae760",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0d9ecd85172bbc610f6b3f6044ecc7abcf0dd4a9",
      "url": "https://act-rules.github.io/testcases/4b1c6c/0d9ecd85172bbc610f6b3f6044ecc7abcf0dd4a9.html",
      "relativePath": "testcases/4b1c6c/0d9ecd85172bbc610f6b3f6044ecc7abcf0dd4a9.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "42ecf2e3877c617b7cca23e66128667097b10615",
      "url": "https://act-rules.github.io/testcases/4b1c6c/42ecf2e3877c617b7cca23e66128667097b10615.html",
      "relativePath": "testcases/4b1c6c/42ecf2e3877c617b7cca23e66128667097b10615.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "50e2f7fe6d14508b23d12fc459a17e1727a5ee35",
      "url": "https://act-rules.github.io/testcases/4b1c6c/50e2f7fe6d14508b23d12fc459a17e1727a5ee35.html",
      "relativePath": "testcases/4b1c6c/50e2f7fe6d14508b23d12fc459a17e1727a5ee35.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e05deb9fec0f9d9248cdd82f48a93444b5b01a6b",
      "url": "https://act-rules.github.io/testcases/4b1c6c/e05deb9fec0f9d9248cdd82f48a93444b5b01a6b.html",
      "relativePath": "testcases/4b1c6c/e05deb9fec0f9d9248cdd82f48a93444b5b01a6b.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9b72ae9993b01aff166269587ddab682eda83968",
      "url": "https://act-rules.github.io/testcases/4b1c6c/9b72ae9993b01aff166269587ddab682eda83968.html",
      "relativePath": "testcases/4b1c6c/9b72ae9993b01aff166269587ddab682eda83968.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4087ebdab0b5a49bb6ab4dcdc797f9883fab45cf",
      "url": "https://act-rules.github.io/testcases/4b1c6c/4087ebdab0b5a49bb6ab4dcdc797f9883fab45cf.html",
      "relativePath": "testcases/4b1c6c/4087ebdab0b5a49bb6ab4dcdc797f9883fab45cf.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8d8853da7cc4c5edba3c7c01ca2902b6d63bb0e5",
      "url": "https://act-rules.github.io/testcases/4b1c6c/8d8853da7cc4c5edba3c7c01ca2902b6d63bb0e5.html",
      "relativePath": "testcases/4b1c6c/8d8853da7cc4c5edba3c7c01ca2902b6d63bb0e5.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "903659b4e50a42b17c6e31e10956fb500ab226a5",
      "url": "https://act-rules.github.io/testcases/4b1c6c/903659b4e50a42b17c6e31e10956fb500ab226a5.html",
      "relativePath": "testcases/4b1c6c/903659b4e50a42b17c6e31e10956fb500ab226a5.html",
      "expected": "passed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f219492e558617a2f90e9175241d0db999b409d6",
      "url": "https://act-rules.github.io/testcases/4b1c6c/f219492e558617a2f90e9175241d0db999b409d6.html",
      "relativePath": "testcases/4b1c6c/f219492e558617a2f90e9175241d0db999b409d6.html",
      "expected": "failed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "85f3a632257d9636048a9cdc7b743b3f197b045f",
      "url": "https://act-rules.github.io/testcases/4b1c6c/85f3a632257d9636048a9cdc7b743b3f197b045f.html",
      "relativePath": "testcases/4b1c6c/85f3a632257d9636048a9cdc7b743b3f197b045f.html",
      "expected": "failed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "43cbfc7d60b68f61f97603db6e9235a8ffa1a57a",
      "url": "https://act-rules.github.io/testcases/4b1c6c/43cbfc7d60b68f61f97603db6e9235a8ffa1a57a.html",
      "relativePath": "testcases/4b1c6c/43cbfc7d60b68f61f97603db6e9235a8ffa1a57a.html",
      "expected": "failed",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9e367d5040f04daf2a290dacd08ae064b0660a09",
      "url": "https://act-rules.github.io/testcases/4b1c6c/9e367d5040f04daf2a290dacd08ae064b0660a09.html",
      "relativePath": "testcases/4b1c6c/9e367d5040f04daf2a290dacd08ae064b0660a09.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0555a0ff603c5fd088bf86faf1fa8f1168ae4959",
      "url": "https://act-rules.github.io/testcases/4b1c6c/0555a0ff603c5fd088bf86faf1fa8f1168ae4959.html",
      "relativePath": "testcases/4b1c6c/0555a0ff603c5fd088bf86faf1fa8f1168ae4959.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2567d269e621304c3387272a1570e3c3cba63e50",
      "url": "https://act-rules.github.io/testcases/4b1c6c/2567d269e621304c3387272a1570e3c3cba63e50.html",
      "relativePath": "testcases/4b1c6c/2567d269e621304c3387272a1570e3c3cba63e50.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a66d585c8509f682c134c01ab5a289d441dee083",
      "url": "https://act-rules.github.io/testcases/4b1c6c/a66d585c8509f682c134c01ab5a289d441dee083.html",
      "relativePath": "testcases/4b1c6c/a66d585c8509f682c134c01ab5a289d441dee083.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4a84cbdab2950ef543b179b7e9242cfef2342877",
      "url": "https://act-rules.github.io/testcases/4b1c6c/4a84cbdab2950ef543b179b7e9242cfef2342877.html",
      "relativePath": "testcases/4b1c6c/4a84cbdab2950ef543b179b7e9242cfef2342877.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a3d6f56f0c388cad7192425a824e5dd9a87edb00",
      "url": "https://act-rules.github.io/testcases/4b1c6c/a3d6f56f0c388cad7192425a824e5dd9a87edb00.html",
      "relativePath": "testcases/4b1c6c/a3d6f56f0c388cad7192425a824e5dd9a87edb00.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b20b4c1fbf9161bf474d6425bf9296940db4310e",
      "url": "https://act-rules.github.io/testcases/4b1c6c/b20b4c1fbf9161bf474d6425bf9296940db4310e.html",
      "relativePath": "testcases/4b1c6c/b20b4c1fbf9161bf474d6425bf9296940db4310e.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "26f7c515afc63a486eaeebb6fe109f545892cd32",
      "url": "https://act-rules.github.io/testcases/4b1c6c/26f7c515afc63a486eaeebb6fe109f545892cd32.html",
      "relativePath": "testcases/4b1c6c/26f7c515afc63a486eaeebb6fe109f545892cd32.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8d845213abc0081ac5685e72adb78663539b4009",
      "url": "https://act-rules.github.io/testcases/4b1c6c/8d845213abc0081ac5685e72adb78663539b4009.html",
      "relativePath": "testcases/4b1c6c/8d845213abc0081ac5685e72adb78663539b4009.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b9a511b23e547d7a6e276b95ff42992dc31f23bb",
      "url": "https://act-rules.github.io/testcases/4b1c6c/b9a511b23e547d7a6e276b95ff42992dc31f23bb.html",
      "relativePath": "testcases/4b1c6c/b9a511b23e547d7a6e276b95ff42992dc31f23bb.html",
      "expected": "inapplicable",
      "ruleId": "4b1c6c",
      "ruleName": "`iframe` elements with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/4b1c6c",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "583a0e65499c4629df374c06b56d33e89638cd4f",
      "url": "https://act-rules.github.io/testcases/23a2a8/583a0e65499c4629df374c06b56d33e89638cd4f.html",
      "relativePath": "testcases/23a2a8/583a0e65499c4629df374c06b56d33e89638cd4f.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "66b7482c8922e81b5979fd5e3ab2bfe7b24adb5a",
      "url": "https://act-rules.github.io/testcases/23a2a8/66b7482c8922e81b5979fd5e3ab2bfe7b24adb5a.html",
      "relativePath": "testcases/23a2a8/66b7482c8922e81b5979fd5e3ab2bfe7b24adb5a.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "dd51da9c880d14f83531e0d70e833fe842820937",
      "url": "https://act-rules.github.io/testcases/23a2a8/dd51da9c880d14f83531e0d70e833fe842820937.html",
      "relativePath": "testcases/23a2a8/dd51da9c880d14f83531e0d70e833fe842820937.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7a6f79629edc46c6faf4f24e1362562df2978de8",
      "url": "https://act-rules.github.io/testcases/23a2a8/7a6f79629edc46c6faf4f24e1362562df2978de8.html",
      "relativePath": "testcases/23a2a8/7a6f79629edc46c6faf4f24e1362562df2978de8.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6a3f75c730ba1b1cedd8295ffd0e60ee5ea237f5",
      "url": "https://act-rules.github.io/testcases/23a2a8/6a3f75c730ba1b1cedd8295ffd0e60ee5ea237f5.html",
      "relativePath": "testcases/23a2a8/6a3f75c730ba1b1cedd8295ffd0e60ee5ea237f5.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "400fab95efbe39d9717e57be6d6b342d5c2b59b7",
      "url": "https://act-rules.github.io/testcases/23a2a8/400fab95efbe39d9717e57be6d6b342d5c2b59b7.html",
      "relativePath": "testcases/23a2a8/400fab95efbe39d9717e57be6d6b342d5c2b59b7.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c89a01969ed6b7b1e25496881da1446989194711",
      "url": "https://act-rules.github.io/testcases/23a2a8/c89a01969ed6b7b1e25496881da1446989194711.html",
      "relativePath": "testcases/23a2a8/c89a01969ed6b7b1e25496881da1446989194711.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b7bc54b68b5f861c84def83b2cc8cde510072cfb",
      "url": "https://act-rules.github.io/testcases/23a2a8/b7bc54b68b5f861c84def83b2cc8cde510072cfb.html",
      "relativePath": "testcases/23a2a8/b7bc54b68b5f861c84def83b2cc8cde510072cfb.html",
      "expected": "passed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "17be28658e16098158295ff4525a96b7d555b216",
      "url": "https://act-rules.github.io/testcases/23a2a8/17be28658e16098158295ff4525a96b7d555b216.html",
      "relativePath": "testcases/23a2a8/17be28658e16098158295ff4525a96b7d555b216.html",
      "expected": "failed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5ddf53a31b74138120bd60ded479061b0c155c17",
      "url": "https://act-rules.github.io/testcases/23a2a8/5ddf53a31b74138120bd60ded479061b0c155c17.html",
      "relativePath": "testcases/23a2a8/5ddf53a31b74138120bd60ded479061b0c155c17.html",
      "expected": "failed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6450b8d331930deb30196ae89b6ebb14a30dfe63",
      "url": "https://act-rules.github.io/testcases/23a2a8/6450b8d331930deb30196ae89b6ebb14a30dfe63.html",
      "relativePath": "testcases/23a2a8/6450b8d331930deb30196ae89b6ebb14a30dfe63.html",
      "expected": "failed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "24bcdf687a023b56ac1bc8e2043f9e90bf6f9494",
      "url": "https://act-rules.github.io/testcases/23a2a8/24bcdf687a023b56ac1bc8e2043f9e90bf6f9494.html",
      "relativePath": "testcases/23a2a8/24bcdf687a023b56ac1bc8e2043f9e90bf6f9494.html",
      "expected": "failed",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b822562bd5065f116abc300050bbd4834f9aae90",
      "url": "https://act-rules.github.io/testcases/23a2a8/b822562bd5065f116abc300050bbd4834f9aae90.html",
      "relativePath": "testcases/23a2a8/b822562bd5065f116abc300050bbd4834f9aae90.html",
      "expected": "inapplicable",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e3f9ec2732be62b32a1fe4f1923eba0467e0886a",
      "url": "https://act-rules.github.io/testcases/23a2a8/e3f9ec2732be62b32a1fe4f1923eba0467e0886a.html",
      "relativePath": "testcases/23a2a8/e3f9ec2732be62b32a1fe4f1923eba0467e0886a.html",
      "expected": "inapplicable",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7140dd08775399add60ae17cf37caa16442bd12b",
      "url": "https://act-rules.github.io/testcases/23a2a8/7140dd08775399add60ae17cf37caa16442bd12b.html",
      "relativePath": "testcases/23a2a8/7140dd08775399add60ae17cf37caa16442bd12b.html",
      "expected": "inapplicable",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "96d6ac9962b228649c1d3e21585e1248a74f1129",
      "url": "https://act-rules.github.io/testcases/23a2a8/96d6ac9962b228649c1d3e21585e1248a74f1129.html",
      "relativePath": "testcases/23a2a8/96d6ac9962b228649c1d3e21585e1248a74f1129.html",
      "expected": "inapplicable",
      "ruleId": "23a2a8",
      "ruleName": "Image has accessible name",
      "rulePage": "https://act-rules.github.io/rules/23a2a8",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2400cdac870a6244889b8fccea54425320e8749f",
      "url": "https://act-rules.github.io/testcases/59796f/2400cdac870a6244889b8fccea54425320e8749f.html",
      "relativePath": "testcases/59796f/2400cdac870a6244889b8fccea54425320e8749f.html",
      "expected": "passed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "10f5d07893139a4850d92800c6fec26424253310",
      "url": "https://act-rules.github.io/testcases/59796f/10f5d07893139a4850d92800c6fec26424253310.html",
      "relativePath": "testcases/59796f/10f5d07893139a4850d92800c6fec26424253310.html",
      "expected": "passed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "48e5a8f7cb212b2f7605487e139f262545caca89",
      "url": "https://act-rules.github.io/testcases/59796f/48e5a8f7cb212b2f7605487e139f262545caca89.html",
      "relativePath": "testcases/59796f/48e5a8f7cb212b2f7605487e139f262545caca89.html",
      "expected": "passed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "006dd89a7eeebee98ec012a2666a03844e64b01a",
      "url": "https://act-rules.github.io/testcases/59796f/006dd89a7eeebee98ec012a2666a03844e64b01a.html",
      "relativePath": "testcases/59796f/006dd89a7eeebee98ec012a2666a03844e64b01a.html",
      "expected": "passed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4d797a9fddf365ae209130e381de006becda625e",
      "url": "https://act-rules.github.io/testcases/59796f/4d797a9fddf365ae209130e381de006becda625e.html",
      "relativePath": "testcases/59796f/4d797a9fddf365ae209130e381de006becda625e.html",
      "expected": "passed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d3344a3aaf532b7ec1347568509f96cadd8d873d",
      "url": "https://act-rules.github.io/testcases/59796f/d3344a3aaf532b7ec1347568509f96cadd8d873d.html",
      "relativePath": "testcases/59796f/d3344a3aaf532b7ec1347568509f96cadd8d873d.html",
      "expected": "passed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b4cf33cf32e6fbe05149de31fe2ab3480f7f2319",
      "url": "https://act-rules.github.io/testcases/59796f/b4cf33cf32e6fbe05149de31fe2ab3480f7f2319.html",
      "relativePath": "testcases/59796f/b4cf33cf32e6fbe05149de31fe2ab3480f7f2319.html",
      "expected": "failed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "366185c2831d044c6a9036b1cf76eb13c81d2816",
      "url": "https://act-rules.github.io/testcases/59796f/366185c2831d044c6a9036b1cf76eb13c81d2816.html",
      "relativePath": "testcases/59796f/366185c2831d044c6a9036b1cf76eb13c81d2816.html",
      "expected": "failed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ba6e135ea5b6b57b49e024d3bbb5fcfa57a54fc5",
      "url": "https://act-rules.github.io/testcases/59796f/ba6e135ea5b6b57b49e024d3bbb5fcfa57a54fc5.html",
      "relativePath": "testcases/59796f/ba6e135ea5b6b57b49e024d3bbb5fcfa57a54fc5.html",
      "expected": "failed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d40c0add6e960291598091cc969d69efc29038a1",
      "url": "https://act-rules.github.io/testcases/59796f/d40c0add6e960291598091cc969d69efc29038a1.html",
      "relativePath": "testcases/59796f/d40c0add6e960291598091cc969d69efc29038a1.html",
      "expected": "failed",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d5a13c0bbfbbec0bc88d8494136fc631f0ce2eb7",
      "url": "https://act-rules.github.io/testcases/59796f/d5a13c0bbfbbec0bc88d8494136fc631f0ce2eb7.html",
      "relativePath": "testcases/59796f/d5a13c0bbfbbec0bc88d8494136fc631f0ce2eb7.html",
      "expected": "inapplicable",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7c635bd92a10272be1d00dedecec994ff5e55756",
      "url": "https://act-rules.github.io/testcases/59796f/7c635bd92a10272be1d00dedecec994ff5e55756.html",
      "relativePath": "testcases/59796f/7c635bd92a10272be1d00dedecec994ff5e55756.html",
      "expected": "inapplicable",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d9637a5b12d6333e136309db4dbbdde3cbdb8071",
      "url": "https://act-rules.github.io/testcases/59796f/d9637a5b12d6333e136309db4dbbdde3cbdb8071.html",
      "relativePath": "testcases/59796f/d9637a5b12d6333e136309db4dbbdde3cbdb8071.html",
      "expected": "inapplicable",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c0efc676b15593b863c81607ae43ad9175969736",
      "url": "https://act-rules.github.io/testcases/59796f/c0efc676b15593b863c81607ae43ad9175969736.html",
      "relativePath": "testcases/59796f/c0efc676b15593b863c81607ae43ad9175969736.html",
      "expected": "inapplicable",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "79adbfb491069d70cc39446655c1815c7b765d6a",
      "url": "https://act-rules.github.io/testcases/59796f/79adbfb491069d70cc39446655c1815c7b765d6a.html",
      "relativePath": "testcases/59796f/79adbfb491069d70cc39446655c1815c7b765d6a.html",
      "expected": "inapplicable",
      "ruleId": "59796f",
      "ruleName": "Image button has accessible name",
      "rulePage": "https://act-rules.github.io/rules/59796f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cfff293d583d51b90968a15ff490738f20b2f3e3",
      "url": "https://act-rules.github.io/testcases/9eb3f6/cfff293d583d51b90968a15ff490738f20b2f3e3.html",
      "relativePath": "testcases/9eb3f6/cfff293d583d51b90968a15ff490738f20b2f3e3.html",
      "expected": "passed",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b59a4f8e74efb991834ccca17073145e005dd4df",
      "url": "https://act-rules.github.io/testcases/9eb3f6/b59a4f8e74efb991834ccca17073145e005dd4df.html",
      "relativePath": "testcases/9eb3f6/b59a4f8e74efb991834ccca17073145e005dd4df.html",
      "expected": "passed",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a95117f337e44cf426c3c5c4660b44ac8a29e6be",
      "url": "https://act-rules.github.io/testcases/9eb3f6/a95117f337e44cf426c3c5c4660b44ac8a29e6be.html",
      "relativePath": "testcases/9eb3f6/a95117f337e44cf426c3c5c4660b44ac8a29e6be.html",
      "expected": "failed",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ca6974e4e54a97ad7229a0f71755676cf2181a91",
      "url": "https://act-rules.github.io/testcases/9eb3f6/ca6974e4e54a97ad7229a0f71755676cf2181a91.html",
      "relativePath": "testcases/9eb3f6/ca6974e4e54a97ad7229a0f71755676cf2181a91.html",
      "expected": "failed",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2c2d8b081bc8908ee21605c2aa420a9e90a39307",
      "url": "https://act-rules.github.io/testcases/9eb3f6/2c2d8b081bc8908ee21605c2aa420a9e90a39307.html",
      "relativePath": "testcases/9eb3f6/2c2d8b081bc8908ee21605c2aa420a9e90a39307.html",
      "expected": "inapplicable",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f9b9dad23c0ad60bef126ac4bba8a01b17a2d42f",
      "url": "https://act-rules.github.io/testcases/9eb3f6/f9b9dad23c0ad60bef126ac4bba8a01b17a2d42f.html",
      "relativePath": "testcases/9eb3f6/f9b9dad23c0ad60bef126ac4bba8a01b17a2d42f.html",
      "expected": "inapplicable",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6e2edec42ae47953bf4281cbd9dc86e63107d36e",
      "url": "https://act-rules.github.io/testcases/9eb3f6/6e2edec42ae47953bf4281cbd9dc86e63107d36e.html",
      "relativePath": "testcases/9eb3f6/6e2edec42ae47953bf4281cbd9dc86e63107d36e.html",
      "expected": "inapplicable",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f1b3be194f69c6f222f53cfd46cad299d94c8445",
      "url": "https://act-rules.github.io/testcases/9eb3f6/f1b3be194f69c6f222f53cfd46cad299d94c8445.html",
      "relativePath": "testcases/9eb3f6/f1b3be194f69c6f222f53cfd46cad299d94c8445.html",
      "expected": "inapplicable",
      "ruleId": "9eb3f6",
      "ruleName": "Image filename is accessible name for image",
      "rulePage": "https://act-rules.github.io/rules/9eb3f6",
      "ruleAccessibilityRequirements": {
        "wcag20:1.1.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d1f07599abd58fc65dfab94ae751d6563f412cae",
      "url": "https://act-rules.github.io/testcases/c487ae/d1f07599abd58fc65dfab94ae751d6563f412cae.html",
      "relativePath": "testcases/c487ae/d1f07599abd58fc65dfab94ae751d6563f412cae.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4a672d7fc7cd9d21cbd8ec11fd203af8fcb21c89",
      "url": "https://act-rules.github.io/testcases/c487ae/4a672d7fc7cd9d21cbd8ec11fd203af8fcb21c89.html",
      "relativePath": "testcases/c487ae/4a672d7fc7cd9d21cbd8ec11fd203af8fcb21c89.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8a9d4a82fefa279e535b75a6320ee9f331b45aa6",
      "url": "https://act-rules.github.io/testcases/c487ae/8a9d4a82fefa279e535b75a6320ee9f331b45aa6.html",
      "relativePath": "testcases/c487ae/8a9d4a82fefa279e535b75a6320ee9f331b45aa6.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "937483d2bb5d92b57976697ac60b13a9a8c67101",
      "url": "https://act-rules.github.io/testcases/c487ae/937483d2bb5d92b57976697ac60b13a9a8c67101.html",
      "relativePath": "testcases/c487ae/937483d2bb5d92b57976697ac60b13a9a8c67101.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a18481a2e95e9a0faa7be86bb0ab6cf435bcf49b",
      "url": "https://act-rules.github.io/testcases/c487ae/a18481a2e95e9a0faa7be86bb0ab6cf435bcf49b.html",
      "relativePath": "testcases/c487ae/a18481a2e95e9a0faa7be86bb0ab6cf435bcf49b.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "479488a7c98e91cfb6e77bb911eb46e521b053d4",
      "url": "https://act-rules.github.io/testcases/c487ae/479488a7c98e91cfb6e77bb911eb46e521b053d4.html",
      "relativePath": "testcases/c487ae/479488a7c98e91cfb6e77bb911eb46e521b053d4.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "07c27fb40b99478508b3fac2274f3a30b154a57d",
      "url": "https://act-rules.github.io/testcases/c487ae/07c27fb40b99478508b3fac2274f3a30b154a57d.html",
      "relativePath": "testcases/c487ae/07c27fb40b99478508b3fac2274f3a30b154a57d.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1f2d5930bd9e3944e0e1c8325c254b8121db5fc6",
      "url": "https://act-rules.github.io/testcases/c487ae/1f2d5930bd9e3944e0e1c8325c254b8121db5fc6.html",
      "relativePath": "testcases/c487ae/1f2d5930bd9e3944e0e1c8325c254b8121db5fc6.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "48f3f77aab68be7ed2ebef73206efedb4c3c44b6",
      "url": "https://act-rules.github.io/testcases/c487ae/48f3f77aab68be7ed2ebef73206efedb4c3c44b6.html",
      "relativePath": "testcases/c487ae/48f3f77aab68be7ed2ebef73206efedb4c3c44b6.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d94a2fb98a09f750a0ec50ac1acdd4c4687a93f9",
      "url": "https://act-rules.github.io/testcases/c487ae/d94a2fb98a09f750a0ec50ac1acdd4c4687a93f9.html",
      "relativePath": "testcases/c487ae/d94a2fb98a09f750a0ec50ac1acdd4c4687a93f9.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8bb73f82482912a3c75386069b0e24e64b9f0602",
      "url": "https://act-rules.github.io/testcases/c487ae/8bb73f82482912a3c75386069b0e24e64b9f0602.html",
      "relativePath": "testcases/c487ae/8bb73f82482912a3c75386069b0e24e64b9f0602.html",
      "expected": "passed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b31a0c17f9acd123c31a3cd32f6aa2060e244e10",
      "url": "https://act-rules.github.io/testcases/c487ae/b31a0c17f9acd123c31a3cd32f6aa2060e244e10.html",
      "relativePath": "testcases/c487ae/b31a0c17f9acd123c31a3cd32f6aa2060e244e10.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7de512bf63013670682b30c93ed4dd2d520869cc",
      "url": "https://act-rules.github.io/testcases/c487ae/7de512bf63013670682b30c93ed4dd2d520869cc.html",
      "relativePath": "testcases/c487ae/7de512bf63013670682b30c93ed4dd2d520869cc.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0434a8c558225c9549ffc707223e648a87267483",
      "url": "https://act-rules.github.io/testcases/c487ae/0434a8c558225c9549ffc707223e648a87267483.html",
      "relativePath": "testcases/c487ae/0434a8c558225c9549ffc707223e648a87267483.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "aa897f5c67f69e2d65d881f966a75424adad7255",
      "url": "https://act-rules.github.io/testcases/c487ae/aa897f5c67f69e2d65d881f966a75424adad7255.html",
      "relativePath": "testcases/c487ae/aa897f5c67f69e2d65d881f966a75424adad7255.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a21618f377da99e24c27b5c1b882ec8549cb62cf",
      "url": "https://act-rules.github.io/testcases/c487ae/a21618f377da99e24c27b5c1b882ec8549cb62cf.html",
      "relativePath": "testcases/c487ae/a21618f377da99e24c27b5c1b882ec8549cb62cf.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "28eab2e7e33d679645bf798323064f116a833d9d",
      "url": "https://act-rules.github.io/testcases/c487ae/28eab2e7e33d679645bf798323064f116a833d9d.html",
      "relativePath": "testcases/c487ae/28eab2e7e33d679645bf798323064f116a833d9d.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2e95bd08250dc2132ccc18b08815f78ffa908547",
      "url": "https://act-rules.github.io/testcases/c487ae/2e95bd08250dc2132ccc18b08815f78ffa908547.html",
      "relativePath": "testcases/c487ae/2e95bd08250dc2132ccc18b08815f78ffa908547.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9ba871f146c5ec702a66ea812ffa8b776030c363",
      "url": "https://act-rules.github.io/testcases/c487ae/9ba871f146c5ec702a66ea812ffa8b776030c363.html",
      "relativePath": "testcases/c487ae/9ba871f146c5ec702a66ea812ffa8b776030c363.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "480f191fa81ea7e71d6f6e441c907c6dd38195a1",
      "url": "https://act-rules.github.io/testcases/c487ae/480f191fa81ea7e71d6f6e441c907c6dd38195a1.html",
      "relativePath": "testcases/c487ae/480f191fa81ea7e71d6f6e441c907c6dd38195a1.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "909670314cba06b98ca6d9f764ebc6cf11055da4",
      "url": "https://act-rules.github.io/testcases/c487ae/909670314cba06b98ca6d9f764ebc6cf11055da4.html",
      "relativePath": "testcases/c487ae/909670314cba06b98ca6d9f764ebc6cf11055da4.html",
      "expected": "failed",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b6158ffdfa9691d1d0d66020c3b68d99ed107f5b",
      "url": "https://act-rules.github.io/testcases/c487ae/b6158ffdfa9691d1d0d66020c3b68d99ed107f5b.html",
      "relativePath": "testcases/c487ae/b6158ffdfa9691d1d0d66020c3b68d99ed107f5b.html",
      "expected": "inapplicable",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "efbc1e274198cf52f40ce2c3f44a182a5b90aa52",
      "url": "https://act-rules.github.io/testcases/c487ae/efbc1e274198cf52f40ce2c3f44a182a5b90aa52.html",
      "relativePath": "testcases/c487ae/efbc1e274198cf52f40ce2c3f44a182a5b90aa52.html",
      "expected": "inapplicable",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "73382a76a584102a6a3bc0f1886d280eb8b78ce2",
      "url": "https://act-rules.github.io/testcases/c487ae/73382a76a584102a6a3bc0f1886d280eb8b78ce2.html",
      "relativePath": "testcases/c487ae/73382a76a584102a6a3bc0f1886d280eb8b78ce2.html",
      "expected": "inapplicable",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e236e380884824c869a8164f8c6ca055dc42a6eb",
      "url": "https://act-rules.github.io/testcases/c487ae/e236e380884824c869a8164f8c6ca055dc42a6eb.html",
      "relativePath": "testcases/c487ae/e236e380884824c869a8164f8c6ca055dc42a6eb.html",
      "expected": "inapplicable",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9d7c8586372ca2ec9551882ef42df94e3925388c",
      "url": "https://act-rules.github.io/testcases/c487ae/9d7c8586372ca2ec9551882ef42df94e3925388c.html",
      "relativePath": "testcases/c487ae/9d7c8586372ca2ec9551882ef42df94e3925388c.html",
      "expected": "inapplicable",
      "ruleId": "c487ae",
      "ruleName": "Link has accessible name",
      "rulePage": "https://act-rules.github.io/rules/c487ae",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6bcc6fc287d6294d5a2562c236c7a065f3bf6d70",
      "url": "https://act-rules.github.io/testcases/b20e66/6bcc6fc287d6294d5a2562c236c7a065f3bf6d70.html",
      "relativePath": "testcases/b20e66/6bcc6fc287d6294d5a2562c236c7a065f3bf6d70.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "80d8153e1068dd38c842bb46d53102f964412b18",
      "url": "https://act-rules.github.io/testcases/b20e66/80d8153e1068dd38c842bb46d53102f964412b18.html",
      "relativePath": "testcases/b20e66/80d8153e1068dd38c842bb46d53102f964412b18.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "31cfe45f40320a5a52d61c3d7fddead260b9fe90",
      "url": "https://act-rules.github.io/testcases/b20e66/31cfe45f40320a5a52d61c3d7fddead260b9fe90.html",
      "relativePath": "testcases/b20e66/31cfe45f40320a5a52d61c3d7fddead260b9fe90.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d8d71f30beabfb3b15d0105ccd3276dadd2e34d7",
      "url": "https://act-rules.github.io/testcases/b20e66/d8d71f30beabfb3b15d0105ccd3276dadd2e34d7.html",
      "relativePath": "testcases/b20e66/d8d71f30beabfb3b15d0105ccd3276dadd2e34d7.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "23c2bafa0f958b3ddbeffc7637c2d0a77930e243",
      "url": "https://act-rules.github.io/testcases/b20e66/23c2bafa0f958b3ddbeffc7637c2d0a77930e243.html",
      "relativePath": "testcases/b20e66/23c2bafa0f958b3ddbeffc7637c2d0a77930e243.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7cc351939c1442a3d3a0dd1f8fe3724fa7d47861",
      "url": "https://act-rules.github.io/testcases/b20e66/7cc351939c1442a3d3a0dd1f8fe3724fa7d47861.html",
      "relativePath": "testcases/b20e66/7cc351939c1442a3d3a0dd1f8fe3724fa7d47861.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8f3d63dd0bdf7587e80ac323023cf7770123d60b",
      "url": "https://act-rules.github.io/testcases/b20e66/8f3d63dd0bdf7587e80ac323023cf7770123d60b.html",
      "relativePath": "testcases/b20e66/8f3d63dd0bdf7587e80ac323023cf7770123d60b.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "40789454d907bec70811db0c4d172c3eca79a324",
      "url": "https://act-rules.github.io/testcases/b20e66/40789454d907bec70811db0c4d172c3eca79a324.html",
      "relativePath": "testcases/b20e66/40789454d907bec70811db0c4d172c3eca79a324.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3957955737bb33a637f77ca7a689d1b2165a357e",
      "url": "https://act-rules.github.io/testcases/b20e66/3957955737bb33a637f77ca7a689d1b2165a357e.html",
      "relativePath": "testcases/b20e66/3957955737bb33a637f77ca7a689d1b2165a357e.html",
      "expected": "passed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d674c36ef36b5fe2c5d017b9282f0bd9d59696b4",
      "url": "https://act-rules.github.io/testcases/b20e66/d674c36ef36b5fe2c5d017b9282f0bd9d59696b4.html",
      "relativePath": "testcases/b20e66/d674c36ef36b5fe2c5d017b9282f0bd9d59696b4.html",
      "expected": "failed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1e8797e346ff328dcbfda6387ad0e2c94925ed78",
      "url": "https://act-rules.github.io/testcases/b20e66/1e8797e346ff328dcbfda6387ad0e2c94925ed78.html",
      "relativePath": "testcases/b20e66/1e8797e346ff328dcbfda6387ad0e2c94925ed78.html",
      "expected": "failed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4afa0dd83102025acd1e416a6dc5383f1cfc9323",
      "url": "https://act-rules.github.io/testcases/b20e66/4afa0dd83102025acd1e416a6dc5383f1cfc9323.html",
      "relativePath": "testcases/b20e66/4afa0dd83102025acd1e416a6dc5383f1cfc9323.html",
      "expected": "failed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d2fb3a2fd2ba4a499da1dd21b687b1152b10688d",
      "url": "https://act-rules.github.io/testcases/b20e66/d2fb3a2fd2ba4a499da1dd21b687b1152b10688d.html",
      "relativePath": "testcases/b20e66/d2fb3a2fd2ba4a499da1dd21b687b1152b10688d.html",
      "expected": "failed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8aebb19e25c95d391764b1354583fcef8c8fb12e",
      "url": "https://act-rules.github.io/testcases/b20e66/8aebb19e25c95d391764b1354583fcef8c8fb12e.html",
      "relativePath": "testcases/b20e66/8aebb19e25c95d391764b1354583fcef8c8fb12e.html",
      "expected": "failed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bee12d37063d8a221ec5f060d3defb0fb1d5acde",
      "url": "https://act-rules.github.io/testcases/b20e66/bee12d37063d8a221ec5f060d3defb0fb1d5acde.html",
      "relativePath": "testcases/b20e66/bee12d37063d8a221ec5f060d3defb0fb1d5acde.html",
      "expected": "failed",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9f262eab98d359c36dfa87e3940fc641bca0acd1",
      "url": "https://act-rules.github.io/testcases/b20e66/9f262eab98d359c36dfa87e3940fc641bca0acd1.html",
      "relativePath": "testcases/b20e66/9f262eab98d359c36dfa87e3940fc641bca0acd1.html",
      "expected": "inapplicable",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "daaa9ed246c9158cb81cb404bf573edd519311cd",
      "url": "https://act-rules.github.io/testcases/b20e66/daaa9ed246c9158cb81cb404bf573edd519311cd.html",
      "relativePath": "testcases/b20e66/daaa9ed246c9158cb81cb404bf573edd519311cd.html",
      "expected": "inapplicable",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5e36cafed7c45898b0c576eca03b195d05518964",
      "url": "https://act-rules.github.io/testcases/b20e66/5e36cafed7c45898b0c576eca03b195d05518964.html",
      "relativePath": "testcases/b20e66/5e36cafed7c45898b0c576eca03b195d05518964.html",
      "expected": "inapplicable",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7f72b0d0296a28a282502899f325830ca8487833",
      "url": "https://act-rules.github.io/testcases/b20e66/7f72b0d0296a28a282502899f325830ca8487833.html",
      "relativePath": "testcases/b20e66/7f72b0d0296a28a282502899f325830ca8487833.html",
      "expected": "inapplicable",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bcf462011b40e3472e9c5c1804a407c5895331dd",
      "url": "https://act-rules.github.io/testcases/b20e66/bcf462011b40e3472e9c5c1804a407c5895331dd.html",
      "relativePath": "testcases/b20e66/bcf462011b40e3472e9c5c1804a407c5895331dd.html",
      "expected": "inapplicable",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "dd2c660e8b2c4d5af852805708703691e1887b30",
      "url": "https://act-rules.github.io/testcases/b20e66/dd2c660e8b2c4d5af852805708703691e1887b30.html",
      "relativePath": "testcases/b20e66/dd2c660e8b2c4d5af852805708703691e1887b30.html",
      "expected": "inapplicable",
      "ruleId": "b20e66",
      "ruleName": "Links with identical accessible names have equivalent purpose",
      "rulePage": "https://act-rules.github.io/rules/b20e66",
      "ruleAccessibilityRequirements": {
        "wcag20:2.4.9": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a53b440be238663a432475e253e037e4d039b78c",
      "url": "https://act-rules.github.io/testcases/bc659a/a53b440be238663a432475e253e037e4d039b78c.html",
      "relativePath": "testcases/bc659a/a53b440be238663a432475e253e037e4d039b78c.html",
      "expected": "passed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "76e3d03342288c1e74ab08b48045c7d82bb3569e",
      "url": "https://act-rules.github.io/testcases/bc659a/76e3d03342288c1e74ab08b48045c7d82bb3569e.html",
      "relativePath": "testcases/bc659a/76e3d03342288c1e74ab08b48045c7d82bb3569e.html",
      "expected": "passed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e98093351918b01ca944ddc1e6c708a9e7a3970b",
      "url": "https://act-rules.github.io/testcases/bc659a/e98093351918b01ca944ddc1e6c708a9e7a3970b.html",
      "relativePath": "testcases/bc659a/e98093351918b01ca944ddc1e6c708a9e7a3970b.html",
      "expected": "passed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "95abea39831d72f642d5edecf787b35b4e807268",
      "url": "https://act-rules.github.io/testcases/bc659a/95abea39831d72f642d5edecf787b35b4e807268.html",
      "relativePath": "testcases/bc659a/95abea39831d72f642d5edecf787b35b4e807268.html",
      "expected": "failed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5c0ae11c622474ee4196f801aaabae461c2707df",
      "url": "https://act-rules.github.io/testcases/bc659a/5c0ae11c622474ee4196f801aaabae461c2707df.html",
      "relativePath": "testcases/bc659a/5c0ae11c622474ee4196f801aaabae461c2707df.html",
      "expected": "failed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f620fc1551e88a3860d7575c3c3b20cb2cf915ab",
      "url": "https://act-rules.github.io/testcases/bc659a/f620fc1551e88a3860d7575c3c3b20cb2cf915ab.html",
      "relativePath": "testcases/bc659a/f620fc1551e88a3860d7575c3c3b20cb2cf915ab.html",
      "expected": "failed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "84543a9052b4fb153a5c8107adde67ad778d3c52",
      "url": "https://act-rules.github.io/testcases/bc659a/84543a9052b4fb153a5c8107adde67ad778d3c52.html",
      "relativePath": "testcases/bc659a/84543a9052b4fb153a5c8107adde67ad778d3c52.html",
      "expected": "failed",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "be3131f08c4ce24005f3ac10826ebeeea91cd450",
      "url": "https://act-rules.github.io/testcases/bc659a/be3131f08c4ce24005f3ac10826ebeeea91cd450.html",
      "relativePath": "testcases/bc659a/be3131f08c4ce24005f3ac10826ebeeea91cd450.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ff7bace2739570941b554c58c349f56b01df0a3d",
      "url": "https://act-rules.github.io/testcases/bc659a/ff7bace2739570941b554c58c349f56b01df0a3d.html",
      "relativePath": "testcases/bc659a/ff7bace2739570941b554c58c349f56b01df0a3d.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3a0b814dc8fccd2c9d3fed07a8028f4df510b900",
      "url": "https://act-rules.github.io/testcases/bc659a/3a0b814dc8fccd2c9d3fed07a8028f4df510b900.html",
      "relativePath": "testcases/bc659a/3a0b814dc8fccd2c9d3fed07a8028f4df510b900.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8452a32af26befb93aaf7ad179008d1e8c040bce",
      "url": "https://act-rules.github.io/testcases/bc659a/8452a32af26befb93aaf7ad179008d1e8c040bce.html",
      "relativePath": "testcases/bc659a/8452a32af26befb93aaf7ad179008d1e8c040bce.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0e27c5910d67c2980e5b7f2ab6ada75f465e53ed",
      "url": "https://act-rules.github.io/testcases/bc659a/0e27c5910d67c2980e5b7f2ab6ada75f465e53ed.html",
      "relativePath": "testcases/bc659a/0e27c5910d67c2980e5b7f2ab6ada75f465e53ed.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b2c55429a219e4dcca5814e6631067e606b601ad",
      "url": "https://act-rules.github.io/testcases/bc659a/b2c55429a219e4dcca5814e6631067e606b601ad.html",
      "relativePath": "testcases/bc659a/b2c55429a219e4dcca5814e6631067e606b601ad.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1b95279f1b570095ca31c857c66d0c67781a7236",
      "url": "https://act-rules.github.io/testcases/bc659a/1b95279f1b570095ca31c857c66d0c67781a7236.html",
      "relativePath": "testcases/bc659a/1b95279f1b570095ca31c857c66d0c67781a7236.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "31c53af4612af27af29a4b578974a9d823a7ace2",
      "url": "https://act-rules.github.io/testcases/bc659a/31c53af4612af27af29a4b578974a9d823a7ace2.html",
      "relativePath": "testcases/bc659a/31c53af4612af27af29a4b578974a9d823a7ace2.html",
      "expected": "inapplicable",
      "ruleId": "bc659a",
      "ruleName": "`meta` element has no refresh delay",
      "rulePage": "https://act-rules.github.io/rules/bc659a",
      "ruleAccessibilityRequirements": {
        "wcag20:2.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:2.2.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        },
        "wcag20:3.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7586e3500c241da9a4d27d5495ef8d5c58d7dce5",
      "url": "https://act-rules.github.io/testcases/b4f0c3/7586e3500c241da9a4d27d5495ef8d5c58d7dce5.html",
      "relativePath": "testcases/b4f0c3/7586e3500c241da9a4d27d5495ef8d5c58d7dce5.html",
      "expected": "passed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "04e2ffae5716c8c5cb215ccf924ae70e444409ef",
      "url": "https://act-rules.github.io/testcases/b4f0c3/04e2ffae5716c8c5cb215ccf924ae70e444409ef.html",
      "relativePath": "testcases/b4f0c3/04e2ffae5716c8c5cb215ccf924ae70e444409ef.html",
      "expected": "passed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c1364984e3d76d59d940e989901a2bf7619ad491",
      "url": "https://act-rules.github.io/testcases/b4f0c3/c1364984e3d76d59d940e989901a2bf7619ad491.html",
      "relativePath": "testcases/b4f0c3/c1364984e3d76d59d940e989901a2bf7619ad491.html",
      "expected": "passed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "45284eee86781e6bdcecc8211674449d81631e8d",
      "url": "https://act-rules.github.io/testcases/b4f0c3/45284eee86781e6bdcecc8211674449d81631e8d.html",
      "relativePath": "testcases/b4f0c3/45284eee86781e6bdcecc8211674449d81631e8d.html",
      "expected": "passed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "900e431123d594638cfffacd3930e63a17645a09",
      "url": "https://act-rules.github.io/testcases/b4f0c3/900e431123d594638cfffacd3930e63a17645a09.html",
      "relativePath": "testcases/b4f0c3/900e431123d594638cfffacd3930e63a17645a09.html",
      "expected": "failed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "38aa06d7736bdb3f82aa9ae75d05e5b4b747f440",
      "url": "https://act-rules.github.io/testcases/b4f0c3/38aa06d7736bdb3f82aa9ae75d05e5b4b747f440.html",
      "relativePath": "testcases/b4f0c3/38aa06d7736bdb3f82aa9ae75d05e5b4b747f440.html",
      "expected": "failed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "97368ebf283cb7c4b933a3989e983ef862bb0d65",
      "url": "https://act-rules.github.io/testcases/b4f0c3/97368ebf283cb7c4b933a3989e983ef862bb0d65.html",
      "relativePath": "testcases/b4f0c3/97368ebf283cb7c4b933a3989e983ef862bb0d65.html",
      "expected": "failed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d6d0c983905d0c8b59ed4ecb6cb07d801532d530",
      "url": "https://act-rules.github.io/testcases/b4f0c3/d6d0c983905d0c8b59ed4ecb6cb07d801532d530.html",
      "relativePath": "testcases/b4f0c3/d6d0c983905d0c8b59ed4ecb6cb07d801532d530.html",
      "expected": "failed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "92d0a60559f3e41f7072dcc88330a5cd8c693a0d",
      "url": "https://act-rules.github.io/testcases/b4f0c3/92d0a60559f3e41f7072dcc88330a5cd8c693a0d.html",
      "relativePath": "testcases/b4f0c3/92d0a60559f3e41f7072dcc88330a5cd8c693a0d.html",
      "expected": "failed",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b790de4e60b09fb9e7a3c03a00a82499e7474d0d",
      "url": "https://act-rules.github.io/testcases/b4f0c3/b790de4e60b09fb9e7a3c03a00a82499e7474d0d.html",
      "relativePath": "testcases/b4f0c3/b790de4e60b09fb9e7a3c03a00a82499e7474d0d.html",
      "expected": "inapplicable",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ebca0ed6d2a77a86c34b646e4ee08834b1aa67cc",
      "url": "https://act-rules.github.io/testcases/b4f0c3/ebca0ed6d2a77a86c34b646e4ee08834b1aa67cc.html",
      "relativePath": "testcases/b4f0c3/ebca0ed6d2a77a86c34b646e4ee08834b1aa67cc.html",
      "expected": "inapplicable",
      "ruleId": "b4f0c3",
      "ruleName": "meta viewport does not prevent zoom",
      "rulePage": "https://act-rules.github.io/rules/b4f0c3",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.4": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b7f8257fb0b18954f156c2aa6dfc9869560fdea3",
      "url": "https://act-rules.github.io/testcases/80f0bf/b7f8257fb0b18954f156c2aa6dfc9869560fdea3.html",
      "relativePath": "testcases/80f0bf/b7f8257fb0b18954f156c2aa6dfc9869560fdea3.html",
      "expected": "passed",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "852935758dddfd5e1f38bca3ee345e14af5f2f26",
      "url": "https://act-rules.github.io/testcases/80f0bf/852935758dddfd5e1f38bca3ee345e14af5f2f26.html",
      "relativePath": "testcases/80f0bf/852935758dddfd5e1f38bca3ee345e14af5f2f26.html",
      "expected": "passed",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5a6f2c5f9a85ad8a3fd9c989befdd30d751e7809",
      "url": "https://act-rules.github.io/testcases/80f0bf/5a6f2c5f9a85ad8a3fd9c989befdd30d751e7809.html",
      "relativePath": "testcases/80f0bf/5a6f2c5f9a85ad8a3fd9c989befdd30d751e7809.html",
      "expected": "passed",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b0f66449dde3d7e342c47ea8c3c16afb3f449964",
      "url": "https://act-rules.github.io/testcases/80f0bf/b0f66449dde3d7e342c47ea8c3c16afb3f449964.html",
      "relativePath": "testcases/80f0bf/b0f66449dde3d7e342c47ea8c3c16afb3f449964.html",
      "expected": "failed",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1c5f4220b80ca0ca49264ebad85b8a1c5db53ba4",
      "url": "https://act-rules.github.io/testcases/80f0bf/1c5f4220b80ca0ca49264ebad85b8a1c5db53ba4.html",
      "relativePath": "testcases/80f0bf/1c5f4220b80ca0ca49264ebad85b8a1c5db53ba4.html",
      "expected": "failed",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1f0249e71adb0dc508efc64e4510e57712c11692",
      "url": "https://act-rules.github.io/testcases/80f0bf/1f0249e71adb0dc508efc64e4510e57712c11692.html",
      "relativePath": "testcases/80f0bf/1f0249e71adb0dc508efc64e4510e57712c11692.html",
      "expected": "inapplicable",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bc0492b23e371f6cc3bc02092e96583500029887",
      "url": "https://act-rules.github.io/testcases/80f0bf/bc0492b23e371f6cc3bc02092e96583500029887.html",
      "relativePath": "testcases/80f0bf/bc0492b23e371f6cc3bc02092e96583500029887.html",
      "expected": "inapplicable",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a39c53a9ff5a70862a83416f65f35af571cc2c2c",
      "url": "https://act-rules.github.io/testcases/80f0bf/a39c53a9ff5a70862a83416f65f35af571cc2c2c.html",
      "relativePath": "testcases/80f0bf/a39c53a9ff5a70862a83416f65f35af571cc2c2c.html",
      "expected": "inapplicable",
      "ruleId": "80f0bf",
      "ruleName": "Video or audio has no auto-play audio",
      "rulePage": "https://act-rules.github.io/rules/80f0bf",
      "ruleAccessibilityRequirements": {
        "wcag20:1.4.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ad1edc9c9e68bc1d919123b1652c3bee56bc71ce",
      "url": "https://act-rules.github.io/testcases/674b10/ad1edc9c9e68bc1d919123b1652c3bee56bc71ce.html",
      "relativePath": "testcases/674b10/ad1edc9c9e68bc1d919123b1652c3bee56bc71ce.html",
      "expected": "passed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "58941f662731c908524bfa5f442c6e0b1c7fe316",
      "url": "https://act-rules.github.io/testcases/674b10/58941f662731c908524bfa5f442c6e0b1c7fe316.html",
      "relativePath": "testcases/674b10/58941f662731c908524bfa5f442c6e0b1c7fe316.html",
      "expected": "passed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "53cbd389b01a11e2a8047931c41e16f13103d549",
      "url": "https://act-rules.github.io/testcases/674b10/53cbd389b01a11e2a8047931c41e16f13103d549.html",
      "relativePath": "testcases/674b10/53cbd389b01a11e2a8047931c41e16f13103d549.html",
      "expected": "passed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f7355c103490cb8aab2629a0d4a07199401a312b",
      "url": "https://act-rules.github.io/testcases/674b10/f7355c103490cb8aab2629a0d4a07199401a312b.html",
      "relativePath": "testcases/674b10/f7355c103490cb8aab2629a0d4a07199401a312b.html",
      "expected": "failed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "6d80644bf857f521431808e97da2edc33c08054b",
      "url": "https://act-rules.github.io/testcases/674b10/6d80644bf857f521431808e97da2edc33c08054b.html",
      "relativePath": "testcases/674b10/6d80644bf857f521431808e97da2edc33c08054b.html",
      "expected": "failed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f2fb6bf4dc7f806330d388381b210ba3032825ce",
      "url": "https://act-rules.github.io/testcases/674b10/f2fb6bf4dc7f806330d388381b210ba3032825ce.html",
      "relativePath": "testcases/674b10/f2fb6bf4dc7f806330d388381b210ba3032825ce.html",
      "expected": "failed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c63ec173d8594c65292d6e30fafbb78db14b2815",
      "url": "https://act-rules.github.io/testcases/674b10/c63ec173d8594c65292d6e30fafbb78db14b2815.html",
      "relativePath": "testcases/674b10/c63ec173d8594c65292d6e30fafbb78db14b2815.html",
      "expected": "failed",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "646d5984f81cdde305305651f73686afdce45eff",
      "url": "https://act-rules.github.io/testcases/674b10/646d5984f81cdde305305651f73686afdce45eff.html",
      "relativePath": "testcases/674b10/646d5984f81cdde305305651f73686afdce45eff.html",
      "expected": "inapplicable",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c88f640bbe2e9d762d787655bc7b114d28612ce4",
      "url": "https://act-rules.github.io/testcases/674b10/c88f640bbe2e9d762d787655bc7b114d28612ce4.html",
      "relativePath": "testcases/674b10/c88f640bbe2e9d762d787655bc7b114d28612ce4.html",
      "expected": "inapplicable",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4cd3e3d74919fdb10750ec788f4e1e8ba969e89a",
      "url": "https://act-rules.github.io/testcases/674b10/4cd3e3d74919fdb10750ec788f4e1e8ba969e89a.html",
      "relativePath": "testcases/674b10/4cd3e3d74919fdb10750ec788f4e1e8ba969e89a.html",
      "expected": "inapplicable",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "65a47152dd77adf689f498be982c3af3ec236089",
      "url": "https://act-rules.github.io/testcases/674b10/65a47152dd77adf689f498be982c3af3ec236089.html",
      "relativePath": "testcases/674b10/65a47152dd77adf689f498be982c3af3ec236089.html",
      "expected": "inapplicable",
      "ruleId": "674b10",
      "ruleName": "`role` attribute has valid value",
      "rulePage": "https://act-rules.github.io/rules/674b10",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cf8cdc7d5472a80adec2b18234ad36e482dba862",
      "url": "https://act-rules.github.io/testcases/4e8ab6/cf8cdc7d5472a80adec2b18234ad36e482dba862.html",
      "relativePath": "testcases/4e8ab6/cf8cdc7d5472a80adec2b18234ad36e482dba862.html",
      "expected": "passed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bde160f3381349808f21c091e2c64f6e969e736a",
      "url": "https://act-rules.github.io/testcases/4e8ab6/bde160f3381349808f21c091e2c64f6e969e736a.html",
      "relativePath": "testcases/4e8ab6/bde160f3381349808f21c091e2c64f6e969e736a.html",
      "expected": "passed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a5f0857e4185681405d89d57d7b83b048abc3b2b",
      "url": "https://act-rules.github.io/testcases/4e8ab6/a5f0857e4185681405d89d57d7b83b048abc3b2b.html",
      "relativePath": "testcases/4e8ab6/a5f0857e4185681405d89d57d7b83b048abc3b2b.html",
      "expected": "passed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7e5aa5cd21e6a02a093aaca5ff1c86c7e81a3a0f",
      "url": "https://act-rules.github.io/testcases/4e8ab6/7e5aa5cd21e6a02a093aaca5ff1c86c7e81a3a0f.html",
      "relativePath": "testcases/4e8ab6/7e5aa5cd21e6a02a093aaca5ff1c86c7e81a3a0f.html",
      "expected": "passed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "9df368ccdcd1b907d6a8bc134a32a29588b7e195",
      "url": "https://act-rules.github.io/testcases/4e8ab6/9df368ccdcd1b907d6a8bc134a32a29588b7e195.html",
      "relativePath": "testcases/4e8ab6/9df368ccdcd1b907d6a8bc134a32a29588b7e195.html",
      "expected": "passed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3f9c9c21d79fd7f1db7c41f91b6e7110720c2e12",
      "url": "https://act-rules.github.io/testcases/4e8ab6/3f9c9c21d79fd7f1db7c41f91b6e7110720c2e12.html",
      "relativePath": "testcases/4e8ab6/3f9c9c21d79fd7f1db7c41f91b6e7110720c2e12.html",
      "expected": "passed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "dc8ab32300a87d1816fc406f4b855ebbbea93969",
      "url": "https://act-rules.github.io/testcases/4e8ab6/dc8ab32300a87d1816fc406f4b855ebbbea93969.html",
      "relativePath": "testcases/4e8ab6/dc8ab32300a87d1816fc406f4b855ebbbea93969.html",
      "expected": "failed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1abc3cea132d8234bcaf7cbd726eb0c5654a2f92",
      "url": "https://act-rules.github.io/testcases/4e8ab6/1abc3cea132d8234bcaf7cbd726eb0c5654a2f92.html",
      "relativePath": "testcases/4e8ab6/1abc3cea132d8234bcaf7cbd726eb0c5654a2f92.html",
      "expected": "failed",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5fda2d14758f7f1ef8659a559789496cbf20fe0a",
      "url": "https://act-rules.github.io/testcases/4e8ab6/5fda2d14758f7f1ef8659a559789496cbf20fe0a.html",
      "relativePath": "testcases/4e8ab6/5fda2d14758f7f1ef8659a559789496cbf20fe0a.html",
      "expected": "inapplicable",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "31c2eac66d7cefb55d5dee9a4ba3f64ee8043a4f",
      "url": "https://act-rules.github.io/testcases/4e8ab6/31c2eac66d7cefb55d5dee9a4ba3f64ee8043a4f.html",
      "relativePath": "testcases/4e8ab6/31c2eac66d7cefb55d5dee9a4ba3f64ee8043a4f.html",
      "expected": "inapplicable",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "afc3d53313f6b83095bb32ea9ca72b855a182c87",
      "url": "https://act-rules.github.io/testcases/4e8ab6/afc3d53313f6b83095bb32ea9ca72b855a182c87.html",
      "relativePath": "testcases/4e8ab6/afc3d53313f6b83095bb32ea9ca72b855a182c87.html",
      "expected": "inapplicable",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7eee9cb2d5515946c3499bb522e1bca5f2296fe8",
      "url": "https://act-rules.github.io/testcases/4e8ab6/7eee9cb2d5515946c3499bb522e1bca5f2296fe8.html",
      "relativePath": "testcases/4e8ab6/7eee9cb2d5515946c3499bb522e1bca5f2296fe8.html",
      "expected": "inapplicable",
      "ruleId": "4e8ab6",
      "ruleName": "Element with `role` attribute has required states and properties",
      "rulePage": "https://act-rules.github.io/rules/4e8ab6",
      "ruleAccessibilityRequirements": {
        "wcag20:4.1.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c44df8636ccefa085c4b15f82c549b612922dc4e",
      "url": "https://act-rules.github.io/testcases/eac66b/c44df8636ccefa085c4b15f82c549b612922dc4e.html",
      "relativePath": "testcases/eac66b/c44df8636ccefa085c4b15f82c549b612922dc4e.html",
      "expected": "passed",
      "ruleId": "eac66b",
      "ruleName": "`video` element auditory content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/eac66b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3ddbdc4a32bf9ac60afe279651fbf0772a7807e2",
      "url": "https://act-rules.github.io/testcases/eac66b/3ddbdc4a32bf9ac60afe279651fbf0772a7807e2.html",
      "relativePath": "testcases/eac66b/3ddbdc4a32bf9ac60afe279651fbf0772a7807e2.html",
      "expected": "passed",
      "ruleId": "eac66b",
      "ruleName": "`video` element auditory content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/eac66b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "3038a1c7b576838bb6dcf8243c7d6db46adcc25d",
      "url": "https://act-rules.github.io/testcases/eac66b/3038a1c7b576838bb6dcf8243c7d6db46adcc25d.html",
      "relativePath": "testcases/eac66b/3038a1c7b576838bb6dcf8243c7d6db46adcc25d.html",
      "expected": "failed",
      "ruleId": "eac66b",
      "ruleName": "`video` element auditory content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/eac66b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "dbbdd0a6e066e7f12446851f46958020778216ab",
      "url": "https://act-rules.github.io/testcases/eac66b/dbbdd0a6e066e7f12446851f46958020778216ab.html",
      "relativePath": "testcases/eac66b/dbbdd0a6e066e7f12446851f46958020778216ab.html",
      "expected": "failed",
      "ruleId": "eac66b",
      "ruleName": "`video` element auditory content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/eac66b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "50242297ce2dbbce452e19cba1febf0303bc1394",
      "url": "https://act-rules.github.io/testcases/eac66b/50242297ce2dbbce452e19cba1febf0303bc1394.html",
      "relativePath": "testcases/eac66b/50242297ce2dbbce452e19cba1febf0303bc1394.html",
      "expected": "inapplicable",
      "ruleId": "eac66b",
      "ruleName": "`video` element auditory content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/eac66b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "afbd4525a1c757010c5f18540f4007a1a826ebff",
      "url": "https://act-rules.github.io/testcases/eac66b/afbd4525a1c757010c5f18540f4007a1a826ebff.html",
      "relativePath": "testcases/eac66b/afbd4525a1c757010c5f18540f4007a1a826ebff.html",
      "expected": "inapplicable",
      "ruleId": "eac66b",
      "ruleName": "`video` element auditory content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/eac66b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.2": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "831918dc285995ed605e8ee712d0765da0236f53",
      "url": "https://act-rules.github.io/testcases/c5a4ea/831918dc285995ed605e8ee712d0765da0236f53.html",
      "relativePath": "testcases/c5a4ea/831918dc285995ed605e8ee712d0765da0236f53.html",
      "expected": "passed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "78f2675d890298e847c8febb5703349e8c910830",
      "url": "https://act-rules.github.io/testcases/c5a4ea/78f2675d890298e847c8febb5703349e8c910830.html",
      "relativePath": "testcases/c5a4ea/78f2675d890298e847c8febb5703349e8c910830.html",
      "expected": "passed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "08d6d8accfcb5b1ef810e2f490867d1ee2f5c70c",
      "url": "https://act-rules.github.io/testcases/c5a4ea/08d6d8accfcb5b1ef810e2f490867d1ee2f5c70c.html",
      "relativePath": "testcases/c5a4ea/08d6d8accfcb5b1ef810e2f490867d1ee2f5c70c.html",
      "expected": "passed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "178c5e22653e872bb3b6b32b36ded3fac4dce3b2",
      "url": "https://act-rules.github.io/testcases/c5a4ea/178c5e22653e872bb3b6b32b36ded3fac4dce3b2.html",
      "relativePath": "testcases/c5a4ea/178c5e22653e872bb3b6b32b36ded3fac4dce3b2.html",
      "expected": "passed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c4aafac0c9bda890e08b636aaa95b31c6a8c709a",
      "url": "https://act-rules.github.io/testcases/c5a4ea/c4aafac0c9bda890e08b636aaa95b31c6a8c709a.html",
      "relativePath": "testcases/c5a4ea/c4aafac0c9bda890e08b636aaa95b31c6a8c709a.html",
      "expected": "failed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "16fd728bb0603e0e5244e2e991142d98adf537fa",
      "url": "https://act-rules.github.io/testcases/c5a4ea/16fd728bb0603e0e5244e2e991142d98adf537fa.html",
      "relativePath": "testcases/c5a4ea/16fd728bb0603e0e5244e2e991142d98adf537fa.html",
      "expected": "failed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "5928a8f0178758944b8d407e80a03d09bea2d484",
      "url": "https://act-rules.github.io/testcases/c5a4ea/5928a8f0178758944b8d407e80a03d09bea2d484.html",
      "relativePath": "testcases/c5a4ea/5928a8f0178758944b8d407e80a03d09bea2d484.html",
      "expected": "failed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c45a11a0dfa96d10dfc3796deb8fd4bdd3e1c41c",
      "url": "https://act-rules.github.io/testcases/c5a4ea/c45a11a0dfa96d10dfc3796deb8fd4bdd3e1c41c.html",
      "relativePath": "testcases/c5a4ea/c45a11a0dfa96d10dfc3796deb8fd4bdd3e1c41c.html",
      "expected": "failed",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "de592d8b16a1207ab381f05bd961463111a84c89",
      "url": "https://act-rules.github.io/testcases/c5a4ea/de592d8b16a1207ab381f05bd961463111a84c89.html",
      "relativePath": "testcases/c5a4ea/de592d8b16a1207ab381f05bd961463111a84c89.html",
      "expected": "inapplicable",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "fede1ec8d572ee588d59f45d9bdc0cefa7bbffea",
      "url": "https://act-rules.github.io/testcases/c5a4ea/fede1ec8d572ee588d59f45d9bdc0cefa7bbffea.html",
      "relativePath": "testcases/c5a4ea/fede1ec8d572ee588d59f45d9bdc0cefa7bbffea.html",
      "expected": "inapplicable",
      "ruleId": "c5a4ea",
      "ruleName": "`video` element visual content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c5a4ea",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "878babc172786649391e461e451c47fc6c1800f1",
      "url": "https://act-rules.github.io/testcases/ab4d13/878babc172786649391e461e451c47fc6c1800f1.html",
      "relativePath": "testcases/ab4d13/878babc172786649391e461e451c47fc6c1800f1.html",
      "expected": "passed",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "f26261269127b641dfd055ddbfb9d6b9e80fc502",
      "url": "https://act-rules.github.io/testcases/ab4d13/f26261269127b641dfd055ddbfb9d6b9e80fc502.html",
      "relativePath": "testcases/ab4d13/f26261269127b641dfd055ddbfb9d6b9e80fc502.html",
      "expected": "failed",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "21176fe479c2a1c726c67d344114c306c489728b",
      "url": "https://act-rules.github.io/testcases/ab4d13/21176fe479c2a1c726c67d344114c306c489728b.html",
      "relativePath": "testcases/ab4d13/21176fe479c2a1c726c67d344114c306c489728b.html",
      "expected": "failed",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "a2c1e98d3efa8a23e7146c51c4065a2daf409869",
      "url": "https://act-rules.github.io/testcases/ab4d13/a2c1e98d3efa8a23e7146c51c4065a2daf409869.html",
      "relativePath": "testcases/ab4d13/a2c1e98d3efa8a23e7146c51c4065a2daf409869.html",
      "expected": "failed",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "22b141803e7716e83f62a1e024c2a208b238a07d",
      "url": "https://act-rules.github.io/testcases/ab4d13/22b141803e7716e83f62a1e024c2a208b238a07d.html",
      "relativePath": "testcases/ab4d13/22b141803e7716e83f62a1e024c2a208b238a07d.html",
      "expected": "failed",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "779f68656c7d9918de496b0f889c9cae892df4ed",
      "url": "https://act-rules.github.io/testcases/ab4d13/779f68656c7d9918de496b0f889c9cae892df4ed.html",
      "relativePath": "testcases/ab4d13/779f68656c7d9918de496b0f889c9cae892df4ed.html",
      "expected": "inapplicable",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "4ce4c5592dbfa69fcb463c23ce20a02c05d4e90c",
      "url": "https://act-rules.github.io/testcases/ab4d13/4ce4c5592dbfa69fcb463c23ce20a02c05d4e90c.html",
      "relativePath": "testcases/ab4d13/4ce4c5592dbfa69fcb463c23ce20a02c05d4e90c.html",
      "expected": "inapplicable",
      "ruleId": "ab4d13",
      "ruleName": "`video` element content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/ab4d13",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "e71033ddd89ffb44644cf756a6585d256b001519",
      "url": "https://act-rules.github.io/testcases/1ea59c/e71033ddd89ffb44644cf756a6585d256b001519.html",
      "relativePath": "testcases/1ea59c/e71033ddd89ffb44644cf756a6585d256b001519.html",
      "expected": "passed",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "5cd1d7cb96e734086d3bcb79cee70bcd5114271f",
      "url": "https://act-rules.github.io/testcases/1ea59c/5cd1d7cb96e734086d3bcb79cee70bcd5114271f.html",
      "relativePath": "testcases/1ea59c/5cd1d7cb96e734086d3bcb79cee70bcd5114271f.html",
      "expected": "passed",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "1ec8fe27a22c524b09199c9fe9243de5cacf6a28",
      "url": "https://act-rules.github.io/testcases/1ea59c/1ec8fe27a22c524b09199c9fe9243de5cacf6a28.html",
      "relativePath": "testcases/1ea59c/1ec8fe27a22c524b09199c9fe9243de5cacf6a28.html",
      "expected": "failed",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "9be182cb8b43d96ad83f7c190f7c0721e0c5133a",
      "url": "https://act-rules.github.io/testcases/1ea59c/9be182cb8b43d96ad83f7c190f7c0721e0c5133a.html",
      "relativePath": "testcases/1ea59c/9be182cb8b43d96ad83f7c190f7c0721e0c5133a.html",
      "expected": "failed",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "26fafc3ec5087136d7fa3b4ba307a300a7dbafcf",
      "url": "https://act-rules.github.io/testcases/1ea59c/26fafc3ec5087136d7fa3b4ba307a300a7dbafcf.html",
      "relativePath": "testcases/1ea59c/26fafc3ec5087136d7fa3b4ba307a300a7dbafcf.html",
      "expected": "failed",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "2255ad7819e3b6631f805f5815fd80b73d39e8ca",
      "url": "https://act-rules.github.io/testcases/1ea59c/2255ad7819e3b6631f805f5815fd80b73d39e8ca.html",
      "relativePath": "testcases/1ea59c/2255ad7819e3b6631f805f5815fd80b73d39e8ca.html",
      "expected": "inapplicable",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "377d72a07cab7d60ff0cfa29452a54f2256b4db2",
      "url": "https://act-rules.github.io/testcases/1ea59c/377d72a07cab7d60ff0cfa29452a54f2256b4db2.html",
      "relativePath": "testcases/1ea59c/377d72a07cab7d60ff0cfa29452a54f2256b4db2.html",
      "expected": "inapplicable",
      "ruleId": "1ea59c",
      "ruleName": "`video` element visual content has audio description",
      "rulePage": "https://act-rules.github.io/rules/1ea59c",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "e43d5ddb2abba4a5b4b380af0bbfc9b1a075ad29",
      "url": "https://act-rules.github.io/testcases/f51b46/e43d5ddb2abba4a5b4b380af0bbfc9b1a075ad29.html",
      "relativePath": "testcases/f51b46/e43d5ddb2abba4a5b4b380af0bbfc9b1a075ad29.html",
      "expected": "passed",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "7f87d8d2bc10c7e75750da017feef83880d9f6ed",
      "url": "https://act-rules.github.io/testcases/f51b46/7f87d8d2bc10c7e75750da017feef83880d9f6ed.html",
      "relativePath": "testcases/f51b46/7f87d8d2bc10c7e75750da017feef83880d9f6ed.html",
      "expected": "passed",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "c8408ce8621152f12bac85cd10a9af2c1a042947",
      "url": "https://act-rules.github.io/testcases/f51b46/c8408ce8621152f12bac85cd10a9af2c1a042947.html",
      "relativePath": "testcases/f51b46/c8408ce8621152f12bac85cd10a9af2c1a042947.html",
      "expected": "failed",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "597950a88eada466f4ebfd95d4a5827920c83bbe",
      "url": "https://act-rules.github.io/testcases/f51b46/597950a88eada466f4ebfd95d4a5827920c83bbe.html",
      "relativePath": "testcases/f51b46/597950a88eada466f4ebfd95d4a5827920c83bbe.html",
      "expected": "failed",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "5bbad94b559208f8b5c788133a5fbe8c77cdd399",
      "url": "https://act-rules.github.io/testcases/f51b46/5bbad94b559208f8b5c788133a5fbe8c77cdd399.html",
      "relativePath": "testcases/f51b46/5bbad94b559208f8b5c788133a5fbe8c77cdd399.html",
      "expected": "failed",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "8eb24c600d5180e4cac8115ade718263262d2313",
      "url": "https://act-rules.github.io/testcases/f51b46/8eb24c600d5180e4cac8115ade718263262d2313.html",
      "relativePath": "testcases/f51b46/8eb24c600d5180e4cac8115ade718263262d2313.html",
      "expected": "failed",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "bf768e8baf58a0873f031a0230bc000acb73d6aa",
      "url": "https://act-rules.github.io/testcases/f51b46/bf768e8baf58a0873f031a0230bc000acb73d6aa.html",
      "relativePath": "testcases/f51b46/bf768e8baf58a0873f031a0230bc000acb73d6aa.html",
      "expected": "inapplicable",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "e9090dee184c2bdd5b83f4c42a70cc25c92ac132",
      "url": "https://act-rules.github.io/testcases/f51b46/e9090dee184c2bdd5b83f4c42a70cc25c92ac132.html",
      "relativePath": "testcases/f51b46/e9090dee184c2bdd5b83f4c42a70cc25c92ac132.html",
      "expected": "inapplicable",
      "ruleId": "f51b46",
      "ruleName": "`video` element auditory content has captions",
      "rulePage": "https://act-rules.github.io/rules/f51b46",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "2f8209c76956660cf271fcf575116be23a1cf401",
      "url": "https://act-rules.github.io/testcases/f196ce/2f8209c76956660cf271fcf575116be23a1cf401.html",
      "relativePath": "testcases/f196ce/2f8209c76956660cf271fcf575116be23a1cf401.html",
      "expected": "passed",
      "ruleId": "f196ce",
      "ruleName": "`video` element visual content has description track",
      "rulePage": "https://act-rules.github.io/rules/f196ce",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "28179e64e4bd74ec907d81e693af9f1ed7965267",
      "url": "https://act-rules.github.io/testcases/f196ce/28179e64e4bd74ec907d81e693af9f1ed7965267.html",
      "relativePath": "testcases/f196ce/28179e64e4bd74ec907d81e693af9f1ed7965267.html",
      "expected": "failed",
      "ruleId": "f196ce",
      "ruleName": "`video` element visual content has description track",
      "rulePage": "https://act-rules.github.io/rules/f196ce",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "bc9e74397d525ea2dc1a8aeb305c69a172e6543f",
      "url": "https://act-rules.github.io/testcases/f196ce/bc9e74397d525ea2dc1a8aeb305c69a172e6543f.html",
      "relativePath": "testcases/f196ce/bc9e74397d525ea2dc1a8aeb305c69a172e6543f.html",
      "expected": "inapplicable",
      "ruleId": "f196ce",
      "ruleName": "`video` element visual content has description track",
      "rulePage": "https://act-rules.github.io/rules/f196ce",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "d5f68d71fec465df65d0eb614f08738c5d9173bd",
      "url": "https://act-rules.github.io/testcases/f196ce/d5f68d71fec465df65d0eb614f08738c5d9173bd.html",
      "relativePath": "testcases/f196ce/d5f68d71fec465df65d0eb614f08738c5d9173bd.html",
      "expected": "inapplicable",
      "ruleId": "f196ce",
      "ruleName": "`video` element visual content has description track",
      "rulePage": "https://act-rules.github.io/rules/f196ce",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "f4e47a47df021259cfc514242906b566cd543e2e",
      "url": "https://act-rules.github.io/testcases/f196ce/f4e47a47df021259cfc514242906b566cd543e2e.html",
      "relativePath": "testcases/f196ce/f4e47a47df021259cfc514242906b566cd543e2e.html",
      "expected": "inapplicable",
      "ruleId": "f196ce",
      "ruleName": "`video` element visual content has description track",
      "rulePage": "https://act-rules.github.io/rules/f196ce",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "88ff371c3b7c6e552042b35162359b00ed915ff2",
      "url": "https://act-rules.github.io/testcases/c3232f/88ff371c3b7c6e552042b35162359b00ed915ff2.html",
      "relativePath": "testcases/c3232f/88ff371c3b7c6e552042b35162359b00ed915ff2.html",
      "expected": "passed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "e853e73faa32e0afc4c3e7e55ab430319fd183eb",
      "url": "https://act-rules.github.io/testcases/c3232f/e853e73faa32e0afc4c3e7e55ab430319fd183eb.html",
      "relativePath": "testcases/c3232f/e853e73faa32e0afc4c3e7e55ab430319fd183eb.html",
      "expected": "passed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "4831c1e1daa37f84e93309e5ea02996eda94d85c",
      "url": "https://act-rules.github.io/testcases/c3232f/4831c1e1daa37f84e93309e5ea02996eda94d85c.html",
      "relativePath": "testcases/c3232f/4831c1e1daa37f84e93309e5ea02996eda94d85c.html",
      "expected": "passed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c664565322bd0a339df6f5c642ac9fd13f7434f9",
      "url": "https://act-rules.github.io/testcases/c3232f/c664565322bd0a339df6f5c642ac9fd13f7434f9.html",
      "relativePath": "testcases/c3232f/c664565322bd0a339df6f5c642ac9fd13f7434f9.html",
      "expected": "passed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "55f2268b092ffd5fcc8de0b4a9fef7ae64db930c",
      "url": "https://act-rules.github.io/testcases/c3232f/55f2268b092ffd5fcc8de0b4a9fef7ae64db930c.html",
      "relativePath": "testcases/c3232f/55f2268b092ffd5fcc8de0b4a9fef7ae64db930c.html",
      "expected": "failed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "a66b6afc48ae36f929069cad224b7e4cd428be88",
      "url": "https://act-rules.github.io/testcases/c3232f/a66b6afc48ae36f929069cad224b7e4cd428be88.html",
      "relativePath": "testcases/c3232f/a66b6afc48ae36f929069cad224b7e4cd428be88.html",
      "expected": "failed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b0d5fac8ee40daa53a1b570e2c2422600c6e4744",
      "url": "https://act-rules.github.io/testcases/c3232f/b0d5fac8ee40daa53a1b570e2c2422600c6e4744.html",
      "relativePath": "testcases/c3232f/b0d5fac8ee40daa53a1b570e2c2422600c6e4744.html",
      "expected": "failed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "86107b824bf3e2954d79af5fb17eae400fb4cf13",
      "url": "https://act-rules.github.io/testcases/c3232f/86107b824bf3e2954d79af5fb17eae400fb4cf13.html",
      "relativePath": "testcases/c3232f/86107b824bf3e2954d79af5fb17eae400fb4cf13.html",
      "expected": "failed",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "119da795ca8ee224bfa03e3334d55c631dc3fb53",
      "url": "https://act-rules.github.io/testcases/c3232f/119da795ca8ee224bfa03e3334d55c631dc3fb53.html",
      "relativePath": "testcases/c3232f/119da795ca8ee224bfa03e3334d55c631dc3fb53.html",
      "expected": "inapplicable",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c740cd19491e16ce8489a778fa139a1b21233881",
      "url": "https://act-rules.github.io/testcases/c3232f/c740cd19491e16ce8489a778fa139a1b21233881.html",
      "relativePath": "testcases/c3232f/c740cd19491e16ce8489a778fa139a1b21233881.html",
      "expected": "inapplicable",
      "ruleId": "c3232f",
      "ruleName": "`video` element visual-only content has accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/c3232f",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.1": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "832cad5e2c3b0a4c77404bcbe1fb6cfd01c16bdd",
      "url": "https://act-rules.github.io/testcases/fd26cf/832cad5e2c3b0a4c77404bcbe1fb6cfd01c16bdd.html",
      "relativePath": "testcases/fd26cf/832cad5e2c3b0a4c77404bcbe1fb6cfd01c16bdd.html",
      "expected": "passed",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "52363dd811207c5745d396c06810bf2da5af0f5c",
      "url": "https://act-rules.github.io/testcases/fd26cf/52363dd811207c5745d396c06810bf2da5af0f5c.html",
      "relativePath": "testcases/fd26cf/52363dd811207c5745d396c06810bf2da5af0f5c.html",
      "expected": "failed",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "492433bfad9c300186c4e48688a72aef2680f354",
      "url": "https://act-rules.github.io/testcases/fd26cf/492433bfad9c300186c4e48688a72aef2680f354.html",
      "relativePath": "testcases/fd26cf/492433bfad9c300186c4e48688a72aef2680f354.html",
      "expected": "failed",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "75ec243cce5d42c8751141298c458731a78cd880",
      "url": "https://act-rules.github.io/testcases/fd26cf/75ec243cce5d42c8751141298c458731a78cd880.html",
      "relativePath": "testcases/fd26cf/75ec243cce5d42c8751141298c458731a78cd880.html",
      "expected": "failed",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "48440ec9f691e8867cd7515bdba3763be192b60b",
      "url": "https://act-rules.github.io/testcases/fd26cf/48440ec9f691e8867cd7515bdba3763be192b60b.html",
      "relativePath": "testcases/fd26cf/48440ec9f691e8867cd7515bdba3763be192b60b.html",
      "expected": "failed",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "1cd29f8eb5848be37d2b7559aa7d2e8efa369bf3",
      "url": "https://act-rules.github.io/testcases/fd26cf/1cd29f8eb5848be37d2b7559aa7d2e8efa369bf3.html",
      "relativePath": "testcases/fd26cf/1cd29f8eb5848be37d2b7559aa7d2e8efa369bf3.html",
      "expected": "inapplicable",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "d71de7d200e17e794d59a87bfbd56ca87d25a751",
      "url": "https://act-rules.github.io/testcases/fd26cf/d71de7d200e17e794d59a87bfbd56ca87d25a751.html",
      "relativePath": "testcases/fd26cf/d71de7d200e17e794d59a87bfbd56ca87d25a751.html",
      "expected": "inapplicable",
      "ruleId": "fd26cf",
      "ruleName": "`video` element visual-only content is media alternative for text",
      "rulePage": "https://act-rules.github.io/rules/fd26cf",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "6bec76bd9374bc5e7b4616139890448e6682712c",
      "url": "https://act-rules.github.io/testcases/d7ba54/6bec76bd9374bc5e7b4616139890448e6682712c.html",
      "relativePath": "testcases/d7ba54/6bec76bd9374bc5e7b4616139890448e6682712c.html",
      "expected": "passed",
      "ruleId": "d7ba54",
      "ruleName": "`video` element visual-only content has audio track alternative",
      "rulePage": "https://act-rules.github.io/rules/d7ba54",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "3a3f7134e8a0691d3362c282626cc682c30223e5",
      "url": "https://act-rules.github.io/testcases/d7ba54/3a3f7134e8a0691d3362c282626cc682c30223e5.html",
      "relativePath": "testcases/d7ba54/3a3f7134e8a0691d3362c282626cc682c30223e5.html",
      "expected": "failed",
      "ruleId": "d7ba54",
      "ruleName": "`video` element visual-only content has audio track alternative",
      "rulePage": "https://act-rules.github.io/rules/d7ba54",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "05e1ba65119d41d5bd2ead04087d00a372dfa754",
      "url": "https://act-rules.github.io/testcases/d7ba54/05e1ba65119d41d5bd2ead04087d00a372dfa754.html",
      "relativePath": "testcases/d7ba54/05e1ba65119d41d5bd2ead04087d00a372dfa754.html",
      "expected": "failed",
      "ruleId": "d7ba54",
      "ruleName": "`video` element visual-only content has audio track alternative",
      "rulePage": "https://act-rules.github.io/rules/d7ba54",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "735e30b5029265acdb9f747709519ae70fd23c01",
      "url": "https://act-rules.github.io/testcases/d7ba54/735e30b5029265acdb9f747709519ae70fd23c01.html",
      "relativePath": "testcases/d7ba54/735e30b5029265acdb9f747709519ae70fd23c01.html",
      "expected": "inapplicable",
      "ruleId": "d7ba54",
      "ruleName": "`video` element visual-only content has audio track alternative",
      "rulePage": "https://act-rules.github.io/rules/d7ba54",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "7af2012209d2caa8cbf05b01b5fd36ba7035aede",
      "url": "https://act-rules.github.io/testcases/d7ba54/7af2012209d2caa8cbf05b01b5fd36ba7035aede.html",
      "relativePath": "testcases/d7ba54/7af2012209d2caa8cbf05b01b5fd36ba7035aede.html",
      "expected": "inapplicable",
      "ruleId": "d7ba54",
      "ruleName": "`video` element visual-only content has audio track alternative",
      "rulePage": "https://act-rules.github.io/rules/d7ba54",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "945eb26baabd073730a582ef86b28c02954aeb36",
      "url": "https://act-rules.github.io/testcases/ac7dc6/945eb26baabd073730a582ef86b28c02954aeb36.html",
      "relativePath": "testcases/ac7dc6/945eb26baabd073730a582ef86b28c02954aeb36.html",
      "expected": "passed",
      "ruleId": "ac7dc6",
      "ruleName": "`video` element visual-only content has description track",
      "rulePage": "https://act-rules.github.io/rules/ac7dc6",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "325acd17d886a3efe2e44c8a91fd631057693e7b",
      "url": "https://act-rules.github.io/testcases/ac7dc6/325acd17d886a3efe2e44c8a91fd631057693e7b.html",
      "relativePath": "testcases/ac7dc6/325acd17d886a3efe2e44c8a91fd631057693e7b.html",
      "expected": "failed",
      "ruleId": "ac7dc6",
      "ruleName": "`video` element visual-only content has description track",
      "rulePage": "https://act-rules.github.io/rules/ac7dc6",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "34f569baa8168b2d6277e3f73b3e666307a7928b",
      "url": "https://act-rules.github.io/testcases/ac7dc6/34f569baa8168b2d6277e3f73b3e666307a7928b.html",
      "relativePath": "testcases/ac7dc6/34f569baa8168b2d6277e3f73b3e666307a7928b.html",
      "expected": "inapplicable",
      "ruleId": "ac7dc6",
      "ruleName": "`video` element visual-only content has description track",
      "rulePage": "https://act-rules.github.io/rules/ac7dc6",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "720063dd42f5981a9c03c1c681f1afc282575acb",
      "url": "https://act-rules.github.io/testcases/ac7dc6/720063dd42f5981a9c03c1c681f1afc282575acb.html",
      "relativePath": "testcases/ac7dc6/720063dd42f5981a9c03c1c681f1afc282575acb.html",
      "expected": "inapplicable",
      "ruleId": "ac7dc6",
      "ruleName": "`video` element visual-only content has description track",
      "rulePage": "https://act-rules.github.io/rules/ac7dc6",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "9d39ea70fea7707c00cf38106aae236af5d8210f",
      "url": "https://act-rules.github.io/testcases/ac7dc6/9d39ea70fea7707c00cf38106aae236af5d8210f.html",
      "relativePath": "testcases/ac7dc6/9d39ea70fea7707c00cf38106aae236af5d8210f.html",
      "expected": "inapplicable",
      "ruleId": "ac7dc6",
      "ruleName": "`video` element visual-only content has description track",
      "rulePage": "https://act-rules.github.io/rules/ac7dc6",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "6a898cfb874c13ab9024474909e5e4cbef0316d0",
      "url": "https://act-rules.github.io/testcases/ee13b5/6a898cfb874c13ab9024474909e5e4cbef0316d0.html",
      "relativePath": "testcases/ee13b5/6a898cfb874c13ab9024474909e5e4cbef0316d0.html",
      "expected": "passed",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "c105d7d53f6a252d1d7e5448915d500ac3373aad",
      "url": "https://act-rules.github.io/testcases/ee13b5/c105d7d53f6a252d1d7e5448915d500ac3373aad.html",
      "relativePath": "testcases/ee13b5/c105d7d53f6a252d1d7e5448915d500ac3373aad.html",
      "expected": "passed",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "565adace3a932b6ea690e55f086d34467f601d5b",
      "url": "https://act-rules.github.io/testcases/ee13b5/565adace3a932b6ea690e55f086d34467f601d5b.html",
      "relativePath": "testcases/ee13b5/565adace3a932b6ea690e55f086d34467f601d5b.html",
      "expected": "failed",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "f1c1e5a3f795ad82bc2732561590dea1cbe49d03",
      "url": "https://act-rules.github.io/testcases/ee13b5/f1c1e5a3f795ad82bc2732561590dea1cbe49d03.html",
      "relativePath": "testcases/ee13b5/f1c1e5a3f795ad82bc2732561590dea1cbe49d03.html",
      "expected": "failed",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "db4c076fda69b249bb847b5d140680418a0d0d7c",
      "url": "https://act-rules.github.io/testcases/ee13b5/db4c076fda69b249bb847b5d140680418a0d0d7c.html",
      "relativePath": "testcases/ee13b5/db4c076fda69b249bb847b5d140680418a0d0d7c.html",
      "expected": "failed",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "7853b62815e8bc28f5f6df4baa081591198631b6",
      "url": "https://act-rules.github.io/testcases/ee13b5/7853b62815e8bc28f5f6df4baa081591198631b6.html",
      "relativePath": "testcases/ee13b5/7853b62815e8bc28f5f6df4baa081591198631b6.html",
      "expected": "failed",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "d38f51da0cf71da284712f5120c92259f6597874",
      "url": "https://act-rules.github.io/testcases/ee13b5/d38f51da0cf71da284712f5120c92259f6597874.html",
      "relativePath": "testcases/ee13b5/d38f51da0cf71da284712f5120c92259f6597874.html",
      "expected": "inapplicable",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "a78ea881aae8d9933141ef052c4d3e370249f998",
      "url": "https://act-rules.github.io/testcases/ee13b5/a78ea881aae8d9933141ef052c4d3e370249f998.html",
      "relativePath": "testcases/ee13b5/a78ea881aae8d9933141ef052c4d3e370249f998.html",
      "expected": "inapplicable",
      "ruleId": "ee13b5",
      "ruleName": "`video` element visual-only content has transcript",
      "rulePage": "https://act-rules.github.io/rules/ee13b5",
      "ruleAccessibilityRequirements": null
    },
    {
      "testcaseId": "59b01660e02ba0e75837e94f5e7b23dd544f4b73",
      "url": "https://act-rules.github.io/testcases/1ec09b/59b01660e02ba0e75837e94f5e7b23dd544f4b73.html",
      "relativePath": "testcases/1ec09b/59b01660e02ba0e75837e94f5e7b23dd544f4b73.html",
      "expected": "passed",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b861d06483620e4cf934e8e629595b87b5beb41b",
      "url": "https://act-rules.github.io/testcases/1ec09b/b861d06483620e4cf934e8e629595b87b5beb41b.html",
      "relativePath": "testcases/1ec09b/b861d06483620e4cf934e8e629595b87b5beb41b.html",
      "expected": "passed",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "10d47e1a7127c930bb3f4fea7ae42d0d95c571e3",
      "url": "https://act-rules.github.io/testcases/1ec09b/10d47e1a7127c930bb3f4fea7ae42d0d95c571e3.html",
      "relativePath": "testcases/1ec09b/10d47e1a7127c930bb3f4fea7ae42d0d95c571e3.html",
      "expected": "passed",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "58bd7391452c894bc0e1737e0401c670c76d28b4",
      "url": "https://act-rules.github.io/testcases/1ec09b/58bd7391452c894bc0e1737e0401c670c76d28b4.html",
      "relativePath": "testcases/1ec09b/58bd7391452c894bc0e1737e0401c670c76d28b4.html",
      "expected": "failed",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "bd52bba7bf56b40534acd3d92f0bd01f72a512d8",
      "url": "https://act-rules.github.io/testcases/1ec09b/bd52bba7bf56b40534acd3d92f0bd01f72a512d8.html",
      "relativePath": "testcases/1ec09b/bd52bba7bf56b40534acd3d92f0bd01f72a512d8.html",
      "expected": "failed",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "03633b0c48417bc6a4abfc2ca46b290db360c1a1",
      "url": "https://act-rules.github.io/testcases/1ec09b/03633b0c48417bc6a4abfc2ca46b290db360c1a1.html",
      "relativePath": "testcases/1ec09b/03633b0c48417bc6a4abfc2ca46b290db360c1a1.html",
      "expected": "failed",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f200aff47c7314f4bafe29a1423127a59e7fdd83",
      "url": "https://act-rules.github.io/testcases/1ec09b/f200aff47c7314f4bafe29a1423127a59e7fdd83.html",
      "relativePath": "testcases/1ec09b/f200aff47c7314f4bafe29a1423127a59e7fdd83.html",
      "expected": "inapplicable",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b7683ab7f5d8bd32e8ad4b8186f77581829de593",
      "url": "https://act-rules.github.io/testcases/1ec09b/b7683ab7f5d8bd32e8ad4b8186f77581829de593.html",
      "relativePath": "testcases/1ec09b/b7683ab7f5d8bd32e8ad4b8186f77581829de593.html",
      "expected": "inapplicable",
      "ruleId": "1ec09b",
      "ruleName": "`video` element visual content has strict accessible alternative",
      "rulePage": "https://act-rules.github.io/rules/1ec09b",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.5": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "8367759589bf0c052c079150ee2198f0d0d7234a",
      "url": "https://act-rules.github.io/testcases/1a02b0/8367759589bf0c052c079150ee2198f0d0d7234a.html",
      "relativePath": "testcases/1a02b0/8367759589bf0c052c079150ee2198f0d0d7234a.html",
      "expected": "passed",
      "ruleId": "1a02b0",
      "ruleName": "`video` element visual content has transcript",
      "rulePage": "https://act-rules.github.io/rules/1a02b0",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.8": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "524a1d8a72642ecc8bb7d99ea3724fc4d96e886e",
      "url": "https://act-rules.github.io/testcases/1a02b0/524a1d8a72642ecc8bb7d99ea3724fc4d96e886e.html",
      "relativePath": "testcases/1a02b0/524a1d8a72642ecc8bb7d99ea3724fc4d96e886e.html",
      "expected": "passed",
      "ruleId": "1a02b0",
      "ruleName": "`video` element visual content has transcript",
      "rulePage": "https://act-rules.github.io/rules/1a02b0",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.8": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "cd540be16db0aa2916739d53aca2cb4f446e87a3",
      "url": "https://act-rules.github.io/testcases/1a02b0/cd540be16db0aa2916739d53aca2cb4f446e87a3.html",
      "relativePath": "testcases/1a02b0/cd540be16db0aa2916739d53aca2cb4f446e87a3.html",
      "expected": "failed",
      "ruleId": "1a02b0",
      "ruleName": "`video` element visual content has transcript",
      "rulePage": "https://act-rules.github.io/rules/1a02b0",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.8": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "f98ee74f0688f5109bb887e44a31f85895d1b701",
      "url": "https://act-rules.github.io/testcases/1a02b0/f98ee74f0688f5109bb887e44a31f85895d1b701.html",
      "relativePath": "testcases/1a02b0/f98ee74f0688f5109bb887e44a31f85895d1b701.html",
      "expected": "failed",
      "ruleId": "1a02b0",
      "ruleName": "`video` element visual content has transcript",
      "rulePage": "https://act-rules.github.io/rules/1a02b0",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.8": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1829079096dbe3d6d897be42d6e91adbb2b6d93e",
      "url": "https://act-rules.github.io/testcases/1a02b0/1829079096dbe3d6d897be42d6e91adbb2b6d93e.html",
      "relativePath": "testcases/1a02b0/1829079096dbe3d6d897be42d6e91adbb2b6d93e.html",
      "expected": "inapplicable",
      "ruleId": "1a02b0",
      "ruleName": "`video` element visual content has transcript",
      "rulePage": "https://act-rules.github.io/rules/1a02b0",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.8": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ac2e195b4667031ea041b1112f65a4348e9401f2",
      "url": "https://act-rules.github.io/testcases/1a02b0/ac2e195b4667031ea041b1112f65a4348e9401f2.html",
      "relativePath": "testcases/1a02b0/ac2e195b4667031ea041b1112f65a4348e9401f2.html",
      "expected": "inapplicable",
      "ruleId": "1a02b0",
      "ruleName": "`video` element visual content has transcript",
      "rulePage": "https://act-rules.github.io/rules/1a02b0",
      "ruleAccessibilityRequirements": {
        "wcag20:1.2.8": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "2419266bf9e0c82a87dcac1153d4465349637468",
      "url": "https://act-rules.github.io/testcases/2ee8b8/2419266bf9e0c82a87dcac1153d4465349637468.html",
      "relativePath": "testcases/2ee8b8/2419266bf9e0c82a87dcac1153d4465349637468.html",
      "expected": "passed",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "c5a775a5be6ccb10cdf5a9379157a7bcfc4b3540",
      "url": "https://act-rules.github.io/testcases/2ee8b8/c5a775a5be6ccb10cdf5a9379157a7bcfc4b3540.html",
      "relativePath": "testcases/2ee8b8/c5a775a5be6ccb10cdf5a9379157a7bcfc4b3540.html",
      "expected": "passed",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "1e69ef21d3aa5bcb4b3bd712de859bf2191be953",
      "url": "https://act-rules.github.io/testcases/2ee8b8/1e69ef21d3aa5bcb4b3bd712de859bf2191be953.html",
      "relativePath": "testcases/2ee8b8/1e69ef21d3aa5bcb4b3bd712de859bf2191be953.html",
      "expected": "passed",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "652b11aeccc36a13bd82cd4a97c28c5f49fc671d",
      "url": "https://act-rules.github.io/testcases/2ee8b8/652b11aeccc36a13bd82cd4a97c28c5f49fc671d.html",
      "relativePath": "testcases/2ee8b8/652b11aeccc36a13bd82cd4a97c28c5f49fc671d.html",
      "expected": "failed",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "7887b68062eddacb57b14dc6722670188a174644",
      "url": "https://act-rules.github.io/testcases/2ee8b8/7887b68062eddacb57b14dc6722670188a174644.html",
      "relativePath": "testcases/2ee8b8/7887b68062eddacb57b14dc6722670188a174644.html",
      "expected": "failed",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "0f71d8cc5fb97596b21a7de33612e9fcb92a79ae",
      "url": "https://act-rules.github.io/testcases/2ee8b8/0f71d8cc5fb97596b21a7de33612e9fcb92a79ae.html",
      "relativePath": "testcases/2ee8b8/0f71d8cc5fb97596b21a7de33612e9fcb92a79ae.html",
      "expected": "inapplicable",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "d86234cca5adfea17321b89f7599bfe60ae1ce1f",
      "url": "https://act-rules.github.io/testcases/2ee8b8/d86234cca5adfea17321b89f7599bfe60ae1ce1f.html",
      "relativePath": "testcases/2ee8b8/d86234cca5adfea17321b89f7599bfe60ae1ce1f.html",
      "expected": "inapplicable",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "aa0d459b49f32a30b5ff63d26dbcaab8b3de5213",
      "url": "https://act-rules.github.io/testcases/2ee8b8/aa0d459b49f32a30b5ff63d26dbcaab8b3de5213.html",
      "relativePath": "testcases/2ee8b8/aa0d459b49f32a30b5ff63d26dbcaab8b3de5213.html",
      "expected": "inapplicable",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "b71a4784c70126039f16dc9c87de330d57f77902",
      "url": "https://act-rules.github.io/testcases/2ee8b8/b71a4784c70126039f16dc9c87de330d57f77902.html",
      "relativePath": "testcases/2ee8b8/b71a4784c70126039f16dc9c87de330d57f77902.html",
      "expected": "inapplicable",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    },
    {
      "testcaseId": "ed83a2ff3dc03d1c00854426c8f95f6fd624884c",
      "url": "https://act-rules.github.io/testcases/2ee8b8/ed83a2ff3dc03d1c00854426c8f95f6fd624884c.html",
      "relativePath": "testcases/2ee8b8/ed83a2ff3dc03d1c00854426c8f95f6fd624884c.html",
      "expected": "inapplicable",
      "ruleId": "2ee8b8",
      "ruleName": "Visible label is part of accessible name",
      "rulePage": "https://act-rules.github.io/rules/2ee8b8",
      "ruleAccessibilityRequirements": {
        "wcag21:2.5.3": {
          "forConformance": true,
          "failed": "not satisfied",
          "passed": "further testing needed",
          "inapplicable": "further testing needed"
        }
      }
    }
  ]
};

  afterEach(function() {
    resetConfiguration();
  });

  const ruleId = 'b33eff';
  let testCases = [];

  /*before('Downloading tests cases', function() {
    //const json = JSON.parse(await request('https://act-rules.github.io/testcases.json'));
    testCases = json.testcases.filter(tc => tc.ruleId === ruleId);
  });*/

  //setTimeout(function() {
    testCases = json.testcases.filter(tc => tc.ruleId === ruleId);
    let i = 0;
    let lastOutcome = 'passed';
    for (const test of testCases || []) {
      if (test.expected !== lastOutcome) {
        lastOutcome = test.expected;
        i = 0;
      }
      i++;
      describe(`${test.expected.charAt(0).toUpperCase() + test.expected.slice(1)} example ${i}`, function () {
        it(`should have outcome="${test.expected}"`, async function () {
          this.timeout(10 * 1000);
          const { source, processed, stylesheets } = await getDom(test.url);
          configure({
            rules: ['QW-ACT-R7']
          });
          const report = await executeACTR(test.url, source.html.parsed, processed.html.parsed, stylesheets);
          expect(report.rules['QW-ACT-R7'].metadata.outcome).to.be.equal(test.expected);
        });
      });
    }
  //}, 5000);
});