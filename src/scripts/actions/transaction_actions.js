import ActionTypes from "../constants/action_types";
import * as Api from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";

const ENTITY_NAME = "transaction";

export function create(data) {
  dispatch({
    type: ActionTypes.TRANSACTION_CREATE_REQUEST,
    data: data
  });
  Api.create(ENTITY_NAME, data).then(() => {
    return Api.load(ENTITY_NAME);
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
  Api.fetchClientToken(ENTITY_NAME).then(response => {
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

export function load() {
  dispatch({
    type: ActionTypes.TRANSACTION_LOAD_REQUEST
  });
  Api.load(ENTITY_NAME).then(response => {
    dispatch({
      type: ActionTypes.TRANSACTION_LOAD_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.TRANSACTION_LOAD_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}
