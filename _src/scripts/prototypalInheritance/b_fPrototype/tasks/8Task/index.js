export function Rabbit(name) {
  this.name = name;
}

export var rabbit = new Rabbit('Roger');
export var rabbit2 = new rabbit.constructor('Grag');

