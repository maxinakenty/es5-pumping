// a)

function Mouse() {}
Mouse.prototype = {
  eats: true,
};

var mouse = new Mouse();

module.exports = mouse;

