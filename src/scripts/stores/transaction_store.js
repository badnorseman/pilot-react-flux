"use strict";
import ActionTypes from "../constants/action_types";
import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import { register } from "../dispatcher/dispatcher";

const CHANGE_EVENT = "change";
let clientToken = "";
let errors = [];
let transactions = [];

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

TransactionStore.dispatchToken = register((action) => {
  switch(action.type) {
    case ActionTypes.CLIENT_TOKEN_ERROR:
    case ActionTypes.TRANSACTION_CREATE_ERROR:
    case ActionTypes.TRANSACTION_LOAD_ERROR:
      clientToken = "";
      errors = action.error;
      TransactionStore.emitChange();
      break

    case ActionTypes.CLIENT_TOKEN_RESPONSE:
      clientToken = action.clientToken;
      TransactionStore.emitChange();
      break

    case ActionTypes.TRANSACTION_CREATE_RESPONSE:
    case ActionTypes.TRANSACTION_LOAD_RESPONSE:
      transactions = action.data;
      TransactionStore.emitChange();
      break
  }
})

export default TransactionStore
