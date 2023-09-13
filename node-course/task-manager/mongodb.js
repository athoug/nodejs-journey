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

	// +++++++++++  READING DATA  +++++++++++

	// ---------- find one  ----------
	const adwa = await users.findOne({ name: 'adwa' });
	console.log(adwa);

	const byId = await users.findOne({
		_id: new mongodb.ObjectId('6501b04fe9b719a2a462eda9'),
	});
	console.log(byId);

	// ---------- find  ----------
	const age30 = await users.find({ age: 33 }).toArray();
	console.log(age30);

	const age30count = await users.find({ age: 33 }).count();
	console.log(age30count);

	// ---------- Challenge ----------
	//  goal:use find and findOne with tasks
	//
	// 1 use findOne to fetch teh last task by id (print doc to console)
	// 2. use find to fetch all tasks that are not completed (print docs to console)
	// 3.test your work

	const youtube = await tasks.findOne({
		_id: new mongodb.ObjectId('6501a924ba855c7c7f110ede'),
	});
	console.log(youtube);

	const unfinished = await tasks.find({ completed: false }).toArray();
	console.log(unfinished);

	return 'done.';
}

main().then(console.log).catch(console.error);
// .finally(() => client.close());
