const path = require('path');
const express = require('express');
const { log } = require('console');

const app = express();
const port = 3000;

// define paths for express configs
const publicDirectory = path.join(__dirname, '../public');
const viewsDirectory = path.join(__dirname, '../templates');

// setup handle bars engine and views location
app.set('view engine', 'hbs'); // this line sets teh templeting engine
app.set('views', viewsDirectory); // i need to set up the views directory otherwise it wont work

// a single line to serve the directory, we add it after initiating express
// this is a middleware it allows us to add stuff to our app
// in this case we are adding static files
// in a directory we just declared above
// setup static directory to serve
app.use(express.static(publicDirectory)); // this method is a way to customize our server
console.log(path.join(__dirname, '../views'));

// app.com
// this is called the root url
app.get('', (req, res) => {
	res.render('index', { title: 'Weather', name: 'Andrew meed' });
});

// about
app.get('/about', (req, res) => {
	res.render('about', { title: 'what about me?' });
});

//help
app.get('/help', (req, res) => {
	res.render('help', {
		message: 'what do you need help with first',
	});
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
