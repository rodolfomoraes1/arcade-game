function Player (xPosition, yPosition) {
    Character.call(this, xPosition, yPosition);

    this.sprite = 'images/char-boy.png';
    this.playerScore = 0;
    this.getPlayerScore = function getPlayerScore() {
        return this.playerScore;
    }
    this.setPlayerScore = function setPlayerScore(playerScore) {
        return this.playerScore = playerScore;
    }
};
Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    console.log('update');
};

Player.prototype.handleInput = function (key) {
    switch(key) {
        case 'left':
            if(this.x > leftBorder){
                this.x += moveLeft;
            }
            break;
        case 'up':
            if(this.y == canvasLastRow){
                this.won();
            }
            else if(this.y > topBorder){
                this.y += moveUp;
            }
            break;
        case 'right':
            if(this.x <= rightBorder){
                this.x += moveRight;
            }
            break;
        case 'down':
            if(this.y < bottomBorder){
                this.y += moveDown;
            }
            break;
    }
};

Player.prototype.died = function() {
    this.startPosition();
    snackbar(playerDiedMessage);
    manageScore(false);
};

Player.prototype.won = function() {
    this.startPosition();
    snackbar(playerWonMessage);
    manageScore(true);
};

Player.prototype.startPosition = function() {
    this.x = playerStartPositionX;
    this.y = playerStartPositionY;
};