// I'll be using a dummy fetch api https://dummyjson.com/
// parameters are
// 1. url
// then attaching a then clause
const num = randomInteger(0, 100);

fetch(`https://dummyjson.com/quotes/${num}`).then((response) => {
	response.json().then((data) => {
		console.log(data);
	});
});

// stack overflow explaining the random method
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomInteger(min = 0, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
