import type { Config, NormalizedConfig } from '@config/types/config';
import { defaultAdapter } from '@rules/helpers/defaultAdapter';

export function defineConfig(config: Config): NormalizedConfig {
	const normalizedConfig: NormalizedConfig = {
		...config,
		rules: config.rules.map((rule) => defaultAdapter(rule)),
	};
	return normalizedConfig;
}
