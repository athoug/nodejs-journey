//  file to explore mongoDB operations
// specifically teh CRUD
// C -> create
// R -> read
// U -> update
// D -> delete

const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

// we need to initialize the connection
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const client = new MongoClient(connectionURL);

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('connected correctly');

	const db = client.db(databaseName);
	const users = db.collection('users');
	const tasks = db.collection('tasks');

	// +++++++++++  UPDATING DATA  +++++++++++

	// ---------- update one  ----------
	users
		.updateOne(
			{ _id: new mongodb.ObjectId('6501a4843a92f227d8543708') },
			{
				// $set: { name: 'mike' },
				// $inc: { age: 1 },
			}
		)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});

	// ---------- update many  ----------

	// ---------- Challenge ----------
	//  goal: use updateMany to complete all tasks
	//
	// 1. check the documentation for updateMany
	// 2. setup the call with the query and the updates
	// 3. use promise methods to setup the success/error handlers
	// 4. test your work

	tasks
		.updateMany({ completed: false }, { $set: { completed: true } })
		.then((result) => console.log(result))
		.catch((error) => {
			console.log(error);
		});
	return 'done.';
}

main().then(console.log).catch(console.error);
// .finally(() => client.close());
