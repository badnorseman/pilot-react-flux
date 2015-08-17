// Do we want single receiveTransactionResponse?
// If so, shall it be generic with same type or shall type be a param?
// Remove dispatch, it will be injected by Redux
import { create, fetchClientToken, fetchAll } from "../api/redux_api";
// Move this to Api.
// import { Schema, arrayOf, normalize } from "normalizr";
// const transactionSchema = new Schema("transactions", { idAttribute: "id" });

// Temporary setup to test action with reducer:
import { createStore } from "redux";
import appReducer from "../reducers/app_reducer";
const store = createStore(appReducer);

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
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: TRANSACTION_CREATE_ERROR,
    errors: errors
  }
}

export function createTransaction(data) {
  return dispatch => {
    dispatch(createTransactionRequest(data));
    return create(ENTITY_NAME, data)
      .then(() => fetchAll(ENTITY_NAME))
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
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: CLIENT_TOKEN_ERROR,
    errors: errors
  }
}

export function getClientToken() {
  return dispatch => {
    dispatch(getClientTokenRequest());
    return fetchClientToken(ENTITY_NAME)
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
  // let normalized = normalize(response, arrayOf(transactionSchema));
  return {
    type: TRANSACTION_FETCH_ALL_RESPONSE,
    data: response
    // data: normalized.entities.transactions
  }
}

function transactionFetchAllError(error) {
  let errors = JSON.parse(error.responseText).errors;
  return {
    type: TRANSACTION_FETCH_ALL_ERROR,
    error: errors
  }
}

export function getAllTransactions() {
  return dispatch => {
    dispatch(transactionFetchAllRequest);
    return fetchAll(ENTITY_NAME)
      .then(response => {
        dispatch(transactionFetchAllResponse(response));
      }).catch(error => {
        dispatch(transactionFetchAllError(error));
      });
  }
}

export function testAllTransactions() {
  store.dispatch(transactionFetchAllRequest);
  fetchAll(ENTITY_NAME)
  .then(response =>{
    store.dispatch(transactionFetchAllResponse(response))
  }).then(() => {
    console.log(store.getState());
  }).catch(error => {
    store.dispatch(transactionFetchAllError(error))
  });
}
