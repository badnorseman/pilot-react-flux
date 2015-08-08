import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as TransactionUtils from "../utils/transaction_utils";

export function add(data) {
  Dispatcher.dispatch({
    type: ActionTypes.TRANSACTION_ADD,
    data: data
  });
  TransactionUtils.create(data);
}

export function list() {
  Dispatcher.dispatch({
    type: ActionTypes.TRANSACTION_REQUEST
  });
  TransactionUtils.load();
}

export function requestClientToken() {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST,
  });
  TransactionUtils.fetchClientToken();
}

export function receiveClientToken(clientToken) {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST_SUCCESS,
    clientToken: clientToken
  })
}

export function receiveClientTokenErrors(clientToken) {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST_ERROR,
    errors: errors
  })
}

export function receiveTransactionData(data) {
  Dispatcher.dispatch({
    type: ActionTypes.TRANSACTION_REQUEST_SUCCESS,
    data: data
  })
}

export function receiveTransactionErrors(errors) {
  Dispatcher.dispatch({
    type: ActionTypes.TRANSACTION_REQUEST_ERROR,
    errors: errors
  })
}
