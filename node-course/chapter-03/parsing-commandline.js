const yargs = require('yargs');

// customize yargs version
yargs.version('1.0.0');

// add commands ...
// create add command
yargs.command({
	command: 'add',
	describe: 'add a new note',
	handler: function () {
		console.log('adding a new note');
	},
});

// create remove command
yargs.command({
	command: 'remove',
	describe: 'remove a note',
	builder: {
		title: {
			describe: 'the title of the note',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		console.log('removing the note titled ', argv.title);
	},
});

console.log(process.argv);
console.log(yargs.argv);
