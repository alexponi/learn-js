function getAverage (a,b){
	var average = (a + b) / 2; // LocaL variable
	console.log(average);
	return average;
}
var myResult = getAverage(7, 12); // Global variable

function logResult(){
console.log('the average is ' + myResult + " inside the function");
}
logResult();