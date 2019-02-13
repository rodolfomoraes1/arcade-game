var player = new Player(playerStartPositionX, playerStartPositionY);

var topRowEnemy = new Enemy(enemyStartPositionX, topRowPositionY, topRowEnemyVelocity);
var middleRowEnemy = new Enemy(enemyStartPositionX, middleRowPositionY, middleRowEnemyVelocity);
var bottomRowEnemy = new Enemy(enemyStartPositionX, bottomRowPositionY, bottomRowEnemyVelocity);
var allEnemies = [topRowEnemy, middleRowEnemy, bottomRowEnemy];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function checkCollisions() {
    checkCollisionByColumn(player.y, bottomRowEnemy);
    checkCollisionByColumn(player.y + middleRowPositionYCorrection, middleRowEnemy);
    checkCollisionByColumn(player.y + topRowPositionYCorrection, topRowEnemy);
}

function checkCollisionByColumn(playerRowPosition, enemy) {
    if(isCollided(playerRowPosition, enemy, firstColumnDeathIntervalBegin, firstColumnDeathIntervalEnd, firstColumn) ||
        isCollided(playerRowPosition, enemy, secondColumnDeathIntervalBegin, secondColumnDeathIntervalEnd, secondColumn) ||
        isCollided(playerRowPosition, enemy, thirdColumnDeathIntervalBegin, thirdColumnDeathIntervalEnd, thirdColumn) ||
        isCollided(playerRowPosition, enemy, fourthColumnDeathIntervalBegin, fourthColumnDeathIntervalEnd, fourthColumn) ||
        isCollided(playerRowPosition, enemy, fifthColumnDeathIntervalBegin, fifthColumnDeathIntervalEnd, fifthColumn)
    ){
        player.died();
    }
}

function isCollided(playerRowPosition, enemy, playerPositionXIntervalBegin, playerPositionXIntervalEnd, column){
    return (enemy.y == playerRowPosition &&
        player.x == column &&
        enemy.x > playerPositionXIntervalBegin &&
        enemy.x < playerPositionXIntervalEnd
    );
}

function snackbar(message) {
    var snackbarElement = document.getElementById("snackbar");
    snackbarElement.innerHTML = message;
    snackbarElement.className = "show";
    setTimeout(function(){ snackbarElement.className = snackbarElement.className.replace("show", ""); }, 2000);
}

function manageScore(won) {
    var score = document.getElementById("score");
    var playerScore = player.getPlayerScore();
    if(won){
        playerScore += 1;
    } else{
        if(playerScore > 0){
            playerScore -= 1;
        }
    }
    score.innerHTML = player.setPlayerScore(playerScore);
}