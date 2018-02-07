function preload() {

}
var guy;
function setup() {
	createCanvas(600, 600);
	guy = new guy();
	bomb = new bomb();
	platform = new platform();
	timer = new timer();
}
function draw() {
	background(135, 206, 235);
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
	timer.show();
	timer.update();
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




	//console.log(guy.thrust);
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
		//console.log("Up is pressed");
		guy.up();
	}

}
