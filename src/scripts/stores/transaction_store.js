"use strict";
import ActionTypes from "../constants/action_types";
import assign from "react/lib/Object.assign";
import Dispatcher from "../dispatcher/dispatcher";
import EventEmitter from "events";

const CHANGE_EVENT = "change";
let clientToken = "";
let transactions = [];
let errors = [];

let TransactionStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  emitChange() {
    return this.emit(CHANGE_EVENT)
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getAll() {
    return transactions
  },

  getById(id) {
    for (let k in transactions) {
      if (transactions[k].id == id) return transactions[k]
    }
  },

  getClientToken() {
    return clientToken
  },

  getErrors() {
    return errors
  }
})

TransactionStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.RECEIVE_CLIENT_TOKEN:
      clientToken = action.clientToken;
      TransactionStore.emitChange()
      break

    case ActionTypes.RECEIVE_TRANSACTION_DATA:
      transactions = action.data;
      TransactionStore.emitChange()
      break

    case ActionTypes.RECEIVE_TRANSACTION_ERRORS:
      errors = action.errors;
      TransactionStore.emitChange()
      break
  }
})

export default TransactionStore
