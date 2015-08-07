"use strict";
import ActionTypes from "../constants/action_types";
import assign from "react/lib/Object.assign";
import Dispatcher from "../dispatcher/dispatcher";
import EventEmitter from "events";

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
    localStorage.token = token;
  }
})

AuthStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.AUTH_REQUEST_ERROR:
      errors = action.errors;
      AuthStore.emitChange()
      break

    case ActionTypes.AUTH_REQUEST_SUCCESS:
      if (action.data.token) {
        AuthStore.setToken(action.data.token)
        user = action.data;
      } else {
        AuthStore.deleteToken()
        user = {};
      }
      AuthStore.emitChange()
      break
  }
})

export default AuthStore
