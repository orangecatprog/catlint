import type { IRFile } from '@ir/models/File';
import type { Message } from '@rules/models/message/model';

export interface Rule {
	name: string;
	fn?: (file: IRFile) => Message[];
	subrules?: Rule[];
}

export interface AdaptedRule extends Rule {
	fn: (file: IRFile) => Message[];
	subrules: AdaptedRule[];
}
