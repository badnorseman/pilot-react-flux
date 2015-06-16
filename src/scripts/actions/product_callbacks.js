import Dispatcher from "../dispatcher/dispatcher"
import ActionTypes from "../constants/action_types"

export function add_cb(data, errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.ADD_CB,
    data: data,
    errors: errors
  })
}

export function load_cb(data, errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.LOAD_CB,
    data: data,
    errors: errors
  })
}

export function remove_cb(id, errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.REMOVE_CB,
    id: id,
    errors: errors
  })
}
