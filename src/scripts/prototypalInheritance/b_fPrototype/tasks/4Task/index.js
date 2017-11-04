function Rabbit() {}
Rabbit.prototype.eats = true;

var rabbit = new Rabbit();

delete rabbit.eats;

module.exports = rabbit;