function Rabbit(name) {
  this.name = name;
}

var arr = [];

var rabbit = new Rabbit('Roger');

module.exports = {
  Rabbit,
  rabbit,
  arr,
};