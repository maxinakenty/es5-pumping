var mouse = require('./');

describe('first task', function () {
  it('should not prop eats', function () {
    expect(mouse.eats).toBe(undefined);
  });
});