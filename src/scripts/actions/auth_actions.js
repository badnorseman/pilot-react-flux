import ActionTypes from "../constants/action_types";
import AuthUtils from "../utils/auth_utils";
import Dispatcher from "../dispatcher/dispatcher";

export function login(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.LOGIN,
    data: data
  });
  AuthUtils.login(data);
}

export function logout() {
  Dispatcher.dispatch({
    actionType: ActionTypes.LOGOUT,
  });
  AuthUtils.logout();
}

export function oauth(provider) {
  Dispatcher.dispatch({
    actionType: ActionTypes.OAUTH,
    provider: provider
  });
  AuthUtils.oauth(provider);
}

export function receiveAuthDataFromServer(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_DATA_AUTH,
    data: data
  })
}

export function receiveAuthErrorsFromServer(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.RECEIVE_ERRORS_AUTH,
    errors: errors
  })
}

export function signup(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.SIGNUP,
    data: data
  });
  AuthUtils.signup(data);
}
