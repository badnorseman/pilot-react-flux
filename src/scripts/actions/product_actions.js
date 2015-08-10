import ActionTypes from "../constants/action_types";
import * as Api from "../api/api";
import { dispatch } from "../dispatcher/dispatcher";

const PRODUCT = "product";

export function add(data) {
  dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST
  });
  Api.create(PRODUCT, data).then(() => {
    return Api.load(PRODUCT);
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

export function edit(data) {
  dispatch({
    type: ActionTypes.PRODUCT_UPDATE_REQUEST
  });
  Api.update(PRODUCT, data).then(() => {
    return Api.load(PRODUCT);
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

export function list() {
  dispatch({
    type: ActionTypes.PRODUCT_LOAD_REQUEST
  });
  Api.load(PRODUCT).then(response => {
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

export function remove(id) {
  dispatch({
    type: ActionTypes.PRODUCT_DESTROY_REQUEST,
    id: id
  });
  Api.destroy(PRODUCT, id).then(() => {
    return Api.load(PRODUCT);
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
