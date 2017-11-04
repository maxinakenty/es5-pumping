import rabbit from './';

describe('first lesstion', function() {
  it('should has name prop', function() {
    expect(rabbit.name).toBe('Maxim');
  });

  it('should has eat prop', function() {
    expect(rabbit.eat).toBe(true);
  });
});

