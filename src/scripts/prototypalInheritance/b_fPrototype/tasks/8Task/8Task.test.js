var rabbit = require('./').rabbit;
var rabbit2 = require('./').rabbit2;
var Rabbit = require('./').Rabbit;

describe('8 task', function() {
  it('should rabbit name Roger', function() {
    expect(rabbit.name).toBe('Roger');
  });

  it('should rabbit2 name Grag', function() {
    expect(Rabbit.prototype.constructor).toBe(Rabbit);
  });
});
