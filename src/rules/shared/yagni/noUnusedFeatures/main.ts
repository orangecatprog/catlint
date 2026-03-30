import { createGroup } from '@rules/$/models/group/service';
import { noUnusedClasses } from './noUnusedClasses';
import { noUnusedFunctions } from './noUnusedFunctions';
import { noUnusedVariables } from './noUnusedVariables';

export const noUnusedFeatures = createGroup('No unused features', (push) => {
	[noUnusedVariables, noUnusedFunctions, noUnusedClasses].forEach(push);
});
