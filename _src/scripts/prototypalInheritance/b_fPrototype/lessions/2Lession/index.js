var animal = {
  eat: true
};

function Horse(name) {
  this.name = name;
}

Horse.prototype = animal;

var horse = new Horse('Julia');

export default horse;
