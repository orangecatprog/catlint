import { IRKind, type IRNode } from "../../src/core/models";
import type { Rule } from "../../src/rules/models/Rule";

export const voidFunctionRule: Rule = () => (node, file) => {
	if (node.kind !== IRKind.Function) return null;

	if (node.value.length === 0) return `[${file.name}] Función ${node.name} sin código`;

	return null;
}

export const noUsageRule: Rule = () => (node, file) => {
	if (node.kind !== IRKind.Function && node.kind !== IRKind.Class) return null;

	const name = node.name;

	const isUsed = (searchName: string, nodes: IRNode[], skipNode: IRNode): boolean => {
		for (const n of nodes) {
			if (n === skipNode) continue;

			if (n.name === searchName) return true;

			if (n.value.some(v => v.name === searchName)) return true;

			if (isUsed(searchName, n.value, skipNode)) return true;
		}
		return false;
	};

	const used = isUsed(name, file.program, node);

	if (!used) {
		return `[${file.name}] ${node.kind === IRKind.Function ? "Función" : "Clase"} "${name}" no se usa en ningún lugar`;
	}

	return null;
};

const yagniRules = [voidFunctionRule, noUsageRule];

export const yagniRule: Rule = () => {
	console.log("YAGNI RULES");
	return (node, file) => {
		for (const rule of yagniRules) {
			const result = rule()(node, file);
			if (result) return result;
		}
		return null;
	}
};
