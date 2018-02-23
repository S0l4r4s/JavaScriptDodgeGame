function bomb() {
	this.x = random(25, 575);
	this.y = random(25, 575);
	this.d = 50;
	this.r = this.d / 2;

	
	this.speedx = random(-15, 15);
	this.speedy = random(-15, 15);

	this.show = function() {
		fill(0);
		ellipse(this.x, this.y, this.d, this.d);
	}


	this.update = function()  {
		//console.log(this.speedx);
		//console.log(this.speedy);
		
		if (this.x + this.r >= width || this.x <= 0) {
			this.speedx = -this.speedx;
		}
		if (this.y + this.r >= height || this.y <= 0) {
			this.speedy = -this.speedy;
		}
		this.x += this.speedx;
		this.y += this.speedy;
	}
	this.explode = function() {
		if(this.x - this.r <= guy.x && this.x + this.r >= guy.x + 32 && this.y - this.r <= guy.y && this.y + this.r >= guy.x + 32) {
			console.log("BOOM!");
			guy.lives -= 1;
			this.x = random(25, 575);
			this.y = random(25, 575);
			guy.y = height/2;
			guy.x = width/2;
		}
	}
}
