import type { Rule } from 'src/rules/rule/model';

export interface Group {
	name: string;
	rules: Rule[];
}
