// object property shorthand
const name = 'andrew';
const userAge = 27;

const user = {
	name,
	age: userAge,
	location: 'philadelphia',
};

console.log(user);

// object destructuring
const product = {
	label: 'red notebook',
	price: 3.0,
	stock: 201,
	salePrice: undefined,
};

const { label: productLabel, price, rating = 5 } = product;
console.log('label:', productLabel, 'price: ', price);
console.log('rating:', rating);

const transaction = (type, { label }) => {
	console.log('label', label);
};

transaction('order', product);
