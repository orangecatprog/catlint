import type { IRFile } from '@ir/File';
import type { Message } from 'src/rules/message/model';

export type Rule = (file: IRFile) => Message | null;
