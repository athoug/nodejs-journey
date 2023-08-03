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
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'the text body of the note',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// remove
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		notes.removeNote(argv.title);
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

yargs.parse();

// console.log(yargs.argv);
