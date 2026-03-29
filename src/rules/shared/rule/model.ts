import type { IRFile } from "src/ir/models";
import type { Message } from "src/rules/shared/message/model";

export type Rule = (file: IRFile) => Message | null;
