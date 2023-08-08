const request = require('postman-request');

const URL = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=37.8267,-122.4233&units=f`;

request({ url: URL, json: true }, (error, response) => {
	console.log(response.body.current);
	const { temperature, weather_descriptions, feelslike } =
		response.body.current;
	//
	// Goal: print a small forecast to the user
	//
	// 1. print: "It is currently 58.88 degrees out. There is 0% chance of rain."
	// 2. test your work

	console.log(
		`It is currently ${temperature} degrees out, but it feels like ${feelslike}. It is ${[
			...weather_descriptions,
		]} out there today`
	);
});
