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

const challenges = `challenge 1- append a message to notes.txt
  1. use appendFileSync to append to the file
  2.run the script
  3.check your work by opening the file and viewing the appended text
  
---------------------------------------------------

challenge 2 - define and use a function in a new file
  1. create a new file called notes.js
  2. create getNotes function that returns "your notes ...."
  3. export getNotes function
  4. from app.js load in and call the function printing the message in the console

---------------------------------------------------

challenge 3 - use the chalk library in your project (npm package)
  1. install chalk
  2. load chalk into app.js
  3. use it to print the string "success!" to the console in green
  4. test your work

  bonus: use docs to mess around with other styles. make text bold and inverse

  `;

fs.appendFileSync('challenges.txt', challenges);
