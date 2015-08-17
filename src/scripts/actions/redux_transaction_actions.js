// Do we want single receiveTransactionResponse?
// If so, shall it be generic with same type or shall type be a param?
// Remove dispatch, it will be injected by Redux

import * as Api from "../api/redux_api";

const ENTITY_NAME = "transaction";

export const TRANSACTION_CREATE_ERROR = "TRANSACTION_CREATE_ERROR";
export const TRANSACTION_CREATE_RESPONSE = "TRANSACTION_CREATE_RESPONSE";
export const TRANSACTION_CREATE_REQUEST = "TRANSACTION_CREATE_REQUEST";

export function createTransactionRequest(data) {
  return {
    type: TRANSACTION_CREATE_REQUEST,
    data: data
  }
}

function createTransactionResponse(response) {
  return {
    type: TRANSACTION_CREATE_RESPONSE,
    data: response
  }
}

function createTransactionError(error) {
  return {
    type: TRANSACTION_CREATE_ERROR,
    error: JSON.parse(error.responseText).errors
  }
}

export function create(data) {
  return dispatch => {
    dispatch(createTransactionRequest(data));
    return Api.create(ENTITY_NAME, data)
      .then(() => Api.load(ENTITY_NAME))
      .then(response => {
        dispatch(createTransactionResponse(response));
      }).catch(error => {
        dispatch(createTransactionError(error));
      });
  }
}

export const CLIENT_TOKEN_ERROR = "CLIENT_TOKEN_ERROR";
export const CLIENT_TOKEN_RESPONSE = "CLIENT_TOKEN_RESPONSE";
export const CLIENT_TOKEN_REQUEST = "CLIENT_TOKEN_REQUEST";

export function getClientTokenRequest() {
  return {
    type: CLIENT_TOKEN_REQUEST
  }
}

function getClientTokenResponse(response) {
  return {
    type: CLIENT_TOKEN_RESPONSE,
    clientToken: response.client_token
  }
}

function getClientTokenError(error) {
  return {
    type: CLIENT_TOKEN_ERROR,
    error: JSON.parse(error.responseText).errors
  }
}

export function getClientToken() {
  return dispatch => {
    dispatch(getClientTokenRequest());
    return Api.fetchClientToken(ENTITY_NAME)
      .then(response => {
        dispatch(getClientTokenResponse(response));
      }).catch(error => {
        dispatch(getClientTokenError(error));
      });
  }
}

export const TRANSACTION_FETCH_ALL_ERROR = "TRANSACTION_FETCH_ALL_ERROR";
export const TRANSACTION_FETCH_ALL_RESPONSE = "TRANSACTION_FETCH_ALL_RESPONSE";
export const TRANSACTION_FETCH_ALL_REQUEST = "TRANSACTION_FETCH_ALL_REQUEST";

export function transactionFetchAllRequest() {
  return {
    type: TRANSACTION_FETCH_ALL_REQUEST
  }
}

function transactionFetchAllResponse(response) {
  return {
    type: TRANSACTION_FETCH_ALL_RESPONSE,
    data: response
  }
}

function transactionFetchAllError(error) {
  return {
    type: TRANSACTION_FETCH_ALL_ERROR,
    error: error.responseText
  }
}

export function fetchAll() {
  return dispatch => {
    dispatch(transactionFetchAllRequest);
    return Api.fetchAll(ENTITY_NAME)
      .then(response => {
        dispatch(transactionFetchAllResponse);
      }).catch(error => {
        dispatch(transactionFetchAllError);
      });
  }
}
