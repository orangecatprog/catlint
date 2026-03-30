import type { Rule } from '@rules/$/models/rule/model';

export interface Group {
	name: string;
	rules: Rule[];
}
