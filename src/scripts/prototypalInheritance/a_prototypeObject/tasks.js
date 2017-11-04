// a)
var animals = {
  jumps: null,
  eat: function() {
    this.full = true;
  },
};

var rabbit = {
  jumps: true,
  __proto__: animals,
};

var firstResult = rabbit.jumps;

delete rabbit.jumps;

var secondResult = rabbit.jumps;

delete animals.jumps;

var thirdResult = animals.jumps;

// b

rabbit.eat();
var fourthResult = rabbit.full;

// c
var head = {
  glasses: 1,
  __proto__: head,
};

var table = {
  pen: 3,
  __proto__: table,
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

var pockets = {
  money: 2000,
  __proto__: bed,
};

module.exports = {
  firstResult,
  secondResult,
  thirdResult,
  fourthResult,
  bed,
  pockets,
};