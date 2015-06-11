var Dispatcher = require("../dispatcher/dispatcher");
var EventEmitter = require("events").EventEmitter;
var ActionTypes = require("../constants/action_types");
var assign = require("react/lib/Object.assign");
var Api = require("../utils/utils");

var user;
var errors = [];

var AuthStore = assign({}, EventEmitter.prototype, {

  getUser: function() {
    return user;
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
    case ActionTypes.LOGIN:
      Api.login(action.record);
      break;

    case ActionTypes.LOGIN_CB:
      user = action.data;
      errors = action.errors;
      AuthStore.emitChange();
      break;
  }
});

module.exports = AuthStore;
