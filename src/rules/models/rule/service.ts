import type { IRFile } from '@ir/models/File';
import type { Message } from '../message/model';
import type { Rule } from './model';

export const createRule = (
	name: string,
	fn: (file: IRFile) => Message[],
	subrules: Rule[] = [],
): Rule => ({
	name,
	fn,
	subrules,
});
