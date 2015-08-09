import ActionTypes from "../constants/action_types";
import * as Api from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";
import { Promise } from "es6-promise";

const TRANSACTION = "transaction";

export function add(data) {
  dispatch({
    type: ActionTypes.TRANSACTION_CREATE_REQUEST,
    data: data
  });
  Promise.resolve(Api.create(TRANSACTION, data)).then(() => {
    return Promise.resolve(Api.load(TRANSACTION));
  }).then(response => {
    dispatch({
      type: ActionTypes.TRANSACTION_CREATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.TRANSACTION_CREATE_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function getClientToken() {
  dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST,
  });
  Promise.resolve(Api.fetchClientToken(TRANSACTION)).then(response => {
    dispatch({
      type: ActionTypes.CLIENT_TOKEN_RESPONSE,
      clientToken: response.client_token
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.CLIENT_TOKEN_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function list() {
  dispatch({
    type: ActionTypes.TRANSACTION_LOAD_REQUEST
  });
  Promise.resolve(Api.load(TRANSACTION)).then(response => {
    dispatch({
      type: ActionTypes.TRANSACTION_LOAD_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.TRANSACTION_LOAD_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}
