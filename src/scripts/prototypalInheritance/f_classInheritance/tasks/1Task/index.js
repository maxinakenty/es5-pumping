function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  var res = this._template
    .replace('h', hour)
    .replace('m', min)
    .replace('s', sec);

    console.log(res);
};

Clock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setTimeout(function() {
    self._render();
  }, 1000);
};

function ExtendedClock(options) {
  Clock.apply(this, arguments);
  this._precision = +options.precision;
}

ExtendedClock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setTimeout(function() {
    this._render();
  }, this._precision);
};

var clock = new ExtendedClock({
  template: 'h:m:s',
  precision: 2000,
});

module.exports = clock;
