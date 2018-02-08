function guy() {
	//this.red = 255 - seconds * 5;
	//this.blu = seconds * 5;

	this.y = height/2;
	this.x = width/2;

	this.gravity = 0.6;
	
	this.velocity = 0;
	this.thrust = 10;
	this.drag = 0.01;

	this.lives = 3;

	this.show = function() {
		fill(abs(255 - seconds * 5), 0, abs(seconds * 5));
		noStroke();
		rect(this.x, this.y, 32, 32);
	}

	this.up = function() {
		this.velocity = this.lift;
		//console.log(this.velocity);
	}

	this.left = function() {
		//this.thrust -= this.drag;
		this.x -= this.thrust;
	}

	this.right = function() {
		//this.thrust -= this.drag;
		this.x += this.thrust;

	}

	this.die = function() {
		if(this.lives <= 0){
			
			this.lives = 0;
			this.velocity = 0;
			this.gravity = 0;
			this.thrust = 0;
			bomb.speedy = 0;
			bomb.speedx = 0;


			textSize(50);
			text("GAME OVER", 100, 100);
			noLoop();
		}
	}


	this.update = function() {
		this.lift = -15;
		this.velocity += this.gravity;
		this.y += this.velocity;

		if(this.y >= height - 52) {
			this.lives -= 1;

		}
		if(this.y <= 20) {
			this.lives -= 1;
		}
		if(this.x <= 20) {
			this.lives -= 1;
		}
		if(this.x >= width - 52) {
			this.lives -= 1;
		}

		/*if(this.red <= 0 && this.blu >= 255) {
			this.red += seconds * 5;
			this.blu -= seconds * 5;
		}*/ 

	}

	this.health = function() {
		fill(0);
		textSize(20);
		text("lives: " + this.lives, 50, 50);
	}


}