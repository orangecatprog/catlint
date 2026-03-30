import { lintFile } from "@core/linter";
import type { LintResult } from "@core/models/lintResult/model";
import type { IRFile } from "@ir/$/models/File";
import { IRKind } from "@ir/$/models/Node";
import { yagniRules } from "@rules/yagni";
const file: IRFile = {
	name: "test.ts",
	extensions: ["ts"],
	program: [
		{
			line: 1,
			kind: IRKind.Codeline,
			name: "test",
			value: [
				{
					line: 2,
					kind: IRKind.Function,
					name: "test",
					value: [
						{
							line: 3,
							kind: IRKind.Variable,
							name: "test",
							value: [],
						},
					],
				},
			],
		},
		{
			line: 4,
			kind: IRKind.Class,
			name: "test2",
			value: [],
		},

		{
			line: 5,
			kind: IRKind.Variable,
			name: "test9",
			value: [],
		},

		{
			line: 6,
			kind: IRKind.Literal,
			name: "test",
			value: [],
		},
	],
};

const rules = [yagniRules]

const lres = lintFile(file, rules);

console.log(JSON.stringify(lres, null, 2));

let indent = 0;

const print = (result: LintResult) => {
	const char = result.isCorrect ? "✓" : "✗";
	console.log(`${" ".repeat(indent)}${char} ${result.name}`);
	indent += 2;
	result.messages.forEach((message) => {
		console.log(`${" ".repeat(indent)}[${message.level}] Line ${message.line}: ${message.message}`);
	});
	result.subrules.forEach(print);
	indent -= 2;
}

lres.forEach(print);
