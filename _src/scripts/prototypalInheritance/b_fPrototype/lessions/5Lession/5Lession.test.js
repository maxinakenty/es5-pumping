import Rabbit from './';

describe('5 lesstion', function() {
  it ('should Rabbit has constructor', function() {
    expect(Object.getOwnPropertyNames(Rabbit.prototype)).toEqual(['constructor']);
  });

  it('should prototype constructor is Rabbit', function() {
    expect(Rabbit.prototype.constructor).toBe(Rabbit);
  });
});
