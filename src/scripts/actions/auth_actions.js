import ActionTypes from "../constants/action_types";
import AuthUtils from "../utils/auth_utils";
import Dispatcher from "../dispatcher/dispatcher";

export default {
  login(data) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      data: data
    });
    AuthUtils.login(data);
  },

  logout() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT,
    });
    AuthUtils.logout();
  },

  oauth(provider) {
    Dispatcher.dispatch({
      actionType: ActionTypes.OAUTH,
      provider: provider
    });
    AuthUtils.oauth(provider);
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
    });
    AuthUtils.signup(data);
  }
}
