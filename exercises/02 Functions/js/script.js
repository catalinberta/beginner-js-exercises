/////////////
//// 00 - Update the introduce() function to return the supplied name
/////////////
(function () {
	// <solution>
	function introduce(name) {
		return "My name is " + name; // This is already solved as an example
	}
	// </solution>

	var result = introduce("Terry");

	console.log('%c00 - result from introduce("Terry") should be "My name is Terry", I received: ' + result, 'font-weight: bold; color:' + (result === "My name is Terry" ? '#bada55' : '#f4113d'));
})();

/////////////
//// 01 - Update the add() function to return the addition of two numbers
/////////////
(function () {

	// <solution>
	function add() {
		return null;
	}
	// </solution>

	var result = add(4,5);

	console.log('%c01 - result from add(4,5) should be 9, I received: ' + result, 'font-weight: bold; color:' + (result === 9 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 02 - Update the capitalize() function to return a capitalized string
/////////////
(function () {

	// <solution>
	function capitalize() {
		return null;
	}
	// </solution>

	var result = capitalize("hello");

	console.log('%c02 - result from capitalize("hello") should be Hello, I received: ' + result, 'font-weight: bold; color:' + (result === 4 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 03 - Update the numberOfCharacters() function to return the number that the given string contains
/////////////
(function () {

	// <solution>
	function numberOfCharacters() {
		return null;
	}
	// </solution>

	var result = numberOfCharacters("WubbaLubbaDubDub");

	console.log('%c03 - result from numberOfCharacters("WubbaLubbaDubDub") should be 16, I received: ' + result, 'font-weight: bold; color:' + (result === 16 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 04 - runCallback() is being called with a function as a parameter, this is called a callback.
//// Fix runCallback() to run the callback passed as parameter
/////////////
(function () {

	// <solution>
	function runCallback() {
		// run callback here
	}
	// </solution>

	var result = "Callback has NOT run";
	runCallback(function() {
		result = "Callback has run";
	});

	console.log('%c04 - the callback from runCallback(callback) should be called and update the result variable with "Callback has run", I received: ' + result, 'font-weight: bold; color:' + (result === "Callback has run" ? '#bada55' : '#f4113d'));
})();


/////////////
//// 05 - update getCoordinates() to return an object with values from the variablesx and y.
/////////////
(function () {
	var x = 10,
		y = 12;

	// <solution>
	function getCoordinates() {
	}
	// </solution>

	var resultForX, resultForY;

	try {
		resultForX = getCoordinates().x;
		resultForY = getCoordinates().y;
	} catch(e) {}

	console.log('%c05 - getCoordinates() should return an object with the values of x and y, I received: ' + resultForX + ' for x and ' + resultForY + ' for y', 'font-weight: bold; color:' + (resultForX === 10 && resultForY === 12 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 06 - update getCalculatorFunction() to return a function that adds two numbers.
/////////////
(function () {
	// <solution>
	function getCalculatorFunction() {

	}
	// </solution>

	var calculator = getCalculatorFunction();
	try {
		var result = calculator(4, 5);
	} catch(e) {}

	console.log('%c06 - getCalculatorFunction() should return a function/calculator that returns the addition of two numbers, by adding 4 and 5 I received: ' + result , 'font-weight: bold; color:' + (result === 9 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 07 - update getType() to return the type of the passed parameter.
//// getType("This is a string") should return "string"
//// getType(13) should return "number"
//// getType({x: 10}) should return "object"
//// getType(function() {}) should return "function"
/////////////
(function () {
	// <solution>
	function getType() {
	}
	// </solution>

	var stringType = getType("This is a string");
	var numberType = getType(13);
	var objectType = getType({x: 10});
	var functionType = getType(function() {});

	console.log('%c07 - getType("This is a string") returned ' + stringType + '. getType(13) returned ' + numberType + '. getType({x: 10}) returned ' + objectType + '. getType(function() {}) returned ' + functionType , 'font-weight: bold; color:' + (stringType === 'string' && numberType === 'number' && objectType === 'object' && functionType === 'function' ? '#bada55' : '#f4113d'));
})();