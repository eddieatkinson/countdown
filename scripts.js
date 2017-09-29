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
var endDate = new Date("January 10, 2018");

setInterval(function(){

	updateTimer();
}, 1000)

var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');

function Ball(x, y){
	this.x = x;
	this.y = y;
	this.sr = 0;
	this.xDirection = 1;
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
	context.beginPath();
	context.arc(this.x, this.y, this.radius, this.sr, this.er);
	context.fill();
}
Ball.prototype.updateBallPosition = function(){
	context.clearRect(0, 0, 500, 500);
	this.drawBall();
	if(this.x >= 500 - this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y >= 500 - this.radius){
		this.yDirection = -this.yDirection
	}
	if(this.x <= this.radius){
		this.xDirection = -this.xDirection;
	}
	if(this.y <= this.radius){
		this.yDirection = -this.yDirection
	}
	this.x += this.randX * this.xDirection;
	this.y += this.randY * this.yDirection;
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