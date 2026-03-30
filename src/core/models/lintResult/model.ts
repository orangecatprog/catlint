import type { Message } from '@rules/models/message/model';

export type LintResult = {
	name: string;
	messages: Message[];
	subrules: LintResult[];
	isCorrect: boolean;
};
