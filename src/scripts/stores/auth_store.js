import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import AuthUtils from "../utils/auth_utils";

let user
let errors = []

const AuthStore = assign({}, EventEmitter.prototype, {
  getUser() {
    return user
  },

  getErrors() {
    return errors
  },

  emitChange() {
    return this.emit("change")
  },

  setToken(token) {
    localStorage.token = token
  },

  deleteToken() {
    localStorage.removeItem("token")
  },

  addChangeListener(callback) {
    this.on("change", callback)
  },

  removeChangeListener(callback) {
    this.removeListener("change", callback);
  }
})

AuthStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.LOGIN:
      AuthUtils.login(action.record)
      break

    case ActionTypes.LOGIN_CB:
      if (action.data) {
        user = action.data
        AuthStore.setToken(action.data.token)
      } else {
        errors = action.errors
        AuthStore.deleteToken()
      }
      AuthStore.emitChange()
      break

    case ActionTypes.LOGOUT:
      AuthUtils.logout()
      AuthStore.deleteToken()
      break

    case ActionTypes.SIGNUP:
      AuthUtils.signup(action.record)
      break

    case ActionTypes.SIGNUP_CB:
      if (action.data) {
        user = action.data
      } else {
        errors = action.errors
      }
      AuthStore.emitChange()
      break
  }
})

export default AuthStore;
