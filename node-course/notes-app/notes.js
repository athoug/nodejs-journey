const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	console.log('your notes....');
};

const addNote = (title, body) => {
	// 1. load in the notes
	const notes = loadNotes();

	// safety check: check if the title exists
	const duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length == 0) {
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
	getNotes,
	addNote,
	removeNote,
	listNotes,
};
