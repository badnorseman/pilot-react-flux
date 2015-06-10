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
    case ActionTypes.ActionTypes.LIST:
      Api.list();
      break;

    case ActionTypes.ActionTypes.LIST_CB:
      products = action.json;
      ProductStore.emitChange();
      break;

    case ActionTypes.ActionTypes.ADD:
      Api.add(action.record);
      break;

    case ActionTypes.ActionTypes.ADD_CB:
      ProductStore.emitChange();
      break;

    case ActionTypes.ActionTypes.REMOVE:
      Api.remove(action.id);
      break;

    case ActionTypes.ActionTypes.REMOVE_CB:
      ProductStore.emitChange();
      break;
  }
});

module.exports = ProductStore;
