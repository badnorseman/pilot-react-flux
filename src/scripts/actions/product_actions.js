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

  query() {
    Dispatcher.dispatch({
      actionType: ActionTypes.QUERY
    })
  },

  remove(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    })
  },

  returnDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RETURN_DATA,
      data: data
    })
  },

  returnErrorFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RETURN_ERROR,
      errors: errors
    })
  }
}
