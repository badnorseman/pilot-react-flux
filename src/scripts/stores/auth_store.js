var Dispatcher = require("../dispatcher/dispatcher");
var EventEmitter = require("events").EventEmitter;
var ActionTypes = require("../constants/action_types");
var assign = require("react/lib/Object.assign");
var AuthUtils = require("../utils/auth_utils");

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

  setToken: function(token) {
    localStorage.token = token;
  },

  deleteToken: function() {
    localStorage.removeItem("token");
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
      AuthUtils.login(action.record);
      break;

    case ActionTypes.LOGIN_CB:
      if (action.data) {
        user = action.data;
        AuthStore.setToken(action.data.token);
      } else {
        errors = action.errors;
        AuthStore.deleteToken();
      }
      AuthStore.emitChange();
      break;

    case ActionTypes.LOGOUT:
      AuthUtils.logout();
      AuthStore.deleteToken();
      break;
  }
});

module.exports = AuthStore;
