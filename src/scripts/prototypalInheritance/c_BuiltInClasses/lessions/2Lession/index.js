function test() {
  return Array.prototype.join.call(arguments, '-');
}

module.exports = test;
