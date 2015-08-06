import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import ProductUtils from "../utils/product_utils";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_PRODUCT,
      data: data
    });
    ProductUtils.create(data);
  },

  edit(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.EDIT_PRODUCT,
      data: data
    });
    ProductUtils.update(data);
  },

  list() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_PRODUCT
    });
    ProductUtils.load();
  },

  receiveProductDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_DATA_PRODUCT,
      data: data
    })
  },

  receiveProductErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ERRORS_PRODUCT,
      errors: errors
    })
  },

  remove(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_PRODUCT,
      id: id
    });
    ProductUtils.delete(id);
  }
}
