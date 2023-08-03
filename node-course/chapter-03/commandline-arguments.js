const chalk = require('chalk');

console.log(chalk.magenta.inverse('Hello'));

// accessing command line arguments through the process variable
console.log(process.argv[2]);
