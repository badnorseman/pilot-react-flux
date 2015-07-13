import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  addPayment(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_PAYMENT,
      data: data
    })
  },

  listPayments() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_PAYMENTS
    })
  },

  requestClientToken() {
    Dispatcher.dispatch({
      actionType: ActionTypes.REQUEST_CLIENT_TOKEN,
    })
  },

  receiveClientTokenFromServer(clientToken) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_CLIENT_TOKEN,
      clientToken: clientToken
    })
  },

  receivePaymentDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_PAYMENT_DATA,
      data: data
    })
  },

  receivePaymentErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_PAYMENT_ERRORS,
      errors: errors
    })
  }
}
