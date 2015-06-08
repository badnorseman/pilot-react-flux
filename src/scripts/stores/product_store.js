var AppDispatcher = require("../dispatchers/app_dispatcher");
var EventEmitter = require("events").EventEmitter;
var ProductConstants = require("../constants/product_constants");
var assign = require("object-assign");

var _products = [
  {
    name: "Name1",
    description: "Description1"
  },
  {
    name: "Name2",
    description: "Description2"
  }
];

function add(product) {
};

function edit(product) {
};

function remove(id) {
};

var ProductStore = assign({}, EventEmitter.prototype, {

  getProducts: function() {
    return _products;
  },

  emitChange: function() {
    this.emit("change");
  },

  addChangeListener: function(callback) {
    this.on("change", callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener("change", callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case ProductConstants.ADD:
        add(action.product);
        break;

      case ProductConstants.EDIT:
        edit(action.product);
        break;

      case ProductConstants.REMOVE:
        remove(action.id);
        break;
    }

    ProductStore.emitChange();

    return true;
  })
});

module.exports = ProductStore;
