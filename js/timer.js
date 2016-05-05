var myMessage = document.getElementById("message");

function showMessage () {
  myMessage.className = "show";
}

setTimeout(showMessage, 3000);