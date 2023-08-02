// where we're work with teh core modules in node
// we'll load them, and then use them
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

// to use a core library I need to first require it or import it
const fs = require('fs');

// import * as fs from 'node:fs';

// fs.writeFileSync('notes.txt', 'My name is athoug.');

// challenge - append a message to notes.txt
// 1. use appendFileSync to append to the file
// 2.run the script
// 3.check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', '\nI am working on learning node js');
