// Todo:
// Now then both product_actions and transaction_actions are generic,
// we should have utils for action (dispatch) calls.
// Input:
// action e.g. create, load, update etc.
// path or entityName e.g. /products or product (perhaps modelName is better)
// Then we can rename Api to ApiCall for clarity.

import ActionTypes from "../constants/action_types";
import * as Api from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";

const ENTITY_NAME = "product";

export function create(data) {
  dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST
  });
  Api.create(ENTITY_NAME, data).then(() => {
    return Api.load(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_CREATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_CREATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function destroy(id) {
  dispatch({
    type: ActionTypes.PRODUCT_DESTROY_REQUEST,
    id: id
  });
  Api.destroy(ENTITY_NAME, id).then(() => {
    return Api.load(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_DESTROY_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_DESTROY_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function load() {
  dispatch({
    type: ActionTypes.PRODUCT_LOAD_REQUEST
  });
  Api.load(ENTITY_NAME).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_LOAD_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_LOAD_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function update(data) {
  dispatch({
    type: ActionTypes.PRODUCT_UPDATE_REQUEST
  });
  Api.update(ENTITY_NAME, data).then(() => {
    return Api.load(ENTITY_NAME);
  }).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_UPDATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_UPDATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}
