const request = require('postman-request');

// Geocoding
// an address -> lat / long -> weather

// Goal: print the lat/long for los angels
//
//  1. Fire off a new request to the URLexplored in teh browser
//  2. Have the request modal parse it as JSON
//  3. Print both the latitude and longitude to the terminal
//  4. Test your work

const GEOCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRhZGV2czEiLCJhIjoiY2xsMXJkODRoMG5qcTNlcXI1bGFvc3M5cCJ9.3APelssCnRA1j2cAExeGLg&limit=1`;

request({ url: GEOCode, json: true }, (error, response) => {
	console.log(response.body.features[0].center);

	const lng = response.body.features[0].center[0];
	const lat = response.body.features[0].center[1];

	console.log(lng, lat);

	// const URL = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=${lat},${lng}&units=f`;

	// request({ url: URL, json: true }, (error, response) => {
	// 	const { temperature, weather_descriptions, feelslike } =
	// 		response.body.current;
	// });
	// console.log(
	// 	`It is currently ${temperature} degrees out, but it feels like ${feelslike}. It is ${[
	// 		...weather_descriptions,
	// 	]} out there today`
	// );
});
