import { IRKind, type IRFile, type IRNode } from "../../src/core/models";
import type { Rule } from "../../src/rules/models/Rule";

export const dryRule: Rule =  () => (node: IRNode, file: IRFile) => { 
	if (node.kind !== IRKind.Codeline) return null;
	
	const duplicated = node.value.find(n => n.kind === IRKind.Codeline && n.name === node.name);

	if (!duplicated) return null;

	return `[${file.name}] Línea ${node.name}`;
}
