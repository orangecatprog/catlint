import type { IRFile } from "@ir/shared/File";
import { IRKind } from "@ir/shared/Node";
import { noUnusedClasses } from "@rules/yagni/no-unused-classes";
import { noUnusedFunctions } from "@rules/yagni/no-unused-functions";
import { noUnusedVariables } from "@rules/yagni/no-unused-variables";

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

const rules = [noUnusedClasses, noUnusedFunctions, noUnusedVariables];

rules.forEach((rule) => {
	const message = rule(file);
	if (message) {
		console.log(message);
	}
});
