// a)

function Mouse() {}
Mouse.prototype = {
  eats: true
};

var mouse = new Mouse();

delete Mouse.prototype.eats;

module.exports = mouse;
