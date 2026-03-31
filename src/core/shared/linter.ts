import type { LintResult } from '@core/models/lintResult/model';
import type { IRFile } from '@ir/models/File';
import type { AdaptedRule } from '@rules/models/rule/model';

export function travelFile(file: IRFile) {
	const travelRule: (rule: AdaptedRule) => LintResult = (rule) => {
		return {
			name: rule.name,
			messages: rule.fn(file),
			subrules: rule.subrules.map(travelRule),
			isCorrect:
				rule.fn(file).length === 0 && rule.subrules.every((r) => travelRule(r).isCorrect),
		};
	};
	return travelRule;
}

export function lintFile(file: IRFile, rules: AdaptedRule[]): LintResult[] {
	const results: LintResult[] = rules.map((rule) => travelFile(file)(rule));

	return results;
}
