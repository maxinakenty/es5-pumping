var rabbit = require('./');

describe('third task', function () {
  it('should changed prop eats', function () {
    expect(rabbit.eats).toBe(false);
  });
});