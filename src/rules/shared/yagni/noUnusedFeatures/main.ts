import { noUnusedClasses } from './noUnusedClasses';
import { noUnusedFunctions } from './noUnusedFunctions';
import { noUnusedVariables } from './noUnusedVariables';
import { createRule } from '@rules/models/rule/service';

export const noUnusedFeatures = createRule('No unused features', () => [], [
	noUnusedVariables,
	noUnusedFunctions,
	noUnusedClasses,
]);
