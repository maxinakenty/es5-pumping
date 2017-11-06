var Animal = require('./').Animal;
var Rabbit = require('./').Rabbit;
var rabbit = require('./').rabbit;

describe('2Task', function() {
  it('should belong to the class Rabbit', function() {
    expect(rabbit instanceof Rabbit).toBe(true);
  });

  it('should belong to the class Animal', function() {
    expect(rabbit instanceof Animal).toBe(true);
  });

  it('should belong to the class Object', function() {
    expect(rabbit instanceof Object).toBe(true);
  });
});
