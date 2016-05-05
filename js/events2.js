var content = document.getElementById("content");
var button = document.document.getElementById("button");
button.onclick = function () {
	 if (content.classname == "open"){
	 	content.className = "";
	 	button.innerHTML = "Show More";
	 } else {
	 	content.className = "open";
	 	button.innerHTML = "Show Less";
	 }
};
