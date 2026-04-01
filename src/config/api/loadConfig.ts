import type { Config } from '@config/types/config';
import path from 'path';

export const loadConfigFromFile = async (filePath: string): Promise<Config> => {
	const config = await import(filePath);
	return config.default;
};

export const loadConfig = async (projectPath: string): Promise<Config> => {
	const configPath = path.join(projectPath, '.catlintrc.json');
	return loadConfigFromFile(configPath);
};
