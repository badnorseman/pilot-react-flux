import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  add(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD,
      data: data
    })
  },

  callback_error(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.CALLBACK_ERROR,
      errors: errors
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

  load_cb(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOAD_CB,
      data: data
    })
  },

  remove(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    })
  },

  // add_cb(data, errors) {
  //   Dispatcher.dispatch({
  //     actionType: ActionTypes.ADD_CB,
  //     data: data,
  //     errors: errors
  //   })
  // },

  // edit_cb(data, errors) {
  //   Dispatcher.dispatch({
  //     actionType: ActionTypes.EDIT_CB,
  //     data: data,
  //     errors: errors
  //   })
  // },

  // remove_cb(id, errors) {
  //   Dispatcher.dispatch({
  //     actionType: ActionTypes.REMOVE_CB,
  //     id: id,
  //     errors: errors
  //   })
  // }
}
