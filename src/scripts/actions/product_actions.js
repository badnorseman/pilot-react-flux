import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import * as ProductUtils from "../utils/product_utils";

export function add(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.ADD_PRODUCT,
    data: data
  });
  ProductUtils.create(data);
}

export function edit(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.EDIT_PRODUCT,
    data: data
  });
  ProductUtils.update(data);
}

export function list() {
  Dispatcher.dispatch({
    actionType: ActionTypes.LIST_PRODUCT
  });
  ProductUtils.load();
}

export function receiveProductDataFromServer(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_DATA_PRODUCT,
    data: data
  })
}

export function receiveProductErrorsFromServer(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_ERRORS_PRODUCT,
    errors: errors
  })
}

export function remove(id) {
  Dispatcher.dispatch({
    actionType: ActionTypes.REMOVE_PRODUCT,
    id: id
  });
  ProductUtils.destroy(id);
}
