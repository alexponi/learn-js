var myForm = document.forms.myForm; //name, not id
myForm.name.value   // input with name = "name"
myForm.color.value  // input with name = "color"
myForm.name.onfokus = function () {
	 myForm.style.border = "4 px solid pink";
}
