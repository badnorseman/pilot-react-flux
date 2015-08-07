import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as ProductUtils from "../utils/product_utils";

export function add(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.PRODUCT_CREATE,
    data: data
  });
  ProductUtils.create(data);
}

export function edit(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.PRODUCT_UPDATE,
    data: data
  });
  ProductUtils.update(data);
}

export function list() {
  Dispatcher.dispatch({
    actionType: ActionTypes.PRODUCT_LOAD
  });
  ProductUtils.load();
}

export function receiveProductData(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.PRODUCT_LOAD_SUCCEED,
    data: data
  })
}

export function receiveProductErrors(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.PRODUCT_LOAD_FAILED,
    errors: errors
  })
}

export function remove(id) {
  Dispatcher.dispatch({
    actionType: ActionTypes.PRODUCT_DESTROY,
    id: id
  });
  ProductUtils.destroy(id);
}
