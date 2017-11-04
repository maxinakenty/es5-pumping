function CoffeMachine(power) {
  this._power = power;
  this._waterAmount = 0;
}

CoffeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeMachine.prototype.getTimeToBoil = function() {
  return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeMachine.prototype.run = function() {
  setTimeout(function() {
    console.log('Кофе готов!');
  }, this.getTimeToBoil());
};

CoffeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

var coffeMachine = new CoffeMachine(10000);
coffeMachine.setWaterAmount(50);
coffeMachine.run();

module.exports = coffeMachine;

