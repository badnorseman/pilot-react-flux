import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
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
