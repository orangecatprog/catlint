import type { Rule } from '@rules/$/models/rule/model';
import type { Group } from './model';

export const createGroup = (
	name: string,
	method: (push: (rule: Rule) => void, subgroup: (group: Group) => void) => void,
): Group => {
	const rules: Rule[] = [];
	const push = (rule: Rule) => rules.push(rule);
	const subgroup = (group: Group) => group.rules.forEach(push);
	method(push, subgroup);
	return { name, rules };
};
