/////////////
//// 00 - We have an array with 3 color names - use any known method to add a fourth color name to the array
/////////////
(function () {
	var colors = ['red', 'green', 'blue'];
	console.log('00 - 3 colors array: ' + colors);

	// <solution>
	colors.push('cyan'); // This is already solved as an example
	// </solution>

	console.log('%c00 - 4 colors array: ' + colors, 'font-weight: bold; color:' + (colors.length === 4 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 01 - We have an array with 3 color names - remove all items and make it an empty array
/////////////
(function () {
	var colors = ['red', 'green', 'blue'];
	console.log('01 - 3 colors array: ' + colors);

	// <solution>

	// </solution>

	console.log('%c01 - Empty array ' + colors, 'font-weight: bold; color:' + (colors.length === 0 && Array.isArray(colors) ? '#bada55' : '#f4113d'));
})();


/////////////
//// 02 - We have an array of four items, remove the second item
/////////////
(function () {
	var fruits = ['kiwi', 'tomato', 'apple', 'pear'];
	console.log('02 - 4 fruits array: ' + fruits);

	// <solution>

	// </solution>

	console.log('%c02 - 3 fruits array: ' + fruits, 'font-weight: bold; color:' + (fruits.length === 3 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 03 - We have an array of 5 items, reverse the order, so that the array will be [5,4,3,2,1]
/////////////
(function () {
	var numbers = [1, 2, 3, 4, 5];
	console.log('03 - 5 ascending numbers array: ' + numbers);

	// <solution>

	// </solution>

	console.log('%c03 - 5 descending numbers array: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 5 && numbers[0] === 5 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 04 - We have an array of 3 items, update the second item to a different value
/////////////
(function () {
	var cities = ['Bucharest', 'Budapest', 'Oslo'];
	console.log('04 - 3 cities array: ' + cities);

	// <solution>

	// </solution>

	console.log('%c04 - 3 cities array NOT including Budapest: ' + cities, 'font-weight: bold; color:' + (cities.length === 3 && cities[1] !== 'Budapest' ? '#bada55' : '#f4113d'));
})();


/////////////
//// 05 - We have an array of 3 items, the second item is a nested array, update the third item of the nested array to a different value
/////////////
(function () {
	var cities = ['Bucharest', ['Karlsruhe', 'Sofia', 'Budapest'], 'Oslo'];
	console.log('05 - Array with nested array: ' + cities);

	// <solution>

	// </solution>

	console.log('%c05 - Array with nested array NOT including Budapest: ' + cities, 'font-weight: bold; color:' + (cities.length === 3 && cities[1].length === 3 && cities[1].indexOf('Budapest') === -1 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 06 - We have an array of 3 ascending numbers, add any new ascending number to the array
/////////////
(function () {
	var numbers = [1, 2, 3];
	console.log('06 - 3 ascending numbers array: ' + numbers);

	// <solution>

	// </solution>

	console.log('%c06 - 4 ascending numbers array: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 4 && numbers[3] > numbers[2] ? '#bada55' : '#f4113d'));
})();


/////////////
//// 07 - We have a generated array with 3 random numbers, add a fourth number that is the same as the first number
/////////////
(function () {
	var numbers = [];
	numbers.push(Math.ceil(Math.random() * 100));
	numbers.push(Math.ceil(Math.random() * 100));
	numbers.push(Math.ceil(Math.random() * 100));
	console.log('07 - 3 random numbers array: ' + numbers);

	// <solution>

	// </solution>

	console.log('%c07 - 4 random numbers array with the first and fourth item being the same: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 4 && numbers[0] === numbers[3] ? '#bada55' : '#f4113d'));
})();


/////////////
//// 08 - We have an empty array and two more arrays with names inside. Add all names (both students and teachers arrays) to the empty array so that it contains all 6 names
/////////////
(function () {
	var everyone = [],
		teachers = ['Elaine', 'Todd', 'George'],
		students =  ['Ramona', 'Laura', 'Marius'];
	console.log('08 - Empty array ' + everyone);

	// <solution>

	// </solution>

	console.log('%c08 - All 6 names array: ' + everyone, 'font-weight: bold; color:' + (everyone.length === 6 ? '#bada55' : '#f4113d'));
})();