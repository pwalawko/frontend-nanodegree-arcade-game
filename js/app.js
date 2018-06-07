// Enemies our player must avoid
var Enemy = function(x) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = [62, 145, 228][Math.floor(Math.random()*3)];
    this.speed = Math.floor((Math.random() * 200) + 50);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;;
    if(this.x > 505){
        this.x = -120;
        this.y = [62, 145, 228][Math.floor(Math.random()*3)];
        this.speed = Math.floor((Math.random() * 200) + 50);
    }
    if((this.x-75<player.x && this.x+75>player.x) && (this.y===player.y && this.y===player.y)) {
        player.resetPlayer()
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.resetPlayer();
    this.sprite = 'images/char-boy.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.resetPlayer = function() {
    this.x = 202;
    this.y = 394;
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    switch(true) {
        case (direction==='up' && this.y>0):
            this.y -= 83;
            if (this.y === -21) {
                this.resetPlayer();
            }
            break;
        case (direction==='down' && this.y<403):
            this.y += 83;
            break;
        case (direction==='left' && this.x>0):
            this.x -= 101;
            break;
        case (direction==='right' && this.x<404):
            this.x += 101;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [new Enemy(-200), new Enemy(-160), new Enemy(-120)];
var player = new Player();


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
