var AppDispatcher = require("../dispatcher/app_dispatcher");
var EventEmitter = require("events").EventEmitter;
var ActionTypes = require("../constants/action_types");
var assign = require("react/lib/Object.assign");
var AppUtils = require("../utils/app_utils");

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

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.ActionTypes.LIST1:
      AppUtils.list1();
      break;

    case ActionTypes.ActionTypes.LIST2:
      products = action.json;
      ProductStore.emitChange();
      break;

    case ActionTypes.ActionTypes.ADD:
      console.log("ADD ", action.text)
      ProductStore.emitChange();
      break;

    case ActionTypes.ActionTypes.REMOVE:
      console.log("REMOVE ", action.id)
      ProductStore.emitChange();
      break;
  }
});

module.exports = ProductStore;
