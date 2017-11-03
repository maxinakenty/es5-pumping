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

export var firstResult = rabbit.jumps;

delete rabbit.jumps;

export var secondResult = rabbit.jumps;

delete animals.jumps;

export var thirdResult = animals.jumps;

// b

rabbit.eat();
export var fourthResult = rabbit.full;

// c
var head = {
  glasses: 1,
  __proto__: head,
};

var table = {
  pen: 3,
  __proto__: table,
};

export var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

export var pockets = {
  money: 2000,
  __proto__: bed,
};



