import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
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

export function getClientToken() {
  Dispatcher.dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST,
  });
  Promise.resolve(ApiUtils.fetchClientToken(TRANSACTION)).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.CLIENT_TOKEN_RESPONSE,
      clientToken: response.client_token
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.CLIENT_TOKEN_ERROR,
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
