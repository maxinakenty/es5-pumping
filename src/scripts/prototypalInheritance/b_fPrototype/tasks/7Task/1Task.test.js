var rabbit = require('./').rabbit;
var Rabbit = require('./').Rabbit;

describe('seventh task', function() {
  it('should has rabbit name', function() {
    expect(rabbit.sayHi()).toBe('Roger');
  });

  it('should does\'t name prop', function() {
    expect(Rabbit.prototype.sayHi()).toBe(undefined);
  });

  it('should does\'t name prop', function() {
    expect(Object.getPrototypeOf(rabbit).sayHi()).toBe(undefined);
  });

  it('should does\'t name prop', function () {
    expect(rabbit.__proto__.sayHi()).toBe(undefined);
  });
});

