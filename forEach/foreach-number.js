(function () {
	
	var numbers = [1, 2, 3, 4, 5, 6];
	var sum = 0;

	function adder (number) {
		sum += number;
	}

	numbers.forEach(adder);

})();