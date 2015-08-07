import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as TransactionUtils from "../utils/transaction_utils";

export function add(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.ADD_TRANSACTION,
    data: data
  });
  TransactionUtils.create(data);
}

export function list() {
  Dispatcher.dispatch({
    actionType: ActionTypes.LIST_TRANSACTION
  });
  TransactionUtils.load();
}

export function requestClientToken() {
  Dispatcher.dispatch({
    actionType: ActionTypes.REQUEST_CLIENT_TOKEN,
  });
  TransactionUtils.requestClientToken();
}

export function receiveClientTokenFromServer(clientToken) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_CLIENT_TOKEN,
    clientToken: clientToken
  })
}

export function receiveTransactionDataFromServer(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_TRANSACTION_DATA,
    data: data
  })
}

export function receiveTransactionErrorsFromServer(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_TRANSACTION_ERRORS,
    errors: errors
  })
}
