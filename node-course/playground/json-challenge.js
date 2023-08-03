// 1. I need the file system
const fs = require('fs');

// 2. I need to load in the data from the json file, convert the buffer to json, convert the json to object
const bufferData = fs.readFileSync('2-json.json');
const jsonData = bufferData.toString();
const data = JSON.parse(jsonData);

// 3. change the data to reflect my info
data.name = 'Athoug';
data.age = 33;

// 4. convert object to json string and write to file
const jsonString = JSON.stringify(data);
fs.writeFileSync('2-json.json', jsonString);

console.log(data);
