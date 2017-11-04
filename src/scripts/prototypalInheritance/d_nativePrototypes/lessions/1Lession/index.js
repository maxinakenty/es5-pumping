function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;

  return this.name + ' бежит! Скорость ' + this.speed;
};

Animal.prototype.stop = function() {
  this.speed = 0;

  return this.name + ' стоит';
};

var animal = new Animal('Зверь');

module.exports = animal;