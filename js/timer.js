var myMessage = document.getElementById("message");

function showMessage () {
  myMessage.className = "show";
}

setTimeout(showMessage, 3000);

var colours = ["red","blue","green"];
var counter = 0;

function changeColour () {
	if (counter >= colours.length){
		counter = 0;
	}

	message.style.background = colours[counter];
	counter++;
}

setInterval(changeColour, 4000);