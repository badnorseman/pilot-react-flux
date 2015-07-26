import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_PRODUCT,
      data: data
    })
  },

  edit(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.EDIT_PRODUCT,
      data: data
    })
  },

  list() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_PRODUCT
    })
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
    })
  }
}
