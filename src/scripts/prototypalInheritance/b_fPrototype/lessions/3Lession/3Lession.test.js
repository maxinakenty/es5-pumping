var Cat = require('./');

describe('third lession', function () {
  it('should has constructor Cat', function () {
    expect(Cat.prototype.constructor).toBe(Cat);
  });
});
