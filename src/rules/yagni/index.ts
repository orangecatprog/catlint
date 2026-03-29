import type { Group } from "../shared/group/model";
import { noUnusedClasses } from "./no-unused-classes";
import { noUnusedFunctions } from "./no-unused-functions";
import { noUnusedVariables } from "./no-unused-variables";

export const yagniGroup: Group = {
	name: "YAGNI",
	rules: [noUnusedVariables, noUnusedFunctions, noUnusedClasses],
};
