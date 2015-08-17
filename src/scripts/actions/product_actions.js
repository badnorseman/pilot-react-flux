// Todo:
// Now then both product_actions and transaction_actions are generic,
// we should have utils for action (dispatch) calls.
// Input:
// action e.g. create, load, update etc.
// path or entityName e.g. /products or product (perhaps modelName is better)
// Then we can rename Api to ApiCall for clarity.

import ActionTypes from "../constants/action_types";
import { create, destroy, fetchAll, update } from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";

const ENTITY_NAME = "product";

export function createProduct(data) {
  dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST
  });
  create(ENTITY_NAME, data).then(() => {
    return fetchAll(ENTITY_NAME);
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

export function destroyProduct(id) {
  dispatch({
    type: ActionTypes.PRODUCT_DESTROY_REQUEST,
    id: id
  });
  destroy(ENTITY_NAME, id).then(() => {
    return fetchAll(ENTITY_NAME);
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

export function getProducts() {
  dispatch({
    type: ActionTypes.PRODUCT_FETCH_REQUEST
  });
  fetchAll(ENTITY_NAME).then(response => {
    dispatch({
      type: ActionTypes.PRODUCT_FETCH_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.PRODUCT_FETCH_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function updateProduct(data) {
  dispatch({
    type: ActionTypes.PRODUCT_UPDATE_REQUEST
  });
  update(ENTITY_NAME, data).then(() => {
    return fetchAll(ENTITY_NAME);
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
