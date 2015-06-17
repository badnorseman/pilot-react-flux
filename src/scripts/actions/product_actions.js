import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export function add(record) {
  Dispatcher.dispatch({
    actionType: ActionTypes.ADD,
    record: record
  })
}

export function add_cb(data, errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.ADD_CB,
    data: data,
    errors: errors
  })
}

export function load() {
  Dispatcher.dispatch({
    actionType: ActionTypes.LOAD
  })
}

export function load_cb(data, errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.LOAD_CB,
    data: data,
    errors: errors
  })
}

export function remove(id) {
  Dispatcher.dispatch({
    actionType: ActionTypes.REMOVE,
    id: id
  })
}

export function remove_cb(id, errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.REMOVE_CB,
    id: id,
    errors: errors
  })
}
