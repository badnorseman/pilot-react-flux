import ActionTypes from "../constants/action_types";
import * as AuthUtils from "../utils/auth_utils";
import Dispatcher from "../dispatcher/dispatcher";

export function login(data) {
  Dispatcher.dispatch({
    type: ActionTypes.LOGIN,
    data: data
  });
  AuthUtils.login(data);
}

export function logout() {
  Dispatcher.dispatch({
    type: ActionTypes.LOGOUT,
  });
  AuthUtils.logout();
}

export function oauth(provider) {
  Dispatcher.dispatch({
    type: ActionTypes.OAUTH,
    provider: provider
  });
  AuthUtils.oauth(provider);
}

export function receiveAuthData(data) {
  Dispatcher.dispatch({
    type: ActionTypes.AUTH_RESPONSE,
    data: data
  })
}

export function receiveAuthErrors(errors) {
  Dispatcher.dispatch({
    type: ActionTypes.AUTH_ERROR,
    errors: errors
  })
}

export function signup(data) {
  Dispatcher.dispatch({
    type: ActionTypes.SIGNUP,
    data: data
  });
  AuthUtils.signup(data);
}
