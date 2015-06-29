// Move ReturnFrom...Server actions into own file
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

  returnDataFromServer(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RETURN_DATA,
      data: data
    })
  },

  returnErrorFromServer(errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RETURN_ERROR,
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
