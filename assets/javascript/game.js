





document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).
		toUpperCase();

	console.log (userguess);



var words = ["HELLO", "WORLD", "SCHOOL", "COMPUTER"];


var computerGuess = words[Math.floor(Math.random()*words.length)];
	console.log (computerGuess);

var letters
}