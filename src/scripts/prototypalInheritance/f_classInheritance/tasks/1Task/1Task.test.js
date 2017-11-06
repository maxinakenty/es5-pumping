var clock = require('./');

describe('Clock', function() {
  it('should get template', function() {
    expect(clock._template).toBe('h:m:s');
  });

  it('should get precission', function() {
    expect(clock._precision).toBe(2000);
  });
});