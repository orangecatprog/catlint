import { IRKind } from '@ir/models/Node';
import { Level, type Message } from '@rules/models/message/model';
import type { Rule } from '@rules/models/rule/model';
import { flattenNodes } from '../utils';

export const noUnusedVariables: Rule = (file) => {
	const messages: Message[] = [];
	const allNodes = flattenNodes(file.program);
	const declaredVariables = allNodes.filter((n) => n.kind === IRKind.Variable);
	const referencedNames = new Set(
		allNodes.filter((n) => n.kind !== IRKind.Variable).map((n) => n.name),
	);

	for (const variable of declaredVariables) {
		if (!referencedNames.has(variable.name)) {
			messages.push({
				message: `Variable '${variable.name}' is declared but never used.`,
				line: variable.line,
				level: Level.Error,
			});
		}
	}

	return messages;
};
