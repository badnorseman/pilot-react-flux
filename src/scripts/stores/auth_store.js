import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import AuthUtils from "../utils/auth_utils";

const AUTH_TOKEN = "token";
const CHANGE_EVENT = "change";
let errors = [];
let user = {};

let AuthStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  emitChange() {
    return this.emit(CHANGE_EVENT)
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  deleteToken() {
    localStorage.removeItem(AUTH_TOKEN)
  },

  getErrors() {
    return errors
  },

  getToken() {
    localStorage.token
  },

  getUser() {
    return user
  },

  isLoggedIn() {
    return !!localStorage.token
  },

  setToken(token) {
    localStorage.token = token
  }
})

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

    case ActionTypes.RECEIVE_DATA_AUTH:
      if (action.data.token) {
        AuthStore.setToken(action.data.token)
        user = action.data
      } else {
        AuthStore.deleteToken()
        user = {}
      }
      AuthStore.emitChange()
      break

    case ActionTypes.RECEIVE_ERRORS_AUTH:
      errors = action.errors
      AuthStore.emitChange()
      break

    case ActionTypes.SIGNUP:
      AuthUtils.signup(action.data)
      break
  }
})

export default AuthStore
