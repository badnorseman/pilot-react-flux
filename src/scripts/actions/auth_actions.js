import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

export default {
  login(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      record: record
    })
  },

  login_cb(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN_CB,
      data: data,
      errors: errors
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

  signup(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.SIGNUP,
      record: record
    })
  },

  signup_cb(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.SIGNUP_CB,
      data: data,
      errors: errors
    })
  }
};
