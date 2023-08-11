const request = require('postman-request');

const forecast = (lat, lng, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=${lat},${lng}&units=m`;

	request({ url, json: true }, (error, response) => {
		if (error) {
			callback('unable to connect to location service', undefined);
		} else if (response.body.error) {
			callback('unable to find location. Try another search.', undefined);
		} else {
			const { temperature, weather_descriptions, feelslike } =
				response.body.current;

			// data = {
			// 	temp: temperature,
			// 	desc: weather_descriptions,
			// 	feel: feelslike,
			// };
			callback(
				undefined,
				`It is currently ${temperature} degrees out, but it feels like ${feelslike}. It is ${[
					...weather_descriptions,
				]} out there today`
			);
		}
	});
};

module.exports = forecast;
