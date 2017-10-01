function updateTimer(){
	// subtract now from the end date.
	var now = new Date();
	var timeRemaining = endDate.getTime() - now.getTime();
	// console.log(timeRemaining);
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor((timeRemaining / (1000 * 60 * 60 * 24 * 7)));

	// If we do by class names, we need to specify the element.
	document.getElementsByClassName('weeks')[0].innerHTML = weeks;
	document.getElementsByClassName('days')[0].innerHTML = days;
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;


}
var rightNow = new Date();
var endDate = new Date("January 10, 2018");
var timeLeft = endDate.getTime() - rightNow.getTime();
var partialSeconds = ((timeLeft / 1000) % 60) - parseInt((timeLeft / 1000) % 60);
// console.log(partialSeconds)

setInterval(function(){

	updateTimer();
}, 1000)


// ----FIRST CANVAS----weeks
var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 0;
	this.yDirection = 1;
	// ending radians
	this.er = Math.PI * 2;
	// this.randX = Math.ceil(Math.random() * 15);
	this.randY = Math.ceil(Math.random() * 15);
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context.beginPath();
	context.arc(this.x, this.y, this.radius, this.sr, this.er);
	context.fill();
}
Ball.prototype.updateBallPosition = function(){
	context.clearRect(0, 0, 200, 200);
	this.drawBall();
	if(this.x >= 200 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 200 - this.radius){
		this.yDirection = -this.yDirection
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
	}
	// this.x += this.randX * this.xDirection;
	this.y += this.yDirection;
}


theBall = new Ball(100, 100);
// console.log(secondsBall);

var ball_interval = setInterval(theBall.updateBallPosition, 50);

canvas.addEventListener("click", function(event){
	console.log(event);
	randR = Math.ceil(Math.random() * 255);
	randG = Math.ceil(Math.random() * 255);
	randB = Math.ceil(Math.random() * 255);
	context.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
	theBall.radius = Math.ceil(Math.random() * 100);
})

// ----SECOND CANVAS----days
var canvas2 = document.getElementById('canvas2');

var context2 = canvas2.getContext('2d');

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 0;
	this.yDirection = 1;
	// ending radians
	this.er = Math.PI * 2;
	this.randX = Math.ceil(Math.random() * 15);
	this.randY = Math.ceil(Math.random() * 15);
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context2.beginPath();
	context2.arc(this.x, this.y, this.radius, this.sr, this.er);
	context2.fill();
}
Ball.prototype.updateBallPosition = function(){
	context2.clearRect(0, 0, 200, 200);
	this.drawBall();
	if(this.x >= 200 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 200 - this.radius){
		this.yDirection = -this.yDirection
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
	}
	// this.x += this.randX * this.xDirection;
	this.y += this.randY * this.yDirection;
}


theBall2 = new Ball(100, 100);
// console.log(secondsBall);

var ball_interval2 = setInterval(theBall2.updateBallPosition, 50);

canvas.addEventListener("click", function(event){
	console.log(event);
	randR = Math.ceil(Math.random() * 255);
	randG = Math.ceil(Math.random() * 255);
	randB = Math.ceil(Math.random() * 255);
	context2.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
	theBall2.radius = Math.ceil(Math.random() * 100);
})

// ----THIRD CANVAS----hours
var canvas3 = document.getElementById('canvas3');

var context3 = canvas3.getContext('2d');

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 0;
	this.yDirection = 1;
	// ending radians
	this.er = Math.PI * 2;
	this.randX = Math.ceil(Math.random() * 15);
	this.randY = Math.ceil(Math.random() * 15);
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context3.beginPath();
	context3.arc(this.x, this.y, this.radius, this.sr, this.er);
	context3.fill();
}
Ball.prototype.updateBallPosition = function(){
	context3.clearRect(0, 0, 200, 200);
	this.drawBall();
	if(this.x >= 200 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 200 - this.radius){
		this.yDirection = -this.yDirection
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
	}
	// this.x += this.randX * this.xDirection;
	this.y += this.randY * this.yDirection;
}


