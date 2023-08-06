const request = require('postman-request');

const url = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=37.8267,-122.4233`;

request({ url }, (error, response) => {
	const data = JSON.parse(response.body);
	console.log(data.current);
});
