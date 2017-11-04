var hamsters = require('./');
var speedy = hamsters.speedy;
var lazy = hamsters.lazy;

describe('Hamsters', function() {
  it('should get speedy hamster food', function() {
    expect(speedy.food.length).toBe(2);
  });

  it('should get lazy hamster food', function() {
    expect(lazy.food.length).toBe(0);
  });
});