const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve([7, 4, 1]);
		reject('things went wrong');
	}, 2000);
});

doWorkPromise
	.then((result) => {
		console.log('Success', result);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

//
//
//                                        fulfilled
//                                     /
//     promise         -- pending -->
//                                     \
//                                        rejected
//
//
