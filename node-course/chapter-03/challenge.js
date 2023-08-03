const fs = require('fs');

const challenges = `challenge 1- add two new commands
  1. setup command to support "list" command (print placeholder message for now)
  2. setup command to support "read" command (print placeholder message for now)
  3. test your work by running both commands and ensure correct output
  
---------------------------------------------------

challenge 2 - add an option to yargs
  1. setup a body option for the add command
  2. configure a description, make it required, and for it to be a string
  3. log the body in the handler function 
  4. test your code

---------------------------------------------------

challenge 3 - work with json and teh file system
  1. load and parse the json data
  2. change the name and age property using your info
  3. stringify the changed object and overwrite the original data
  4. test your work by viewing data in the json file

---------------------------------------------------

challenge 4 - setup command and options function
  1. setup the remove command to take a required "--title" option
  2. create and export a removeNote function from notes.js
  3. call removeNote in remove command handler
  4. have the removeNote log the title of the note to be removed
  5. test your work using: node app.js remove --title="some title

---------------------------------------------------

challenge 5 - wire up removeNotes
  1. load existing notes
  2. use array filter method to remove hte matching notes (if any)
  3. save the newly created array
  4. test your work with a title that exists and a title that doesn't 

---------------------------------------------------

challenge 6- use chalk to provide useful logs for remove
  1. if a note is removed, print "Note removed!" with a green background
  2. if no note is removed, print "No note found!" with a red background
  
---------------------------------------------------

challenge 7- wire up the list command
  1. create and export listNotes from notes.js
    - "your notes " using chalk 
    - print note title for each note
  2. call listNote from command handler
  3. test your work 
  `;

fs.appendFileSync('challenges.txt', challenges);
