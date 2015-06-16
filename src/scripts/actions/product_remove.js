import Dispatcher from "../dispatcher/dispatcher"
import ActionTypes from "../constants/action_types"

export function remove(id) {
  Dispatcher.dispatch({
    actionType: ActionTypes.REMOVE,
    id: id
  })
}
