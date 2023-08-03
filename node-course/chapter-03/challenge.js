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
  4. test your work by viewing data in teh json file


  `;

fs.appendFileSync('challenges.txt', challenges);
