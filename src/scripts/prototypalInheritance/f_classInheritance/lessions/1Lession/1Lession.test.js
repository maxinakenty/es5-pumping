var rabbit = require('./').rabbit;
var Rabbit = require('./').Rabbit;

describe('class inheritance', function() {
  it('should has name method', function() {
    expect(rabbit.name).toBe('Roger');
  });

  it('should has stop method', function() {
    expect(rabbit.stop()).toBe('Roger cтоит');
  });
});