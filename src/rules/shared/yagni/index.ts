import { createRule } from '@rules/models/rule/service';
import { noUnusedFeatures } from './noUnusedFeatures';

export const yagniRules = createRule('YAGNI', () => [], [noUnusedFeatures]);
