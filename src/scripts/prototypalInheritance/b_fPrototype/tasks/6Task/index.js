var menuOptions = {
  height: 850,
  background: 'black'
};


function Menu(options) {
  this.options = Object.create(options);
  this.options.width = options.width || 300;
}

var menu = new Menu(menuOptions);

module.exports = {
  menuOptions,
  menu,
};
