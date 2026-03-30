import { lint } from '@core/linter';
import { IRKind } from '@ir/models/Node';
import { yagniGroup } from '@rules/yagni';

const lres = lint(
	{
		name: 'test',
		program: [
			{
				line: 1,
				kind: IRKind.Codeline,
				name: 'test1',
				value: [],
			},
			{
				line: 2,
				kind: IRKind.Function,
				name: 'test2',
				value: [],
			},
			{
				line: 3,
				kind: IRKind.Variable,
				name: 'test1',
				value: [],
			},
		],
		extensions: ['ts'],
	},
	[yagniGroup],
);

lres.forEach((lresult) => {
	console.log(`Group: ${lresult.name}`);
	lresult.messages.forEach((message) => {
		console.log(`  [${message.level}] Line ${message.line}: ${message.message}`);
	});
});
