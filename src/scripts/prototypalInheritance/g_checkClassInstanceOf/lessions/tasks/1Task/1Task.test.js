var a = require('./').a;
var A = require('./').A;

describe('1Task', function() {
  it('should belong to the class A', function() {
    expect(a instanceof A).toBe(true);
  });
});