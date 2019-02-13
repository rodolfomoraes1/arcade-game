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
            if(player.x > leftBorder){
                player.x += moveLeft;
            }
            break;
        case 'up':
            if(player.y == canvasLastRow){
                player.won();
            }
            else if(player.y > topBorder){
                player.y += moveUp;
            }
            break;
        case 'right':
            if(player.x <= rightBorder){
                player.x += moveRight;
            }
            break;
        case 'down':
            if(player.y < bottomBorder){
                player.y += moveDown;
            }
            break;
    }
};

Player.prototype.died = function() {
    player.x = playerStartPositionX;
    player.y = playerStartPositionY;
    snackbar(playerDiedMessage);
    manageScore(false);
};

Player.prototype.won = function() {
    player.x = playerStartPositionX;
    player.y = playerStartPositionY;
    snackbar(playerWonMessage);
    manageScore(true);
};