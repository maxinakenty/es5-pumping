function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
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
