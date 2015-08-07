import ActionTypes from "../constants/action_types";
import * as AuthUtils from "../utils/auth_utils";
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

export function receiveAuthData(data) {
  Dispatcher.dispatch({
    actionType: ActionTypes.AUTH_REQUEST_SUCCESS,
    data: data
  })
}

export function receiveAuthErrors(errors) {
  Dispatcher.dispatch({
    actionType: ActionTypes.AUTH_REQUEST_ERROR,
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
