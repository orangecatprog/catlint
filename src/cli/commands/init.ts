import inquirer from 'inquirer';

export const init = async () => {
	inquirer.prompt([
		{
			type: 'confirm',
			name: 'useTypescript',
			message: 'Do you want to use typescript?',
			default: true,
		},
	]);
};