theBall3 = new Ball(100, 100);
// console.log(secondsBall);

var ball_interval3 = setInterval(theBall3.updateBallPosition, 50);

canvas.addEventListener("click", function(event){
	console.log(event);
	randR = Math.ceil(Math.random() * 255);
	randG = Math.ceil(Math.random() * 255);
	randB = Math.ceil(Math.random() * 255);
	context3.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
	theBall3.radius = Math.ceil(Math.random() * 100);
})

// ----FOURTH CANVAS----minutes
var canvas4 = document.getElementById('canvas4');

var context4 = canvas4.getContext('2d');

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 0;
	this.yDirection = 1;
	// ending radians
	this.er = Math.PI * 2;
	this.randX = Math.ceil(Math.random() * 15);
	this.randY = Math.ceil(Math.random() * 15);
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context4.beginPath();
	context4.arc(this.x, this.y, this.radius, this.sr, this.er);
	context4.fill();
}
Ball.prototype.updateBallPosition = function(){
	context4.clearRect(0, 0, 200, 200);
	this.drawBall();
	if(this.x >= 200 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 200 - this.radius){
		this.yDirection = -this.yDirection
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
	}
	// this.x += this.randX * this.xDirection;
	this.y += this.randY * this.yDirection;
}


theBall4 = new Ball(100, 100);
// console.log(secondsBall);

var ball_interval4 = setInterval(theBall4.updateBallPosition, 50);

canvas.addEventListener("click", function(event){
	console.log(event);
	randR = Math.ceil(Math.random() * 255);
	randG = Math.ceil(Math.random() * 255);
	randB = Math.ceil(Math.random() * 255);
	context4.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
	theBall4.radius = Math.ceil(Math.random() * 100);
})

// ----FIFTH CANVAS----seconds
var canvas5 = document.getElementById('canvas5');

var context5 = canvas5.getContext('2d');

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 0;
	this.yDirection = 1;
	// ending radians
	this.er = Math.PI * 2;
	this.randX = Math.ceil(Math.random() * 15);
	this.randY = Math.ceil(Math.random() * 15);
	this.drawBall = this.drawBall.bind(this);
	this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
	context5.beginPath();
	context5.arc(this.x, this.y, this.radius, this.sr, this.er);
	context5.fill();
}
Ball.prototype.updateBallPosition = function(){
	context5.clearRect(0, 0, 200, 200);
	this.drawBall();
	if(this.x >= 200 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 200 - this.radius){
		this.yDirection = -this.yDirection
		randR = Math.ceil(Math.random() * 255);
		randG = Math.ceil(Math.random() * 255);
		randB = Math.ceil(Math.random() * 255);
		context5.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
		// theBall5.radius = Math.ceil(Math.random() * 100);
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
		// randR = Math.ceil(Math.random() * 255);
		// randG = Math.ceil(Math.random() * 255);
		// randB = Math.ceil(Math.random() * 255);
		// context5.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
		// theBall5.radius = Math.ceil(Math.random() * 100);
	}
	// this.x += this.randX * this.xDirection;
	this.y +=  10 * this.yDirection;
}

var posY5;
if(partialSeconds >= .5){
	posY5 = 50 + 200 * (partialSeconds - .5);
}else{
	posY5 = 50 + 200 * (.5 - partialSeconds);
}

theBall5 = new Ball(100, posY5);
// console.log(secondsBall);

var ball_interval5 = setInterval(theBall5.updateBallPosition, 50);

// canvas.addEventListener("click", function(event){
// 	console.log(event);
// 	randR = Math.ceil(Math.random() * 255);
// 	randG = Math.ceil(Math.random() * 255);
// 	randB = Math.ceil(Math.random() * 255);
// 	context5.fillStyle = `rgb(${randR}, ${randG}, ${randB})`;
// 	theBall5.radius = Math.ceil(Math.random() * 100);
// })