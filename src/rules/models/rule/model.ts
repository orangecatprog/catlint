import type { IRFile } from '@ir/$/models/File';
import type { Message } from '@rules/$/models/message/model';

export type Rule = {
	name: string;
	fn: (file: IRFile) => Message[];
	subrules: Rule[];
};
