var myString = 'I\'m a "fun" string';

console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));
console.log(myString.indexOf("ninja"));
if (myString.indexOf("ninja") === -1){
	console.log('the wold ninja is not in the string');
} else {
	console.log('the word ninja starts at position' + myString.indexOf("ninja"));
}