import Dispatcher from "../dispatcher/dispatcher"
import ActionTypes from "../constants/action_types"

export function load() {
  Dispatcher.dispatch({
    actionType: ActionTypes.LOAD
  })
}
