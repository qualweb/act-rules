'use strict';

import { ElementHandle } from 'puppeteer';
import { ACTRuleResult } from '@qualweb/act-rules';
import { DomUtils } from '@qualweb/util';
import Rule from '../lib/Rule.object';
import { ACTRule, ElementExists } from '../lib/decorator';

@ACTRule
class QW_ACT_R31 extends Rule {

  constructor(rule?: any) {
    super(rule);
  }

  @ElementExists
  async execute(element: ElementHandle): Promise<void> {

    const evaluation: ACTRuleResult = {
      verdict: '',
      description: '',
      resultCode: ''
    };

    const [metadata, track, isVisible] = await Promise.all([
      DomUtils.getVideoMetadata(element),
      element.$('track[kind="descriptions"]'),
      DomUtils.isElementVisible(element)
    ]);

    const hasPupeteerApplicableData = metadata.puppeteer.video.duration > 0;
    const applicableServiceData = metadata.service.video.duration > 0 && metadata.service.audio.volume === -91;

    if (!isVisible) {
      evaluation.verdict = 'inapplicable';
      evaluation.description = 'The pause button is not visible';
      evaluation.resultCode = 'RC1';
    } else if (metadata.service.error && metadata.puppeteer.error) {
      evaluation.verdict = 'warning';
      evaluation.description = 'Cant colect data from the test target.';
      evaluation.resultCode = 'RC2';
    } else if (applicableServiceData) {
      if (track !== null) {
        evaluation.verdict = 'warning';
        evaluation.description = 'Check if the `track` element correctly describes the visual content of the video.';
        evaluation.resultCode = 'RC3';
      } else {
        evaluation.verdict = 'warning';
        evaluation.description = 'Check if the test target visual content has accessible alternative.';
        evaluation.resultCode = 'RC4';
      }
    } else if (hasPupeteerApplicableData) {
      evaluation.verdict = 'warning';
      evaluation.description = `The test target has a sound track but we can't verify the volume. Check if the test target has audio and if it does check if visual content has an accessible alternative.`;
      evaluation.resultCode = 'RC5';

    } else {
      evaluation.verdict = 'inapplicable';
      evaluation.description = `The test target isn't a non-streaming \`video\` element that is visible, where the video contains audio.`;
      evaluation.resultCode = 'RC6';
    }
    
    await super.addEvaluationResult(evaluation, element);
  }
}

export = QW_ACT_R31;
