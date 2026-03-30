import type { IRNode } from './Node';

export interface IRFile {
	name: string;
	extensions: string[];
	program: IRNode[];
}
