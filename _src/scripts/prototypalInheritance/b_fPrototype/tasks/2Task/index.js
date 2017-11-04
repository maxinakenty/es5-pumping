function Rabbit() {}
Rabbit.prototype.eats = true;

var rabbit = new Rabbit();

Rabbit.prototype = {};

export default rabbit;