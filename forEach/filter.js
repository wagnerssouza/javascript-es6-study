(function () {

	var products = [
		{"name": "cucumber", "type": "vegetable", "quantity": 0, "price": 1},
		{"name": "banana", "type": "fruit", "quantity": 10, "price": 15},
		{"name": "celery", "type": "vegetable",  "quantity": 30, "price": 9},
		{"name": "orange", "type": "fruit",  "quantity": 3, "price": 5}
	];
	
	var fruits = products.filter((product) => {
		return product.type === 'fruit'
	});

	//console.log(fruits);

	var range = products.filter((product) => {
		return product.type === "vegetable"
		&& product.quantity > 0
		&& product.price < 10
	});

	//console.log(range);

	var post = {"id": 4, "title": "New post"};
	var comments = [
		{"postId": 4, "content": "Awesome post"},
		{"postId": 3, "content": "Its has ok"},
		{"postId": 4, "content": "Awesome post"}
	];
	var commentsForPost = (post, comments) => {
		return comments.filter((comment) => {
			return comment.postId === post.id
		})
	}	

	//console.log(commentsForPost(post, comments));

	var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

	var filteredNumbers = (numbers) => {
		return numbers.filter(function (number) {
			return number > 50
		})		
	}

	//console.log(filteredNumbers(numbers));

	var users = [
	{ id: 1, admin: true },  
	{ id: 2, admin: false },
	{ id: 3, admin: false },
	{ id: 4, admin: false },
	{ id: 5, admin: true },
	];

	var filteredUsers;

	filteredUsers = function (users) {
		return users.filter(function(user) {
			return user.admin ===true
		})	
	}


	//console.log(filteredUsers(users));

})();