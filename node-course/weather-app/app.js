const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = process.argv.slice(2).join(' ');

if (!place) {
	console.log('Please provide a location.');
} else {
	geocode(place, (error, { lat, lng, location } = {}) => {
		if (error) {
			return console.log('Error', error);
		}

		forecast(lat, lng, (error, data) => {
			if (error) {
				return console.log('Error', error);
			}

			console.log(`- ${location} -`);
			console.log(data);
		});
	});
}
