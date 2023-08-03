const fs = require('fs');

const challenges = `challenge 1- add two new commands
  1. setup command to support "list" command (print placeholder message for now)
  2. setup command to support "read" command (print placeholder message for now)
  3. test your work by running both commands and ensure correct output
  
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
