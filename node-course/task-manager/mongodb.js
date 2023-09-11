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
const client = new mongodb.MongoClient(connectionURL);

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('connected correctly');

	const db = client.db(databaseName);
	// collections are tables in mongo
	db.collection('users').insertOne({
		name: 'athoug',
		age: 33,
	});

	// the following code examples can be pasted here...

	return 'done.';
}

main().then(console.log).catch(console.error);
// .finally(() => client.close());
