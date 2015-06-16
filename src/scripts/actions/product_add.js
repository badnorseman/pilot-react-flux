import Dispatcher from "../dispatcher/dispatcher"
import ActionTypes from "../constants/action_types"

export function add(record) {
  Dispatcher.dispatch({
    actionType: ActionTypes.ADD,
    record: record
  })
}
