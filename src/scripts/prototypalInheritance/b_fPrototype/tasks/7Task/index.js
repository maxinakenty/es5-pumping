function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  return this.name;
};

var rabbit = new Rabbit('Roger');

rabbit;

module.exports = {
  Rabbit,
  rabbit,
};
