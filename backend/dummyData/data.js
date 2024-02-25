// Hardcoded array of 5 users
const users = [
	{
		_id: "1",
		username: "user1",
		name: "User One",
		password: "password1",
		profilePicture: "profile1.jpg",
		gender: "male",
	},
	{
		_id: "2",
		username: "user2",
		name: "User Two",
		password: "password2",
		profilePicture: "profile2.jpg",
		gender: "female",
	},
	{
		_id: "3",
		username: "user3",
		name: "User Three",
		password: "password3",
		profilePicture: "profile3.jpg",
		gender: "male",
	},
	{
		_id: "4",
		username: "user4",
		name: "User Four",
		password: "password4",
		profilePicture: "profile4.jpg",
		gender: "female",
	},
	{
		_id: "5",
		username: "user5",
		name: "User Five",
		password: "password5",
		profilePicture: "profile5.jpg",
		gender: "male",
	},
];

// Hardcoded array of 5 transactions
const transactions = [
	{
		_id: "1",
		userId: "1",
		description: "Transaction One",
		paymentType: "CASH",
		category: "Category One",
		amount: 100.0,
		location: "Location One",
		date: "2024-01-01",
	},
	{
		_id: "2",
		userId: "2",
		description: "Transaction Two",
		paymentType: "CARD",
		category: "Category Two",
		amount: 200.0,
		location: "Location Two",
		date: "2024-01-02",
	},
	{
		_id: "3",
		userId: "3",
		description: "Transaction Three",
		paymentType: "CASH",
		category: "Category Three",
		amount: 300.0,
		location: "Location Three",
		date: "2024-01-03",
	},
	{
		_id: "4",
		userId: "4",
		description: "Transaction Four",
		paymentType: "CARD",
		category: "Category Four",
		amount: 400.0,
		location: "Location Four",
		date: "2024-01-04",
	},
	{
		_id: "5",
		userId: "5",
		description: "Transaction Five",
		paymentType: "CASH",
		category: "Category Five",
		amount: 500.0,
		location: "Location Five",
		date: "2024-01-05",
	},
];

// Export the arrays
export { users, transactions };
