import rabbit from './';

describe('second task', function() {
  it('should not change prop eats', function() {
    expect(rabbit.eats).toBe(true);
  });
});