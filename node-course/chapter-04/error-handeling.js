const request = require('postman-request');

const URL = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=37.8267,-122.4233&units=f`;

request({ url: URL, json: true }, (error, response) => {
	if (error) {
		console.log('unable to connect to weather service');
	} else if (response.body.error) {
		console.log('unable to find location');
	} else {
		const { temperature, weather_descriptions, feelslike } =
			response.body.current;

		console.log(
			`It is currently ${temperature} degrees out, but it feels like ${feelslike}. It is ${[
				...weather_descriptions,
			]} out there today`
		);
	}
});

const GEOCode = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRhZGV2czEiLCJhIjoiY2xsMXJkODRoMG5qcTNlcXI1bGFvc3M5cCJ9.3APelssCnRA1j2cAExeGLg&limit=1`;

request({ url: GEOCode, json: true }, (error, response) => {
	if (error) {
		console.log('unable to connect to mapbox');
	} else if (response.body.features.length == 0) {
		console.log('unable to find location');
	} else {
		const lng = response.body.features[0].center[0];
		const lat = response.body.features[0].center[1];

		console.log(lng, lat);
	}
});
