import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import TransactionUtils from "../utils/transaction_utils";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_TRANSACTION,
      data: data
    });
    TransactionUtils.create(data);
  },

  list() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_TRANSACTION
    });
    TransactionUtils.load();
  },

  requestClientToken() {
    Dispatcher.dispatch({
      actionType: ActionTypes.REQUEST_CLIENT_TOKEN,
    });
    TransactionUtils.requestClientToken();
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
