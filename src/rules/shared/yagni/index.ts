import { createGroup } from '@rules/$/group/service';
import type { Group } from '@rules/$/group/model';
import { noUnusedFeatures } from './noUnusedFeatures';

export const yagniGroup: Group = createGroup('YAGNI', (_push, pushGroup) => {
	pushGroup(noUnusedFeatures);
});
