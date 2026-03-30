export enum Level {
	Error = 'ERROR',
	Warning = 'WARNING',
	Info = 'INFO',
}

export interface Message {
	message: string;
	line: number;
	level: Level;
}
