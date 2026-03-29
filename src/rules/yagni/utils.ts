import type { IRNode } from "@ir/shared/Node";

export function flattenNodes(nodes: IRNode[]): IRNode[] {
	return nodes.flatMap((node) => [node, ...flattenNodes(node.value)]);
}
