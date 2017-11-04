function Hamster() {
  this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found('Apply');
speedy.found('Nut');

module.exports = {
  speedy,
  lazy,
};
