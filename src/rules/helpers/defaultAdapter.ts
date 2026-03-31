import type { AdaptedRule, Rule } from '@rules/models/rule/model';

const EMPTY_FN = () => [];

/**
 * @function defaultAdapter recursively adapts a Rule to an AdaptedRule by providing default values for undefined/null fields.
 *
 * @param rule the rule to adapt
 * @returns a AdaptedRule without undefined/null fields
 *
 */
export const defaultAdapter = (rule: Rule): AdaptedRule => {
	const { name, fn = EMPTY_FN, subrules = [] } = rule;

	return {
		name,
		fn,
		subrules: subrules.map(defaultAdapter),
	};
};
