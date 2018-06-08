// Enemies our player must avoid
var Enemy = function(x) {
    this.x = x;
    this.y = [62, 145, 228][Math.floor(Math.random()*3)];
    this.speed = Math.floor((Math.random() * 200) + 50);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
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
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// The character controlled by the player
var Player = function() {
    this.resetPlayer();
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
};

// Move the player to the initial position
Player.prototype.resetPlayer = function() {
    this.x = 202;
    this.y = 394;
};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle keys pressed by the player
Player.prototype.handleInput = function(direction) {
    switch(true) {
        case (direction==='up' && this.y>0):
            this.y -= 83;
            if (this.y === -21) {
                this.resetPlayer();
            }
            break;
        case (direction==='down' && this.y<394):
            this.y += 83;
            break;
        case (direction==='left' && this.x>0):
            this.x -= 101;
            break;
        case (direction==='right' && this.x<404):
            this.x += 101;
    }
};

var allEnemies = [new Enemy(-200), new Enemy(-160), new Enemy(-120)];
var player = new Player();

// This listens for key presses and sends the keys to the
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
