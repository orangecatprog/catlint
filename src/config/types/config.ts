import type { IRParser } from '@ir/models/IRParser';
import type { AdaptedRule, Rule } from '@rules/models/rule/model';

export interface Config {
	lint: {
		includes: string[];
		excludes: string[];
	};
	parsers: {
		pattern: string;
		parser: IRParser;
	}[];
	rules: Rule[];
}

export interface NormalizedConfig extends Config {
	rules: AdaptedRule[];
}

export const defaultConfig: NormalizedConfig = {
	lint: {
		includes: ['**/*.ts'],
		excludes: ['node_modules/**'],
	},
	parsers: [],
	rules: [],
};
