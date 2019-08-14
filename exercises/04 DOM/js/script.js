/////////////
//// 01 - We need to select an element and fetch its text content
/////////////
(function () {
	var paragraphElement = null; // Select the class .exercise01
	var paragraphText = null; // Store the text content of the paragraph element here

	// <solution>

	// </solution>

	console.log('%c01 - The paragraphText variable should contain "The fox jumps over the lazy brown dog.", I found: ' + paragraphText, 'font-weight: bold; color:' + (paragraphText === "The fox jumps over the lazy brown dog." ? '#bada55' : '#f4113d'));
})();


/////////////
//// 02 - Update the element with class .exercise02 with a different text
/////////////
(function () {
	var paragraphElement = null; // Select the class .exercise02

	// <solution>

	// </solution>

	console.log('%c02 - The text from element .exercise02 should be updated and NOT contain "Change me", I found: ' + document.querySelector('.exercise02').innerText, 'font-weight: bold; color:' + (document.querySelector('.exercise02').innerText !== "Change me" ? '#bada55' : '#f4113d'));
})();


/////////////
//// 03 - Update the element with class .exercise03's text to be uppercase
/////////////
(function () {
	var paragraphElement = null; // Select the class .exercise03

	// <solution>

	// </solution>

	console.log('%c03 - The text from element .exercise03 should be changed to be uppercase: e.g. MAKE ME UPPERCASE, I found: ' + document.querySelector('.exercise03').innerText, 'font-weight: bold; color:' + (document.querySelector('.exercise03').innerText === "MAKE ME UPPERCASE" ? '#bada55' : '#f4113d'));
})();


/////////////
//// 04 - Update the paragraph style to have the color: #f4113d
/////////////
(function () {
	var paragraphElement = null; // Select the class .exercise04

	// <solution>

	// </solution>

	console.log('%c04 - The paragraph\'s color should be #f4113d, I found: ' + document.querySelector('.exercise04').style.color, 'font-weight: bold; color:' + (document.querySelector('.exercise04').style.color === "#f4113d" || document.querySelector('.exercise04').style.color === "rgb(244, 17, 61)" ? '#bada55' : '#f4113d'));
})();


/////////////
//// 05 - the elements .exercise05_1 and .exercise05_2 contain numbers, add them together and insert the total value to .exercise05_3
/////////////
(function () {

	// <solution>

	// </solution>

	console.log('%c05 - The element .exercise05_3 should contain 4, I found: ' + document.querySelector('.exercise05_3').innerText, 'font-weight: bold; color:' + (document.querySelector('.exercise05_3').innerText === "4" ? '#bada55' : '#f4113d'));
})();

/////////////
//// 06 - the element .exercise06_2 should be moved before the element .exercise06_1
/////////////
(function () {

	// <solution>

	// </solution>

	console.log('%c06 - The element .exercise06_2 should be placed before .exercise06_1, I found the element: ' + document.querySelector('.exercise06_1').previousElementSibling.className, 'font-weight: bold; color:' + (document.querySelector('.exercise06_1').previousElementSibling.className === "exercise06_2" ? '#bada55' : '#f4113d'));
})();