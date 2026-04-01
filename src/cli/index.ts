#!/usr/bin/env node
import { Command } from 'commander';
import { init } from './commands/init';

const program = new Command();

program.name('catlint').description('A linter for detecting code bad practices').version('0.0.1');

program
	.command('init')
	.description('Inits CatLint in your current project folder')
	.action(async () => await init());
