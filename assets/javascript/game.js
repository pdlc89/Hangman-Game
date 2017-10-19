$(document).ready(function() {




	document.getElementById("start-button").addEventListener("click", function(){
		var words = ["HELLO", "WORLD", "SCHOOL", "COMPUTER"];

		var computerGuess = words[Math.floor(Math.random()*words.length)];
		console.log (computerGuess);

		var holder = computerGuess.split("");
		console.log(holder);
		
//Words for computer to choose from
		document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).
			toUpperCase();
			console.log (userGuess);
				wrapper = document.getElementById('tower');
				span = wrapper.getElementsByTagName('span');
				tags = [];
					for (i = 0; i < span.length; i++) {
    					tags[i] = span[i].getElementsByTagName('u');
					}
			for (var i = 0; i < holder.length; i++) {
				if (holder[i].indexOf(userGuess) != -1){
					var putter = document.getElementById(i);
					putter.innerHTML = holder[i];
				}
			}
		
		}
	});
});
