// Proto

var user = {
  name: 'Max',
};

Object.setPrototypeOf(user, { age: 29 });

export var userWithAge = user;

  
var animal = {
  eat: true,
};

export var rabbit = {
  jump: true,
  __proto__: animal,
};

export var data = Object.create(null);








