import { ACTRule } from '@qualweb/act-rules';
import Rule from './Rule.object';

abstract class AtomicRule extends Rule {
  constructor(rule: ACTRule) {
    super(rule);
  }

  abstract execute(element: typeof window.qwElement | undefined): void;
}

export = AtomicRule;
