import type { Rule } from "src/rules/shared/rule/model";

export interface Group {
	name: string;
	rules: Rule[];
}
