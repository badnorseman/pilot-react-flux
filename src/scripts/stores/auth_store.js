import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import AuthUtils from "../utils/auth_utils";

let user;
let errors = [];

let AuthStore = assign({}, EventEmitter.prototype, {
  getUser() {
    return user
  },

  getErrors() {
    return errors
  },

  emitChange() {
    return this.emit("change")
  },

  addChangeListener(callback) {
    this.on("change", callback)
  },

  removeChangeListener(callback) {
    this.removeListener("change", callback)
  }
});

AuthStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.LOGIN:
      AuthUtils.login(action.data)
      break

    case ActionTypes.LOGOUT:
      AuthUtils.logout()
      break

    case ActionTypes.OAUTH:
      AuthUtils.oauth(action.provider)
      break

    case ActionTypes.RETURN_DATA:
      user = action.data
      AuthStore.emitChange()
      break

    case ActionTypes.RETURN_ERROR:
      errors = action.errors
      AuthStore.emitChange()
      break

    case ActionTypes.SIGNUP:
      AuthUtils.signup(action.data)
      break
  }
})

export default AuthStore
