const express = require('express');
const port = 3000;

const app = express();

// app.com
// this is called the root url
app.get('/', (req, res) => {
	res.send('<h1>Weather ⛅️</h1>');
});

// app.com/help
app.get('/help', (req, res) => {
	res.send([
		{
			name: 'Andrew',
			age: 27,
		},
		{
			name: 'Sarah',
			age: 33,
		},
	]);
});

// app.com/about
app.get('/about', (req, res) => {
	res.send('<h1>this is where the about page will reside</h1>');
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
