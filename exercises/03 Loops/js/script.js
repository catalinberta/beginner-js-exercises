/////////////
//// 01 - We have an empty array called numbers. Use a for loop to append 10 ascending numbers to it from 0 to 9
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c01 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 10 && numbers.reduce((total,value) => total+value) === 45 ? '#bada55' : 'red'));
})();


/////////////
//// 02 - We have an empty array called numbers. Use a for loop to append 5 descending numbers to it from 4 to 0
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c02 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 5 && numbers.reduce((total,value) => total+value) === 10 ? '#bada55' : 'red'));
})();


/////////////
//// 03 - We have an empty array called numbers. Append every 3 ascending numbers: 0 3 6 9 ... 30
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c03 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 11 && numbers.reduce((total,value) => total+value) === 165 ? '#bada55' : 'red'));
})();


/////////////
//// 04 - We have an empty array called numbers. Append 7 descending numbers starting from 13 to 7
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c04 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 7 && numbers.reduce((total,value) => total+value) === 70 ? '#bada55' : 'red'));
})();