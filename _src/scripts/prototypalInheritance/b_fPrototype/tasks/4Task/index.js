function Rabbit() {}
Rabbit.prototype.eats = true;

var rabbit = new Rabbit();

delete rabbit.eats;

export default rabbit;