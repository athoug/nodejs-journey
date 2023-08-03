const event = {
	name: 'Birthday Party',
	guestList: ['Athoug', 'Ref', 'Lamm'],
	printGuestList() {
		console.log('Guest list for', this.name);

		this.guestList.forEach((person) =>
			console.log(person, 'is attending the', this.name)
		);
	},
};

event.printGuestList();
