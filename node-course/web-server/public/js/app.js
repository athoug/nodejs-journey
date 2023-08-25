// I'll be using a dummy fetch api https://dummyjson.com/
// parameters are
// 1. url
// then attaching a then clause

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const desc = document.querySelector('#description');

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(event.target[0].value);

	const location = search.value;

	info = `
					<div class='loading'>
						<img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9vZnZ4eHg0MXV2YTB0ZWphNThxcjcwN3VpY3V4eDFiMjVubXpvZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/200.gif' />
					</div>
				`;
	desc.innerHTML = info;

	url = 'http://localhost:3000/weather?address=' + location;
	fetch(url).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				console.log(data.error);
				info = `
					<div class='error'>
							${data.error}
					</div>
				`;
				desc.innerHTML = info;
			} else {
				console.log(data.location);
				console.log(data.forecast);
				info = `
					<div class='container'>
						<div id='location'>
							${data.location}
						</div>
													
						<div id='forecast'>
							${data.forecast}
						</div>
					</div>
				`;
				desc.innerHTML = info;
			}
		});
	});
});
