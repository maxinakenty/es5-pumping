var coffeMachine = require('./');

describe('Coffe machine', function() {
  it('should get coffeMachine power', function() {
    expect(coffeMachine._power).toBe(10000);
  });

  it('should get water amount', function() {
    expect(coffeMachine._waterAmount).toBe(50);
  });

  it('should get time to boil', function() {
    expect(coffeMachine.getTimeToBoil()).toBe(1680);
  });
});
