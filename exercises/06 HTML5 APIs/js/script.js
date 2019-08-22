/////////////
//// 01 - Add a localStorage item called `name` with the value set to a string called "Beth"
/////////////
(function () {
	// <solution>

	// </solution>

	console.log('%c01 - localStorage item called name contains the value: ' + localStorage.getItem('name'), 'font-weight: bold; color:' + (localStorage.getItem('name') === 'Beth' ? '#bada55' : '#f4113d'));
})();


/////////////
//// 02 - Get item called `name` from localStorage and update .exercise02_2 with its value
/////////////
(function () {
	// <solution>

	// </solution>

	console.log('%c02 - .exercise02_2 contains: ' + document.querySelector('.exercise02_2').innerText, 'font-weight: bold; color:' + (localStorage.getItem('name') === document.querySelector('.exercise02_2').innerText ? '#bada55' : '#f4113d'));
})();


/////////////
//// 03 - Point the created audio element `audioElement` to: https://www.w3docs.com/build/audios/jingle_bells.ogg
//// -> then append the element as a child of .exercise03
//// -> then make sure the audio element starts playing (programmatically)
/////////////
(function () {
	var audioElement = document.createElement('audio');

	function playAudio() {
		// <solution>

		// </solution>
	}

	audioElement.addEventListener('play',function(){console.log('%c03 - .audioElement has started playing: YES | exists as a child of .exercise03: ' + !!document.querySelector(".exercise03 audio") + ' | audio player has playback controls: ' + audioElement.controls,'font-weight:bold;color:'+(document.querySelector('.exercise03 audio') && audioElement.controls?'#bada55':'#f4113d'));});playAudio();
})();


/////////////
//// 04 - Point the created video element `videoElement` to: https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4
//// -> then append the element as a child of .exercise04
//// -> then make sure the video element starts playing (programmatically)
/////////////
(function () {
	var videoElement = document.createElement('video');

	function playVideo() {
		// <solution>

		// </solution>
	}
	videoElement.addEventListener('play',function(){console.log('%c04 - .videoElement has started playing: yes | exists as a child of .exercise04: ' + !!document.querySelector(".exercise04 video") + ' | video player has playback controls: ' + videoElement.controls,'font-weight:bold;color:'+(document.querySelector('.exercise04 video') && videoElement.controls?'#bada55':'#f4113d'));});playVideo();
})();


/////////////
//// 05 - Create a canvas element, append it as a child of .exercise05 and draw a red rectangle on it
/////////////
(function () {

	// <solution>

	// </solution>

})();


/////////////
//// 06 - Create a canvas element, append it as a child of .exercise06 and draw a poker face emoticon
//// -> use a circle shape for the face, a circle shape for the eyes, a square shape for the nose and a rectangle shape for the mouth
/////////////
(function () {

	// <solution>

	// </solution>

})();
