function Rabbit() {}

Rabbit.prototype = {
  eat: true,
  constructor: Rabbit
};

Rabbit.prototype.jump = true;

module.exports = Rabbit;
