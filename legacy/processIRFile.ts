import type { Rule } from "../src/rules/models/Rule";
import type { IRFile, IRNode } from "../src/core/models";

export const rules: Rule[] = [];

export const processIRFile = (file: IRFile) => {
	const errors: { message: string; line: number }[] = [];

	rules.forEach(rule => {
		const rulefn = rule.fn;
		const walk = (nodes: IRNode[]) => {
			nodes.forEach(node => {
				const ruleResult = rulefn(file);
				if (ruleResult) errors.push({message: ruleResult, line: node.line});
				walk(node.value);
			});
		}
		walk(file.program);
	})


	return errors;
};
