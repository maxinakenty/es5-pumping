function Animal(name) {}

Animal.prototype.run = function(speed) {
  this.speed += speed;

  return this.name + ' бежит!Скорость ' + this.speed;
};

Animal.prototype.stop = function () {
  this.speed = 0;

  return this.name + ' cтоит';
};

function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jump = function() {
  this.speed++;

  return this.name + ' прыгает.';
};

Rabbit.prototype.run = function() {
  Animal.prototype.run.apply(this, arguments);
  this.jump();
};

var rabbit = new Rabbit('Roger');
module.exports = {
  Rabbit,
  rabbit,
};
