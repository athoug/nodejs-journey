//  file to explore mongoDB operations
// specifically teh CRUD
// C -> create
// R -> read
// U -> update
// D -> delete

const mongodb = require('mongodb');

// we need to initialize the connection
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient(connectionURL);
const id = new ObjectId();

console.info(id.id);
console.info(id.id.length);
console.info(id.toHexString().length);
console.log(id.getTimestamp());

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('connected correctly');

	const db = client.db(databaseName);

	// collections are tables in mongo

	// +++++++++++  CREATING DATA  +++++++++++
	// ---------- inserting one user ----------
	// db.collection('users').insertOne({
	// 	// I can insert ids manually but note that mongo does it manually
	// 	_id: id,
	// 	name: 'vikrim',
	// 	age: 26,
	// });

	// ---------- insert many ----------
	db.collection('users').insertMany([
		{ name: 'adwa', age: 32 },
		{ name: 'shahla', age: 28 },
	]);

	// ---------- Challenge ----------
	//  goal: inserting 3 new tasks to a new tasks collection
	//  1. use insert many to insert the documents
	// 	- description: string -completed": boolean
	//  run the script
	//  refresh Robo t3

	// db.collection('tasks').insertMany([
	// 	{ description: 'Complete node course', completed: false },
	// 	{ description: 'Oud class', completed: true },
	// 	{ description: 'Upload Youtube video', completed: false },
	// ]);

	// +++++++++++  READING DATA  +++++++++++

	// the following code examples can be pasted here...
	return 'done.';
}

main().then(console.log).catch(console.error);
// .finally(() => client.close());
