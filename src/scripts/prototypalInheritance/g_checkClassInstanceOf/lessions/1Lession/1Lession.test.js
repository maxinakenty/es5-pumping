var rabbit = require('./').rabbit;
var Rabbit = require('./').Rabbit;
var arr = require('./').arr;

describe('instanceof', function() {
  it('should belongs to the class Rabbit', function() {
    expect(rabbit instanceof Rabbit).toBe(true);
  });

  it('should belongs to the class Array', function() {
    expect(arr instanceof Array).toBe(true);
  });

  it('should belongs to the class Object', function() {
    expect(arr instanceof Object).toBe(true);
  });
});