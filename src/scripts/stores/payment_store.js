import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import PaymentUtils from "../utils/payment_utils";

const CHANGE_EVENT = "change";
let clientToken = "";
let payments = [];
let errors = [];

let PaymentStore = assign({}, EventEmitter.prototype, {
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
    return payments
  },

  getById(id) {
    for (let k in payments)
      if (payments[k].id == id) return payments[k]
  },

  getClientToken() {
    return clientToken
  },

  getErrors() {
    return errors
  }
})

PaymentStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.ADD_PAYMENT:
      PaymentUtils.create(action.data)
      break

    case ActionTypes.LIST_PAYMENT:
      PaymentUtils.load()
      break

    case ActionTypes.REQUEST_CLIENT_TOKEN:
      PaymentUtils.requestClientToken()
      break

    case ActionTypes.RECEIVE_CLIENT_TOKEN:
      clientToken = action.clientToken
      PaymentStore.emitChange()
      break

    case ActionTypes.RECEIVE_DATA_PAYMENT:
      payments = action.data
      PaymentStore.emitChange()
      break

    case ActionTypes.RECEIVE_ERRORS_PAYMENT:
      errors = action.errors
      PaymentStore.emitChange()
      break
  }
})

export default PaymentStore
