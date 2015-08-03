import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_TRANSACTION,
      data: data
    })
  },

  list() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_TRANSACTION
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

  receiveTransactionDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_DATA_TRANSACTION,
      data: data
    })
  },

  receiveTransactionErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ERRORS_TRANSACTION,
      errors: errors
    })
  }
}
