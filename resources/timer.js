function timer() {

	this.show = function() {
		fill(0);
		textSize(20);
		text("Time alive: " + this.time, 450, 50);
	}
	this.update = function() {
		this.time = 0;
		function timeIt() {
			this.time++;
		}
		setInterval(timeIt, 1000);
		console.log(this.time);
	}
}