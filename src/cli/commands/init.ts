import inquirer from 'inquirer';
import * as fs from 'fs';
import { defaultConfig } from '@config/index';
import { inspect } from 'util';

export const init = async () => {
	const { useTypescript } = await inquirer.prompt([
		{
			type: 'confirm',
			name: 'useTypescript',
			message: 'Do you want to use typescript?',
			default: true,
		},
	]);

	fs.writeFileSync(
		`catlint.config.${useTypescript ? 'ts' : 'js'}`,
		`import { defineConfig } from 'catlint/config';

export default defineConfig(${inspect(defaultConfig)});
`,
	);
};
