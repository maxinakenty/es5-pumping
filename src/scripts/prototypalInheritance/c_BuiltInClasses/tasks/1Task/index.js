Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

Function.prototype.defer = function(ms) {
  var f = this;

  return function() {
    var args = arguments;
    var context = this;

    setTimeout(function() {
      f.apply(context, args);
    }, ms);
  };
};
