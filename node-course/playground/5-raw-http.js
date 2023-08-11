const http = require('http');

let lat = 45;
let lng = -75;
const url = `http://api.weatherstack.com/current?access_key=f560eb9405f6ba08cbae792334f898ed&query=${lat},${lng}&units=m`;

const request = http.request(url, (response) => {
	let data = '';

	response.on('data', (chunk) => {
		data += chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});

	request.on('error', (error) => {
		console.log('An error:', error);
	});
});

request.end();
