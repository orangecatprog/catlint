import { IRKind } from '@ir/models/Node';
import { Level, type Message } from '@rules/models/message/model';
import type { Rule } from '@rules/models/rule/model';
import { flattenNodes } from '../utils';
import { createRule } from '@rules/models/rule/service';

export const noUnusedClasses: Rule = createRule('No unused classes', (file) => {
	const messages: Message[] = [];
	const allNodes = flattenNodes(file.program);
	const declaredClasses = allNodes.filter((n) => n.kind === IRKind.Class);
	const referencedNames = new Set(
		allNodes.filter((n) => n.kind !== IRKind.Class).map((n) => n.name),
	);

	for (const cls of declaredClasses) {
		if (!referencedNames.has(cls.name)) {
			messages.push({
				message: `Class '${cls.name}' is declared but never used.`,
				line: cls.line,
				level: Level.Error,
			});
		}
	}

	return messages;
});
