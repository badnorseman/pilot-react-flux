// Move ReceieveFrom...Server actions into own file
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

  load() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOAD
    })
  },

  remove(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    })
  },

  receiveDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_DATA,
      data: data
    })
  },

  receiveErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ERRORS,
      errors: errors
    })
  }
}
