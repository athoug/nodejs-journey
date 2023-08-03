const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');
const utils = require('./utils');

// setup app version using yargs
yargs.version('1.0.0');

// setup commands
// add
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: function () {
		console.log('adding a new note');
	},
});

// remove
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('removing the note');
	},
});

// list
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: function () {
		console.log('listing all the note');
	},
});

// read
yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function () {
		console.log('reading a note');
	},
});

console.log(yargs.argv);
