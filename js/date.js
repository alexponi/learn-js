var myDate = new Date();
console.log(myDate);
var myPastDate = new Date(1542, 2, 30, 10, 35, 10);
console.log(myPastDate);
var myFutureDate = new Date(2542, 2, 30, 10, 35, 10);
console.log(myFutureDate);
console.log(myFutureDate.getFullYear());
console.log(myFutureDate.getTime());
console.log(myFutureDate.getMonth());
console.log(myFutureDate.getDay());
console.log(myFutureDate.getHours());

var birthday = new Date(2542, 2, 30, 10, 35, 10);
var birthday2 = new Date(2542, 2, 30, 10, 35, 10);

if(birthday.getTime() == birthday2.getTime()) {
	console.log('birthdays is equal');
} else {
	console.log('birthdays is not equal');
}