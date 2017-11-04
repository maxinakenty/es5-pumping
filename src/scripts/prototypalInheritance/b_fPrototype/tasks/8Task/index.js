function Rabbit(name) {
  this.name = name;
}

var rabbit = new Rabbit('Roger');
var rabbit2 = new rabbit.constructor('Grag');

module.exports = {
  Rabbit,
  rabbit,
  rabbit2,
};


