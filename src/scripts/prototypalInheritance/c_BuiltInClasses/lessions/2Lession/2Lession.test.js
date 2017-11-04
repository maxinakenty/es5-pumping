var test = require('./');

describe('test function', function() {
  it('should call join method from Array.prototype', function() {
    expect(test(1, 2, 3, 4)).toBe('1-2-3-4');
  });
});
