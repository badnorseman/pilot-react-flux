import Dispatcher from "../dispatcher/dispatcher"
import ActionTypes from "../constants/action_types"

export default {
  add(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD,
      record: record
    })
  },

  add_cb(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_CB,
      data: data,
      errors: errors
    })
  },

  load() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOAD
    })
  },

  load_cb(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOAD_CB,
      data: data,
      errors: errors
    })
  },

  remove(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    })
  },

  remove_cb(id, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_CB,
      id: id,
      errors: errors
    })
  }
}
