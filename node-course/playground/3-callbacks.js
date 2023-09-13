// asynchronous function
setTimeout(() => {
	console.log('two seconds are up');
}, 2000);

const names = ['andrew', 'jen', 'jess'];
const shortNames = names.filter((name) => name.length <= 4);
console.log(shortNames);

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longitude: 0,
		};

		callback(data);
	}, 2000);
};

geocode('Riyadh', (data) => {
	console.log(data);
});

//
// Goal: Mess around with the callback pattern
//

// 1. define an add function that accepts the correct arguments
// 2. use timeout to simulate a 2 second delay
// 3. after two seconds, call the callback function with the sum
// 4. test your work

const add = (num1, num2, callback) => {
	setTimeout(() => {
		const sum = num1 + num2;
		callback(sum);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum);
});

const doWorkCallback = (callback) => {
	setTimeout(() => {
		// triggering n error
		// callback('this is my error');
		// triggering a success
		callback(undefined, [1, 4, 7]);
	}, 2000);
};

doWorkCallback((error, result) => {
	if (error) {
		console.error(error);
	}

	console.log(result);
});
