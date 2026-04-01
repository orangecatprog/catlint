import type { NormalizedConfig } from '@config/types/config';
import { adaptConfig } from '@config/types/configAdapter';
import path from 'path';
import { pathToFileURL } from 'url';

export const loadConfigFromFile = async (filePath: string): Promise<NormalizedConfig | null> => {
	try {
		const config = await import(pathToFileURL(filePath).href);
		return adaptConfig(config.default);
	} catch {
		console.log(`No config file found at ${filePath}`);
		return null;
	}
};

export const loadConfig = async (projectPath: string): Promise<NormalizedConfig> => {
	const configPath = path.join(process.cwd(), projectPath) + '/catlint.config';

	const config =
		(await loadConfigFromFile(configPath + '.js')) ??
		(await loadConfigFromFile(configPath + '.ts'));
	if (!config) {
		throw new Error('No config file found');
	}

	return config;
};
