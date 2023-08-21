const request = require('postman-request');

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=pk.eyJ1IjoiYWRhZGV2czEiLCJhIjoiY2xsMXJkODRoMG5qcTNlcXI1bGFvc3M5cCJ9.3APelssCnRA1j2cAExeGLg&limit=1`;

	request({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('unable to connect to location service', undefined);
		} else if (body.features.length === 0) {
			callback('unable to find location. Try another search.', undefined);
		} else {
			const lng = body.features[0].center[0];
			const lat = body.features[0].center[1];
			const location = body.features[0].place_name;

			callback(undefined, {
				lat,
				lng,
				location,
			});
		}
	});
};

module.exports = geocode;
