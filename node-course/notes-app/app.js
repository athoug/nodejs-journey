const notes = require('./notes');
const utils = require('./utils');
const validator = require('validator');
const chalk = require('chalk');

notes.getNotes();

console.log(validator.isEmail('a@email.com'));
console.log(validator.isURL('a.com'));

console.log(chalk.green.inverse.bold('Success!'));
console.log(
	chalk.rgb(15, 100, 204).inverse.bold('look at me all bold and stuff')
);
