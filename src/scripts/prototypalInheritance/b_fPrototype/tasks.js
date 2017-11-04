// // a)

// function Mouse() {}
// Mouse.prototype = {
//   eat: true,
// };

// var mouse = new Mouse();
// // mouse.eat === true


// // b
// function Cow() {}
// Cow.prototype = {
//   eat: true,
// };

// var cow = new Cow();

// Cow.prototype = {};

// // cow.eat === true


// // c
// function Bird() {}
// Bird.prototype = {
//   eat: true,
// };

// var bird = new Bird();

// bird.prototype.eat = false;

// // bird.eat === false

// function Dog() {}
// Dog.prototype = {
//   eat: true,
// };

// var dog = new Dog();

// delete dog.eat;

// // dog.eat === true

// function Duck() {}
// Duck.prototype = {
//   eat: true,
// };

// var duck = new Duck();

// delete Duck.prototype.eat;

// // duck.eat === undefined



export function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  return this.name;
};

export var user = new User('Max');


