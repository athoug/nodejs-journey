const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);

	if (note) {
		console.log(chalk.inverse.blue('Title: ' + note.title));
		console.log(chalk.blue('body: ' + note.body));
	} else {
		console.log(chalk.bold.red('Error: the node does not exist'));
	}
};

const addNote = (title, body) => {
	// 1. load in the notes
	const notes = loadNotes();

	// safety check: check if the title exists
	const duplicateNote = notes.find((note) => note.title === title);

	debugger;

	if (!duplicateNote) {
		// 2. add the new note to the array
		notes.push({ title, body });
		// 3. save the note
		saveNotes(notes);
		console.log(chalk.green.bold('Noted added'));
	} else {
		console.log(chalk.bold.red('Note title taken'));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);

	if (notesToKeep.length < notes.length) {
		saveNotes(notesToKeep);
		console.log(chalk.inverse.green('Note removed!'));
	} else {
		console.log(chalk.inverse.red('No Note found!'));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	if (notes.length > 0) {
		console.log(chalk.bold.inverse('Your notes'));
		notes.forEach((note) => console.log('-', note.title));
	} else {
		console.log(chalk.bold.yellow('You do not have any notes'));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

// load notes, if it doesn't exist return an empty array
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJson = dataBuffer.toString();
		return JSON.parse(dataJson);
	} catch (e) {
		return [];
	}
};

module.exports = {
	readNote,
	addNote,
	removeNote,
	listNotes,
};
