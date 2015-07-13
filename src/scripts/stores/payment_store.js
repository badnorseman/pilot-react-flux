import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import PaymentUtils from "../utils/payment_utils";

let clientToken = ""
let payments = []
let errors = []

let PaymentStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on("change", callback)
  },

  emitChange() {
    return this.emit("change")
  },

  removeChangeListener(callback) {
    this.removeListener("change", callback)
  },

  getClientToken() {
    return clientToken
  },

  getErrors() {
    return errors
  },

  getPayment(id) {
    let payment = {}

    for (let k in payments)
      if (payments[k].id == id)
        payment = payments[k]

    return payment
  },

  getPayments() {
    return payments
  }
});

PaymentStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.ADD_PAYMENT:
      PaymentUtils.create(action.data)
      break

    case ActionTypes.LIST_PAYMENTS:
      PaymentUtils.load()
      break

    case ActionTypes.REQUEST_CLIENT_TOKEN:
      PaymentUtils.requestClientToken()
      break

    case ActionTypes.RECEIVE_CLIENT_TOKEN:
      clientToken = action.clientToken
      PaymentStore.emitChange()
      break

    case ActionTypes.RECEIVE_PAYMENT_DATA:
      payments = action.data
      PaymentStore.emitChange()
      break

    case ActionTypes.RECEIVE_PAYMENT_ERRORS:
      errors = action.errors
      PaymentStore.emitChange()
      break
  }
})

export default PaymentStore
