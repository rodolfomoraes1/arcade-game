function Character(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
};

Character.prototype.update = function() {};
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};