export enum IRKind {
	Codeline,
	Literal,
	Function,
	Class,
	Variable,
}

export interface IRNode {
	line: number;
	kind: IRKind;
	name: string;
	value: IRNode[];
}
