import { IRKind } from "@ir/shared/Node";
import { Level } from "@rules/shared/message/model";
import type { Rule } from "@rules/shared/rule/model";
import { flattenNodes } from "./utils";

export const noUnusedVariables: Rule = (file) => {
	const allNodes = flattenNodes(file.program);
	const declaredVariables = allNodes.filter((n) => n.kind === IRKind.Variable);
	const referencedNames = new Set(
		allNodes
			.filter((n) => n.kind !== IRKind.Variable)
			.map((n) => n.name),
	);

	for (const variable of declaredVariables) {
		if (!referencedNames.has(variable.name)) {
			return {
				message: `Variable '${variable.name}' is declared but never used.`,
				line: variable.line,
				level: Level.Warning,
			};
		}
	}

	return null;
};
