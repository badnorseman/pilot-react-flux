import ActionTypes from "../constants/action_types";
import * as ApiUtils from "../utils/api_utils";
import Dispatcher from "../dispatcher/dispatcher";
import { Promise } from "es6-promise";

const PRODUCT = "product";

export function add(data) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_CREATE_REQUEST,
    data: data
  });
  Promise.resolve(ApiUtils.create(PRODUCT, data)).then(() => {
    return Promise.resolve(ApiUtils.load(PRODUCT));
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
  Promise.resolve(ApiUtils.update(PRODUCT, data)).then(() => {
    return Promise.resolve(ApiUtils.load(PRODUCT));
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
  Promise.resolve(ApiUtils.load(PRODUCT)).then(response => {
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
  Promise.resolve(ApiUtils.destroy(PRODUCT, id)).then(() => {
    return Promise.resolve(ApiUtils.load(PRODUCT));
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
