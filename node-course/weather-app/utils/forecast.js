const request = require('postman-request');

const forecast = (lat, lng, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=${lat},${lng}&units=f`;

	request({ url, json: true }, (error, response) => {
		if (error) {
			callback('unable to connect to location service', undefined);
		} else if (response.body.error) {
			callback('unable to find location. Try another search.', undefined);
		} else {
			const { temperature, weather_descriptions, feelslike } =
				response.body.current;

			callback(undefined, {
				temp: temperature,
				desc: weather_descriptions,
				feel: feelslike,
			});
		}
	});
};

module.exports = forecast;
