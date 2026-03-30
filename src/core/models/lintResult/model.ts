import type { Group } from '@rules/models/group/model';
import type { Message } from '@rules/models/message/model';

export type LintResult = Group & {
	messages: Message[];
};
