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
  }
}
