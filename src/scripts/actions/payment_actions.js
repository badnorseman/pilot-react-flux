import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_PAYMENT,
      data: data
    })
  },

  list() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_PAYMENT
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
      actionType: ActionTypes.RECEIVE_DATA_PAYMENT,
      data: data
    })
  },

  receivePaymentErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ERRORS_PAYMENT,
      errors: errors
    })
  }
}
