String.prototype.repeat = function (times) {
  return new Array(times + 1).join(this);
};

Object.prototype.each = function(f) {
  for (var prop in this) {
    var value = this[prop];
    f.call(value, prop, value);
  }
};

Object.defineProperty(Object.prototype, 'each', {
  enumerable: false,
});


describe('3 lessions', function() {
  it('should add repeat method in String.prototype', function() {
    expect('ля'.repeat(3)).toBe('ляляля');
  });
});
