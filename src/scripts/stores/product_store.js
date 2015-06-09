var AppDispatcher = require("../dispatcher/app_dispatcher");
var EventEmitter = require("events").EventEmitter;
var ActionTypes = require("../constants/action_types");
var assign = require("react/lib/Object.assign");
import AppUtils from "../utils/app_utils";

var products = {};
var errors = {};

function add(text) {
};

function list() {
  AppUtils.get();
};

function remove(id) {
}

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
    case ActionTypes.ActionTypes.LIST:
      list();
      ProductStore.emitChange();
      break;

    case ActionTypes.ActionTypes.ADD:
      add(action.text);
      ProductStore.emitChange();
      break;

    case ActionTypes.ActionTypes.REMOVE:
      remove(action.id);
      ProductStore.emitChange();
      break;
  }
});

module.exports = ProductStore;
