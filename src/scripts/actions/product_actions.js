import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as ProductUtils from "../utils/product_utils";
import { Promise } from "es6-promise";

export function add(data) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST,
    data: data
  });
  Promise.resolve(ProductUtils.create(data)).then(() => {
    return Promise.resolve(ProductUtils.load());
  }).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_CREATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_CREATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function edit(data) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_EDIT,
    data: data
  });
  ProductUtils.update(data);
}

export function list() {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_LOAD_REQUEST
  });
  Promise.resolve(ProductUtils.load()).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_LOAD_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_LOAD_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function receiveProductData(data) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_REQUEST_SUCCESS,
    data: data
  })
}

export function receiveProductErrors(errors) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_REQUEST_ERROR,
    errors: errors
  })
}

export function remove(id) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_REMOVE,
    id: id
  });
  ProductUtils.destroy(id);
}
