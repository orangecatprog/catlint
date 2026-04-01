import type { IRFile } from '@ir/models/File';
import type { Message } from '@rules/models/message/model';

export type RuleFn = (file: IRFile) => Message[];

export interface Rule {
	name: string;
	fn?: RuleFn;
	subrules?: Rule[];
}

export interface AdaptedRule extends Rule {
	fn: RuleFn;
	subrules: AdaptedRule[];
}
