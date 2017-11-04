// for ie 9-
var animal = {
  eat: true
};

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal;
}

var rabbit = new Rabbit('Maxim');

export default rabbit;