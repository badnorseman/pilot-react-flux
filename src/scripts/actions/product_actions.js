import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD,
      data: data
    })
  },

  edit(id, data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.EDIT,
      id: id,
      data: data
    })
  },

  list() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST
    })
  },

  receiveProductDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_PRODUCT_DATA,
      data: data
    })
  },

  receiveProductErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_PRODUCT_ERRORS,
      errors: errors
    })
  },

  remove(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    })
  }
}
