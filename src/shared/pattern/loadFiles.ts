import { glob } from 'glob';

export const loadFiles = async (baseDir: string, includes: string[], excludes: string[] = []) => {
	const included = (
		await Promise.all(
			includes.map((pattern) => glob(pattern, { cwd: baseDir, absolute: true })),
		)
	).flat();

	const excluded = (
		await Promise.all(
			excludes.map((pattern) => glob(pattern, { cwd: baseDir, absolute: true })),
		)
	).flat();

	return included.filter((file) => !excluded.includes(file));
};
