import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as ProductUtils from "../utils/product_utils";

export function add(data) {
  Dispatcher.dispatch({
    type: ActionTypes.PRODUCT_ADD,
    data: data
  });
  ProductUtils.create(data);
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
    type: ActionTypes.PRODUCT_REQUEST
  });
  ProductUtils.list();
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
