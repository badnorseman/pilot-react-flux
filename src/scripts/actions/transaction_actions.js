import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as TransactionUtils from "../utils/transaction_utils";

export function add(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_CREATE,
    data: data
  });
  TransactionUtils.create(data);
}

export function list() {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_LOAD
  });
  TransactionUtils.load();
}

export function requestClientToken() {
  Dispatcher.dispatch({
    actionType: ActionTypes.CLIENT_TOKEN,
  });
  TransactionUtils.requestClientToken();
}

export function receiveClientToken(clientToken) {
  Dispatcher.dispatch({
    actionType: ActionTypes.CLIENT_TOKEN_SUCCEED,
    clientToken: clientToken
  })
}

export function receiveClientTokenErrors(clientToken) {
  Dispatcher.dispatch({
    actionType: ActionTypes.CLIENT_TOKEN_FAILED,
    errors: errors
  })
}

export function receiveTransactionData(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_LOAD_SUCCEED,
    data: data
  })
}

export function receiveTransactionErrors(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_LOAD_FAILED,
    errors: errors
  })
}
