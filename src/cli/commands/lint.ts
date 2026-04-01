import { defaultConfig, loadConfig } from '@config/index';
import { lintProject } from '@core/api/lintProject';

export const lint = async () => {
	const config = (await loadConfig('.')) ?? defaultConfig;
	lintProject(config, '.');
};
