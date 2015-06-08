var AppDispatcher = require("../dispatchers/app_dispatcher");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var ProductConstants = require("../constants/product_constants");

var _products = {};

function add(product) {
};

function edit(product) {
};

function remove(id) {
};

var ProductStore = assign({}, EventEmitter.prototype, {

  get: function() {
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

  dispatchToken: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case ProductConstants.ADD:
        add(action.data);
        ProductStore.emitChange();
        break;

      case ProductConstants.EDIT:
        edit(action.data);
        ProductStore.emitChange();
        break;

      case ProductConstants.REMOVE:
        remove(action.data);
        ProductStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = ProductStore;
