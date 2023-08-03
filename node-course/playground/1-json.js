// import teh file system module
const fs = require('fs');

// javascript object
const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
};

// convert javascript object to JSON
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// convert JSON string to a javascript object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// write / save data to a file (in this case a json file)
// fs.writeFileSync('1-json.json', bookJSON);

// access / read data from a json file
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
