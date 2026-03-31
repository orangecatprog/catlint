import type { Rule } from '@rules/models/rule/model';

export interface Config {
	lint: {
		includes: string[];
		excludes: string[];
		fileExtensions: string[];
	};
	parsers: {
		pattern: string;
		parser: (file: string) => string;
	}[];
	rules: Rule[];
}
