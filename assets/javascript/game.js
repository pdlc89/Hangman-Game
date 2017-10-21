$(document).ready(function() {

//These are the variables that will take elements from the document that need to be changed
				var wrapper = document.getElementById('tower');
				var span = wrapper.getElementsByTagName('span');
//This creates a variable that holds the element tags in an Array
				var tags = [];
//The loop that will place the correct id tag from the document to the Array 
			for (i = 0; i < span.length; i++) {
    			tags[i] = span[i].getElementsByTagName('p');
					}
//creates an array of content in the doc
			var content = $('u').html();
			console.log(content);
	document.getElementById("start-button").addEventListener("click", function(){
		var words = ["HOME", "WORLD", "STORE", "COMPUTER", "COMPLY", "ANTONYMS"];

		var computerGuess = words[Math.floor(Math.random()*words.length)];
		console.log (computerGuess);
//creates a varaible to hold the computer's guess and turns it into an array
		var holder = computerGuess.split("");
//shoows the computer's guess on the console
		console.log(holder);
//Words for computer to choose from
		document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).
//Takes the user's guess and converts it to upper case charactors
			toUpperCase();
//Logs the guesses to console
			//console.log (userGuess);
			var userError = 0;
//The loop that will place the correct guess to the corresponding spot in the document
				for (var i = 0; i < holder.length; i++) {
					if (holder[i].indexOf(userGuess) != -1){
//creates a variable that gets the elements from the document
						var putter = document.getElementById(i);
//Puts the users correct guess to display on to the document
						putter.innerHTML = holder[i];						
					}
					else {
						userError++;
					}

	 			}	   
		}			
	});

});
