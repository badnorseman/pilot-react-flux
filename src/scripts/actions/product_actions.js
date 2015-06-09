import AppDispatcher from "../dispatchers/app_dispatcher";
import ActionTypes from "../constants/action_types";
import AppUtils from "../utils/app_utils";

export function add(product) {
  AppDispatcher.handleViewAction({
    actionType: ActionTypes.ADD,
    product: product
  });
}

export function edit(product) {
  AppDispatcher.handleViewAction({
    actionType: ActionTypes.EDIT,
    product: product
  });
}

export function list() {
  AppDispatcher.handleViewAction({
    actionType: ActionTypes.LIST
  });
  AppUtils.list();
}

export function remove(id) {
  AppDispatcher.handleViewAction({
    actionType: ActionTypes.REMOVE,
    id: id
  });
}
