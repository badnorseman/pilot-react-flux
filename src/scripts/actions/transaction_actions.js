import ActionTypes from "../constants/action_types";
import { create, fetchClientToken, fetchAll } from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";

const ENTITY_NAME = "transaction";

export function createTransaction(data) {
  dispatch({
    type: ActionTypes.TRANSACTION_CREATE_REQUEST,
    data: data
  });
  create(ENTITY_NAME, data).then(() => {
    return fetchAll(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.TRANSACTION_CREATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.TRANSACTION_CREATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function getClientToken() {
  dispatch({
    type: ActionTypes.CLIENT_TOKEN_REQUEST,
  });
  fetchClientToken(ENTITY_NAME).then(response => {
    dispatch({
      type: ActionTypes.CLIENT_TOKEN_RESPONSE,
      clientToken: response.client_token
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.CLIENT_TOKEN_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function getTransactions() {
  dispatch({
    type: ActionTypes.TRANSACTION_FETCH_REQUEST
  });
  fetchAll(ENTITY_NAME).then(response => {
    dispatch({
      type: ActionTypes.TRANSACTION_FETCH_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.TRANSACTION_FETCH_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}
