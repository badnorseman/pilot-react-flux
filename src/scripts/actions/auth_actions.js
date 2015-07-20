import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  login(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      data: data
    })
  },

  logout() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT,
    })
  },

  oauth(provider) {
    Dispatcher.dispatch({
      actionType: ActionTypes.OAUTH,
      provider: provider
    })
  },

  receiveAuthDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_DATA_AUTH,
      data: data
    })
  },

  receiveAuthErrorsFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ERRORS_AUTH,
      errors: errors
    })
  },

  signup(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.SIGNUP,
      data: data
    })
  }
}
