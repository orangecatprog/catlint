import type { Rule } from "src/rules/shared/rule/model";
import type { Group } from "./model";

export const createGroup = (name: string, method: (push: (rule: Rule) => void, pushRules: (rules: Rule[]) => void) => void): Group => {
	const rules: Rule[] = [];
	const push = (rule: Rule) => rules.push(rule);
	const pushRules = (rules: Rule[]) => rules.forEach(push);
	method(push, pushRules);
	return { name, rules };
};

export const subgroup = (group: Group): Rule[] => group.rules;

