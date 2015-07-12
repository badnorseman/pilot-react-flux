import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import PaymentUtils from "../utils/payment_utils";

let clientToken = ""
let payment = []
let errors = []

let PaymentStore = assign({}, EventEmitter.prototype, {
  getClientToken() {
    return clientToken
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

PaymentStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.REQUEST_CLIENT_TOKEN:
      PaymentUtils.fetchClientToken()
      break

    case ActionTypes.RECEIVE_CLIENT_TOKEN:
      clientToken = action.client_token
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
