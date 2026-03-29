import { IRKind } from "@ir/shared/Node";
import { Level } from "../shared/message/model";
import type { Rule } from "src/rules/shared/rule/model";
import { flattenNodes } from "./utils";

export const noUnusedFunctions: Rule = (file) => {
	const allNodes = flattenNodes(file.program);
	const declaredFunctions = allNodes.filter((n) => n.kind === IRKind.Function);
	const referencedNames = new Set(
		allNodes
			.filter((n) => n.kind !== IRKind.Function)
			.map((n) => n.name),
	);

	for (const fn of declaredFunctions) {
		if (!referencedNames.has(fn.name)) {
			return {
				message: `Function '${fn.name}' is declared but never called.`,
				line: fn.line,
				level: Level.Warning,
			};
		}
	}

	return null;
};
