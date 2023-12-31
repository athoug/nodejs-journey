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

	// +++++++++++  DELETE DATA  +++++++++++

	// ---------- delete one  ----------

	// ---------- delete many  ----------
	users
		.deleteMany({ age: 28 })
		.then((result) => console.log(result))
		.catch((error) => console.error(error));
	// ---------- Challenge ----------
	//  goal: use delete one to delete one tasks
	//
	// 1. grab the description of the task you want to remove
	// 2. setup the call with the query
	// 3. use promise methods to setup the success/error handlers
	// 4. test your work

	tasks
		.deleteOne({
			description: 'Oud class',
		})
		.then((result) => console.log(result))
		.catch((error) => console.error(error));

	return 'done.';
}

main().then(console.log).catch(console.error);
// .finally(() => client.close());
