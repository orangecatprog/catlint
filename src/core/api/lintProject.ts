import type { NormalizedConfig } from '@config/types/config';
import { loadFiles } from 'src/shared/pattern/loadFiles';
import { lintFile } from './linter';
import type { IRFile } from '@ir/models/File';
import * as fs from 'fs';
import { Minimatch } from 'minimatch';

export const lintProject = async (config: NormalizedConfig, projectDir: string) => {
	const files = await loadFiles(projectDir, config.lint.includes, config.lint.excludes);
	return files
		.map((filePath: string) => {
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const parser = config.parsers.find((parser) =>
				new Minimatch(parser.pattern).match(filePath),
			);
			if (!parser) console.error(`No parser found for file ${filePath}`);
			return parser?.parser(fileContent, filePath) ?? ({} as IRFile);
		})
		.map((file: IRFile) => lintFile(file, config.rules));
};
