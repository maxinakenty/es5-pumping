function A() {}

function B() {}

A.prototype = B.prototype = {};

var a = new A();

module.exports = {
  A,
  a,
};
