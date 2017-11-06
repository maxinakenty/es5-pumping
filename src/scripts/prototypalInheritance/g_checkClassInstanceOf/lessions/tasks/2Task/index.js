function Animal() {}
function Rabbit() {}

Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

module.exports = {
  Animal,
  Rabbit,
  rabbit
};
