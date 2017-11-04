function Rabbit() {}
Rabbit.prototype.eats = true;

var rabbit = new Rabbit();

Rabbit.prototype = {};

module.exports = rabbit;