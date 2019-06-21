// Enemies our player must avoid
class Enemy {
	constructor(x, y, moves) {
		// Variables applied to each of our instances go here,
	    // we've provided one for you to get started
		this.x = x;
		this.y = y;
		this.moves = moves;
	    // The image/sprite for our enemies, this uses
	    // a helper we've provided to easily load images
	    this.sprite = 'images/enemy-bug.png';
	}

	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks

	update(dt) {
	    // You should multiply any movement by the dt parameter
	    // which will ensure the game runs at the same speed for
	    // all computers.
		this.x += this.moves * dt;

		if(this.x > 505) {
			this.x = -150;
			// this.moves = 150 + Math.floor(Math.random() * 500);

		}

		if(player.x < this.x + 60 && player.x + 37 > this.x &&
			player.y < this.y +25 && 30 + player.y > this.y ) {
				player.x = 200;
				player.y = 400;
				// lives--;
			}
	};

	// Draw the enemy on the screen, required method for game
	render() {
	    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
	constructor(x, y, moves) {
		this.x = x;
		this.y = y;
		this.moves = moves;
		this.sprite = 'images/char-boy.png';
	}
	update () {
		// Preventing player from moving out of boundary
		if (this.y > 380) {
			this.y = 380;
		}
		if(this.x > 400) {
			this.x = 400;
		}
		if(this.x < 0) {
			this.x = 0;
		}
		if(this.y < 0) {
			this.y = 380;
			this.x = 200;
			confirm('You did it !')
		}

	}

	render () {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};

	handleInput(arrowKeyPressed) {
		switch (arrowKeyPressed) {
			case 'right':
							this.x += this.moves + 50;
							break;
			case 'left':
							this.x -= this.moves + 50;
							break;
			case 'up':
							this.y -= this.moves + 30;
							break;
			case 'down':
							this.y += this.moves + 30;
							break;
		}
	}


}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let enemyPosition = [50, 135, 220];
let enemy;
// Place the player object in a variable called player
let player = new Player(200, 400, 50);


enemyPosition.forEach((enemyPositionCoordinate) => {
	let enemy = new Enemy(0, enemyPositionCoordinate, 100 + Math.floor(Math.random() * 500));
	allEnemies.push(enemy);
	// console.log(allEnemies);
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
