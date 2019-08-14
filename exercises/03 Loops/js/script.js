/////////////
//// 01 - We have an empty array called numbers. Use a for loop to append 10 ascending numbers to it from 0 to 9
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c01 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 10 && numbers.reduce((total,value) => total+value) === 45 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 02 - We have an empty array called numbers. Use a for loop to append 5 descending numbers to it from 4 to 0
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c02 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 5 && numbers.reduce((total,value) => total+value) === 10 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 03 - We have an empty array called numbers. Append every 3 ascending numbers: 0 3 6 9 ... 30
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c03 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 11 && numbers.reduce((total,value) => total+value) === 165 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 04 - We have an empty array called numbers. Append 7 descending numbers starting from 13 to 7
/////////////
(function () {
	var numbers = [];

	// <solution>

	// </solution>

	console.log('%c04 - The numbers array has ' + numbers.length + ' items, containing: ' + numbers, 'font-weight: bold; color:' + (numbers.length === 7 && numbers.reduce((total,value) => total+value) === 70 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 05 - We have an array called words with 3 strings. Use a loop to go through each word to concatenate them into one whole phrase
/////////////
(function () {
	var words = ["I, like, pink"],
		phrase = "";

	// <solution>

	// </solution>

	console.log('%c05 - The variable phrase should return "I like pink", I received: ' + phrase, 'font-weight: bold; color:' + (phrase === "I like pink" ? '#bada55' : '#f4113d'));
})();


/////////////
//// 06 - We have a nested array called words. Use a loop to go through each word and each nested array to concatenate all the values into one phrase
/////////////
(function () {
	var words = ["I", "think", ["the", "color", "pink"], "is", "awesome"],
		phrase = "";

	// <solution>

	// </solution>

	console.log('%c06 - The variable phrase should return "I think the color pink is awesome", I received: ' + phrase, 'font-weight: bold; color:' + (phrase.indexOf("I think the color pink is awesome") > -1 ? '#bada55' : '#f4113d'));
})();


/////////////
//// 07 - We have a string in a variable called catchphrase. Make each 4th character uppercase, everything else should be lowercase
/////////////
(function () {
	var catchphrase = "Wubba lubba dub dub";

	// <solution>

	// </solution>

	console.log('%c07 - The catchphrase string should be "wubBa lUbba dub dub", I found: ' + catchphrase, 'font-weight: bold; color:' + (catchphrase === "wubBa lUbba dub dub" ? '#bada55' : '#f4113d'));
})();