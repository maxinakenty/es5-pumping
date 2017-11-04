function Rabbit() {}
Rabbit.prototype.eats = true;

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

module.exports = rabbit;