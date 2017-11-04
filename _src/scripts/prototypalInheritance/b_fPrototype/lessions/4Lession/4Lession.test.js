import Rabbit from './';

describe('fourth lession', function () {
  it('should Rabbit has constructor Rabbit', function() {
    expect(Rabbit.prototype.constructor).toBe(Rabbit);
  });

  it('should Rabbit has prop eat', function() {
    expect(Rabbit.prototype.eat).toBe(true);
  });

  it('should Rabbit has prop jump', function() {
    expect(Rabbit.prototype.jump).toBe(true);
  });
});
