const path = require('path');
const express = require('express');

const app = express();
const port = 3000;
const publicDirectory = path.join(__dirname, '../public');

// a single line to serve the directory, we add it after initiating express
// this is a middleware it allows us to add stuff to our app
// in this case we are adding static files
// in a directory we just declared above
app.use(express.static(publicDirectory)); // this method is a way to customize our server

console.log(__dirname); // the path to my directory the file lives in
console.log(__filename); // the path to the file name
console.log(path.join(__dirname, '../public'));

// app.com
// this is called the root url
app.get('/', (req, res) => {
	res.send('<h1>Weather ⛅️</h1>');
});

// app.com/weather
app.get('/weather', (req, res) => {
	res.send({
		temp: 44,
		desc: 'the weather is super hot today',
		location: 'Riyadh, Saudi Arabia',
	});
});

// starting the server
app.listen(port, () => {
	console.log(`server is up on port ${port}`);
});
