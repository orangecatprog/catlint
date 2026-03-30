import { createGroup } from '@rules/$/models/group/service';
import type { Group } from '@rules/$/models/group/model';
import { noUnusedFeatures } from './noUnusedFeatures';

export const yagniGroup: Group = createGroup('YAGNI', (_push, pushGroup) => {
	pushGroup(noUnusedFeatures);
});
