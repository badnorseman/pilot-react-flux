import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as ProductUtils from "../utils/product_utils";
import { Promise } from "es6-promise";

const PRODUCT = "PRODUCT";

export function add(data) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST,
    data: data
  });
  Promise.resolve(ProductUtils.create(PRODUCT, data)).then(() => {
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
    type: ActionTypes.PRODUCT_UPDATE_REQUEST,
    data: data
  });
  Promise.resolve(ProductUtils.update(PRODUCT, data)).then(() => {
    return Promise.resolve(ProductUtils.load());
  }).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_UPDATE_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_UPDATE_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
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

export function remove(id) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_DESTROY_REQUEST,
    id: id
  });
  Promise.resolve(ProductUtils.destroy(id)).then(() => {
    return Promise.resolve(ProductUtils.load());
  }).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_DESTROY_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.PRODUCT_DESTROY_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}
