import { defaultAdapter } from '@rules/helpers/defaultAdapter';
import type { Config, NormalizedConfig } from './config';

export const adaptConfig: (c: Config) => NormalizedConfig = (config: Config) => {
	const normalizedConfig: NormalizedConfig = {
		...config,
		rules: config.rules.map((rule) => defaultAdapter(rule)),
	};
	return normalizedConfig;
};
