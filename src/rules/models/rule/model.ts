import type { IRFile } from '@ir/$/models/File';
import type { Message } from '@rules/$/models/message/model';

export type Rule = (file: IRFile) => Message[];
