var seconds = 0;
var minutes = 0;


function preload() {

}
var guy;
function setup() {
	createCanvas(600, 600);

	guy = new guy();
	bomb = new bomb();
	platform = new platform();

	function timeIt() {
		seconds ++;
		if(seconds >= 60) {
			minutes ++;
			seconds = 0;
		}

	}
	setInterval(timeIt, 1000);
	if(guy.lives <= 0) {
		setInterval(timeIt, 0);
	}

}
function draw() {
	background(abs(seconds * 5), 0, abs(255 - seconds * 5));

	//debug lines
	/*for(var I = 0; I < 12; I++) {
		stroke(255);
		line(50 * I, 0, 50 * I, 600);
		line(0, 50 * I, 600, 50 * I);
	}*/
	//SPIKEZ
	for(var i = 0; i < 60; i++) {

		fill(255);
		//left spikes
		triangle(0, i * 10, 0, 10 + i * 10, 20, i * 10 - 5);
		//right spikes
		triangle(600, i * 10, 600, 10 + i * 10, 580, i * 10 - 5);
		//top spikes
		triangle(i * 10, 0, 10 + i * 10, 0, i * 10 - 5, 20);
		//bottom spikes
		triangle(i * 10, 600, 10 + i * 10, 600, i * 10 - 5, 580);
	}
	textSize(20);
	fill(0);
	text("time alive: " + minutes + ":" + nf(seconds, 2), 440, 50);

	bomb.show();
	bomb.update();
	bomb.explode();
	platform.show();
	guy.show();
	guy.update();
	guy.health();
	guy.die();
	platform.collision();
	//console.log(guy.y);
	if (keyIsDown(LEFT_ARROW)) {
		guy.left();
	} else if (keyIsDown(RIGHT_ARROW)) {
		guy.right();
	}




}


function keyPressed() {
	if (keyCode == UP_ARROW) {
		//console.log("Up is pressed");
		guy.up();
	}

}
