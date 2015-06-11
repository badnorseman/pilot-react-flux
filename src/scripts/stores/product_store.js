var Dispatcher = require("../dispatcher/dispatcher");
var EventEmitter = require("events").EventEmitter;
var ActionTypes = require("../constants/action_types");
var assign = require("react/lib/Object.assign");
var Api = require("../utils/utils");

var products = [];
var errors = [];

var ProductStore = assign({}, EventEmitter.prototype, {
  getProducts: function() {
    return products;
  },
  getErrors: function() {
    return errors;
  },
  emitChange: function() {
    this.emit("change");
  },
  addChangeListener: function(callback) {
    this.on("change", callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener("change", callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.LIST:
      Api.list();
      break;

    case ActionTypes.LIST_CB:
      products = action.data;
      errors = action.errors;
      ProductStore.emitChange();
      break;

    case ActionTypes.ADD:
      Api.add(action.record);
      break;

    case ActionTypes.ADD_CB:
      products.push(action.data);
      errors = action.errors;
      ProductStore.emitChange();
      break;

    case ActionTypes.REMOVE:
      Api.remove(action.id);
      break;

    case ActionTypes.REMOVE_CB:
      products = removeItem(action.id);
      errors = action.errors;
      ProductStore.emitChange();
      break;
  }
});

function removeItem(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
      return products;
    }
  };
};

module.exports = ProductStore;
