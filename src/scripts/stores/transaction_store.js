"use strict";
import ActionTypes from "../constants/action_types";
import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import { register } from "../dispatcher/dispatcher";
import { Schema, arrayOf, normalize } from "normalizr";

const CHANGE_EVENT = "change";
const transactionSchema = new Schema("transactions", { idAttribute: "id" });
let clientToken = "";
let errors = [];
let transactions = {};

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
      let normalized = normalize(action.data, arrayOf(transactionSchema));
      transactions = normalized.entities.transactions
      TransactionStore.emitChange();
      break
  }
})

export default TransactionStore
