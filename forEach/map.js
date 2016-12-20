(function () {
	
	var numbers = [1, 2, 3];
	var doubledNumbers = [];

	var doubled = numbers.map(function (number) {
		return number * 2;
	});

	//console.log(doubled);

	var cars = [
		{ model: 'Buick', price: 'CHEAP' },
		{ model: 'Camaro', price: 'Expensive' }
	];

	var prices = cars.map(function (car) {
		return car.price;
	})

	console.log(prices);

})();