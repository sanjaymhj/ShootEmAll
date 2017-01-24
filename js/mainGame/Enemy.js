function Enemy() {
	var gameUI = GameUI.getInstance();
	var ctx = gameUI.getContext();

	var zombieCounter = 0;
	var maxZombie = 10;

	var element = new Image();
	element.src = "images/shooter-sprite.png";

	this.x;
	this.y;
	this.velX = 1;
	this.velY = 1;
	
	this.type;
	this.state;

	this.sX = 0;
	this.sY = 144;
	this.width = 48;
	this.height = 48;

	this.frame = 0;

	var that = this;

	this.draw = function(rotation) {

		if (that.x % 8 === 0 || that.y % 8 === 0){
			that.frame++;
			if (that.frame >= 4){
				that.frame = 0;
				if(that.sY === 144){
					that.sY = 144 + 48;
				}
				else {
					that.sY = 144;
				}
			}
		}

		// console.log('Enemy', rotation);
		that.sX = that.width * that.frame;
		// ctx.drawImage(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);

		ctx.save();
		ctx.translate(that.x + that.width/2, that.y + that.height/2);
		// console.log('Enemypostion', that.x, that.y);
		ctx.rotate(rotation);
		ctx.drawImage(element, that.sX, that.sY, that.width, that.height, that.width/2 * -1, that.height/2 * -1, that.width, that.height);
		ctx.restore();


		// gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);


		// ctx.save();
		// 	// console.log(this.x, this.y);

	 //    ctx.translate(that.x + that.width/2, that.y + that.height/2);

	 //    ctx.rotate(rotation);
	 
		// ctx.drawImage(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);

	 //    ctx.restore();

		

	}
	
	this.update = function(playerX, playerY) {
		that.velX = 1;
		that.velY = 1;
		var destinationX = playerX - that.x + 0.1;
		var destinationY = playerY - that.y + -0.1;
		
		var xIncrement = (destinationX)/Math.abs(destinationX);
		var yIncrement = destinationY/Math.abs(destinationY);
		// console.log('enmy destination', destinationX, destinationY);

		that.x += xIncrement;
		that.y += yIncrement;

		that.x = Math.max(Math.min(that.x, gameUI.getWidth() - that.width), 0);
		that.y = Math.max(Math.min(that.y, gameUI.getHeight() - that.height), 0);
	}
}