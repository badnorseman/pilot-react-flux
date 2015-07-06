import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  receiveCurrentUserFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_CURRENT_USER,
      data: data
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
