import type { IRFile, IRNode } from "../../core/models";
import type { Message } from "./Message";

export type Rule = (file: IRFile) => Message | null;
