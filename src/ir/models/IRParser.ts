import type { IRFile } from './File';

export type IRParser = (filename: string, content: string) => IRFile;
