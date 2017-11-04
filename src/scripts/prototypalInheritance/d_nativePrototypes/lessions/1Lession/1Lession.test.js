var animal = require('./');

describe('1 lession', function() {
  it('should get animal speed', function() {
    expect(animal.run(5)).toBe('Зверь бежит! Скорость 5');
  });

  it('should add speed', function() {
    expect(animal.run(5)).toBe('Зверь бежит! Скорость 10');
  });

  it('should stop', function() {
    expect(animal.stop()).toBe('Зверь стоит');
  });
});
