import rabbit from './';

describe('forth task', function () {
  it('should not remove eats prop', function () {
    expect(rabbit.eats).toBe(true);
  });
});