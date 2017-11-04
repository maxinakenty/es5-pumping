// Proto

var user = {
  name: 'Max',
};

Object.setPrototypeOf(user, { age: 29 });
var userWithAge = user;

  
var animal = {
  eat: true,
};

var rabbit = {
  jump: true,
  __proto__: animal,
};

var data = Object.create(null);

module.exports = {
  userWithAge,
  rabbit,
  data,
};









