console.log('client side javascript is loaded');

// I'll be using a dummy fetch api https://dummyjson.com/
// parameters are
// 1. url
// then attaching a then clause

fetch(`http://localhost:3000/weather?address=riyadh`).then((response) => {
	response.json().then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			console.log(data.location);
			console.log(data.forecast);
		}
	});
});
