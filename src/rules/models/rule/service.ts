import type { Rule, RuleFn } from './model';

export const createRule = (
	name: string,
	fn: (subrule: (subrule: Rule) => void) => RuleFn,
): Rule => {
	const subrules: Rule[] = [];
	const ruleFn: RuleFn = fn((subrule: Rule) => subrules.push(subrule));
	return {
		name,
		fn: ruleFn,
		subrules,
	};
};
