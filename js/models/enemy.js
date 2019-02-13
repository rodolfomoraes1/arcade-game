function Enemy (xPosition, yPosition, velocity) {
    Character.call(this, xPosition, yPosition);

    this.sprite = 'images/enemy-bug.png';
    this.velocity = velocity;
};
Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(dt) {
    if (this.x >= canvasTotalWidth) {
        this.x = enemyStartPositionX;
    }

    this.x += (Math.abs(this.x) + this.velocity) * dt;
};