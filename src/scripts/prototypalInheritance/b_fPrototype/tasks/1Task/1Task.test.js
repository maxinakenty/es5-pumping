var mouse = require('./');

describe('first task', function() {
  it('should not changed prop eats', function() {
    expect(mouse.eats).toBe(true);
  });
});