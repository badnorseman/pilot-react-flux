import ActionTypes from "../constants/action_types";
import * as AuthApiUtils from "../utils/auth_api_utils";
import Dispatcher from "../dispatcher/dispatcher";
import { Promise } from "es6-promise";

export function login(data) {
  Dispatcher.dispatch({
    type: ActionTypes.LOGIN_REQUEST,
    data: data
  });
  Promise.resolve(AuthApiUtils.login(data)).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.LOGIN_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.LOGIN_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function logout() {
  Dispatcher.dispatch({
    type: ActionTypes.LOGOUT_REQUEST,
  });
  Promise.resolve(AuthApiUtils.logout()).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.LOGOUT_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.LOGOUT_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function oauth(provider) {
  Dispatcher.dispatch({
    type: ActionTypes.OAUTH_REQUEST,
    provider: provider
  });
  Promise.resolve(AuthApiUtils.oauth(provider)).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.OAUTH_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.OAUTH_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function signup(data) {
  Dispatcher.dispatch({
    type: ActionTypes.SIGNUP_REQUEST,
    data: data
  });
  Promise.resolve(AuthApiUtils.signup(data)).then(response => {
    Dispatcher.dispatch({
      type: ActionTypes.SIGNUP_RESPONSE,
      data: response
    });
  }).catch(error => {
    Dispatcher.dispatch({
      type: ActionTypes.SIGNUP_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}
