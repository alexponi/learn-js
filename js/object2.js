var Car = function(maxSpeed, driver){
	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function(speed, time){
		console.log(speed * time);
	};
	this.logDriver = function () {
		console.log('driver name is ' + this.driver);
	};
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(60, "Man");
var myCar3 = new Car(80, "Shaun");

myCar.drive(50, 3);
myCar3.logDriver();