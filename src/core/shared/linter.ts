import type { LintResult } from '@core/models/lintResult/model';
import type { IRFile } from '@ir/models/File';
import type { Group } from '@rules/models/group/model';

export function lint(file: IRFile, rules: Group[]): LintResult[] {
	const results: LintResult[] = [];

	rules.forEach((group) => {
		const messages = group.rules.flatMap((rule) => rule(file));
		results.push({ ...group, messages });
	});

	return results;
}
