import type { IRParser } from '@ir/models/IRParser';
import type { Rule } from '@rules/models/rule/model';

export interface Config {
	lint: {
		includes: string[];
		excludes: string[];
		fileExtensions: string[];
	};
	parsers: {
		pattern: string;
		parser: IRParser;
	}[];
	rules: Rule[];
}
