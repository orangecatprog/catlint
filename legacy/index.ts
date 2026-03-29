import { IRKind, type IRFile } from "../src/core/models";
import { processIRFile, rules } from "./processIRFile";
import { dryRule } from "./services/dry";
import { yagniRule } from "./services/yagni";

const code: IRFile = {
	name: "file.ts",
	extensions: ["ts"],
	program: [
		{
			kind: IRKind.Function,
			name: "function1",
			value: [
				{
					kind: IRKind.Function,
					name: "function2",
					value: [
						{
							kind: IRKind.Function,
							name: "function3",
							value: [],
						},
					],
				},
			],
		},
		{
			kind: IRKind.Function,
			name: "function4",
			value: [
				{
					kind: IRKind.Function,
					name: "function17",
					value: [
						{
							kind: IRKind.Function,
							name: "function14",
							value: [],
						},
					],
				},
			],
		},
		{
			kind: IRKind.Class,
			name: "class1",
			value: [],
		},
    ],
}
rules.push(yagniRule);


const text = processIRFile(code);

console.log(text);
