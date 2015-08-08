import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as TransactionUtils from "../utils/transaction_utils";
import * as ApiUtils from "../utils/api_utils";

const TRANSACTION = "TRANSACTION";

export function add(data) {
  Dispatcher.dispatch({
    type: ActionTypes.TRANSACTION_CREATE_REQUEST,
    data: data
  });
  Promise.resolve(ApiUtils.create(TRANSACTION, data)).then(() => {
    return Promise.resolve(ApiUtils.load(TRANSACTION));
  }).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.TRANSACTION_CREATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.TRANSACTION_CREATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function list() {
  Dispatcher.dispatch({
    type: ActionTypes.TRANSACTION_LOAD_REQUEST
  });
  Promise.resolve(ApiUtils.load(TRANSACTION)).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.TRANSACTION_LOAD_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.TRANSACTION_LOAD_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function requestClientToken() {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST,
  });
  TransactionUtils.fetchClientToken();
}

export function receiveClientToken(clientToken) {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_RESPONSE,
    clientToken: clientToken
  })
}

export function receiveClientTokenErrors(clientToken) {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_ERROR,
    errors: errors
  })
}
