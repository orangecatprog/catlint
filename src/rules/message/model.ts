export enum Level {
	Error,
	Warning,
	Info,
}

export interface Message {
	message: string;
	line: number;
	level: Level;
}
