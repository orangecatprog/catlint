import { IRKind } from "@ir/shared/Node";
import { Level } from "@rules/shared/message/model";
import type { Rule } from "@rules/shared/rule/model";
import { flattenNodes } from "./utils";

export const noUnusedClasses: Rule = (file) => {
	const allNodes = flattenNodes(file.program);
	const declaredClasses = allNodes.filter((n) => n.kind === IRKind.Class);
	const referencedNames = new Set(
		allNodes
			.filter((n) => n.kind !== IRKind.Class)
			.map((n) => n.name),
	);

	for (const cls of declaredClasses) {
		if (!referencedNames.has(cls.name)) {
			return {
				message: `Class '${cls.name}' is declared but never used.`,
				line: cls.line,
				level: Level.Warning,
			};
		}
	}

	return null;
};
