//APP CONSTANTS
var canvasTotalWidth = 600,
    enemyStartPositionX = -90,
    topRowPositionY = 55,
    middleRowPositionY = 140,
    bottomRowPositionY = 220,

    playerStartPositionX = 200,
    playerStartPositionY = 400,

    topRowEnemyVelocity = 100,
    middleRowEnemyVelocity = 200,
    bottomRowEnemyVelocity = 40,

    firstColumn = 0,
    secondColumn = 100,
    thirdColumn = 200,
    fourthColumn = 300,
    fifthColumn = 400,

    playerDiedMessage = 'You Died!',
    playerWonMessage = 'You Won!',

    middleRowPositionYCorrection = 10,
    topRowPositionYCorrection = 15,

    firstColumnDeathIntervalBegin = -60,
    firstColumnDeathIntervalEnd = 75,

    secondColumnDeathIntervalBegin = 15,
    secondColumnDeathIntervalEnd = 130,

    thirdColumnDeathIntervalBegin = 125,
    thirdColumnDeathIntervalEnd = 240,

    fourthColumnDeathIntervalBegin = 190,
    fourthColumnDeathIntervalEnd = 330,

    fifthColumnDeathIntervalBegin = 300,
    fifthColumnDeathIntervalEnd = 430,

    canvasLastRow = 40;

//PLAYER CONSTANTS
var leftBorder = 0,
    topBorder = 0,
    bottomBorder = 400,
    rightBorder = 300,

    moveLeft = -100,
    moveRight = 100,
    moveUp = -90,
    moveDown = 90;