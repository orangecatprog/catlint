import { IRKind } from '@ir/models/Node';
import { Level, type Message } from '@rules/models/message/model';
import type { Rule } from '@rules/models/rule/model';
import { flattenNodes } from '../utils';
import { createRule } from '@rules/models/rule/service';

export const noUnusedFunctions: Rule = createRule('No unused functions', (file) => {
	const messages: Message[] = [];
	const allNodes = flattenNodes(file.program);
	const declaredFunctions = allNodes.filter((n) => n.kind === IRKind.Function);
	const referencedNames = new Set(
		allNodes.filter((n) => n.kind !== IRKind.Function).map((n) => n.name),
	);

	for (const fn of declaredFunctions) {
		if (!referencedNames.has(fn.name)) {
			messages.push({
				message: `Function '${fn.name}' is declared but never called.`,
				line: fn.line,
				level: Level.Error,
			});
		}
	}

	return messages;
});
