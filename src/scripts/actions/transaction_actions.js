import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as TransactionUtils from "../utils/transaction_utils";

export function add(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_ADD,
    data: data
  });
  TransactionUtils.create(data);
}

export function list() {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_REQUEST
  });
  TransactionUtils.list();
}

export function requestClientToken() {
  Dispatcher.dispatch({
    actionType: ActionTypes.CLIENT_TOKEN_REQUEST,
  });
  TransactionUtils.requestClientToken();
}

export function receiveClientToken(clientToken) {
  Dispatcher.dispatch({
    actionType: ActionTypes.CLIENT_TOKEN_REQUEST_SUCCESS,
    clientToken: clientToken
  })
}

export function receiveClientTokenErrors(clientToken) {
  Dispatcher.dispatch({
    actionType: ActionTypes.CLIENT_TOKEN_REQUEST_ERROR,
    errors: errors
  })
}

export function receiveTransactionData(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_REQUEST_SUCCESS,
    data: data
  })
}

export function receiveTransactionErrors(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.TRANSACTION_REQUEST_ERROR,
    errors: errors
  })
}
