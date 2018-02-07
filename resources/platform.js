function platform() {
	this.x = width / 2 - 16;
	this.y = 500;


	this.show = function() {
		fill(0);
		noStroke();
		rect(this.x, this.y, 64, 16);
	}
	this.collision = function() {
		if(guy.x >= this.x && guy.x <= this.x + 64 && guy.y <= this.y && guy.y >= this.y - 32) {
			guy.velocity = 0;
			guy.gravity = 0;
			//console.log("guy is near platform");
		} else {
			guy.gravity = 0.6;
		}
	}

}