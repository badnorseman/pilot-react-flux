import ActionTypes from "../constants/action_types";
import * as AuthApiUtils from "../utils/auth_api_utils";
import { dispatch } from "../dispatcher/dispatcher";
import { Promise } from "es6-promise";

export function login(data) {
  dispatch({
    type: ActionTypes.LOGIN_REQUEST,
    data: data
  });
  Promise.resolve(AuthApiUtils.login(data)).then(response => {
    dispatch({
      type: ActionTypes.LOGIN_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.LOGIN_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function logout() {
  dispatch({
    type: ActionTypes.LOGOUT_REQUEST,
  });
  Promise.resolve(AuthApiUtils.logout()).then(response => {
    dispatch({
      type: ActionTypes.LOGOUT_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.LOGOUT_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function oauth(provider) {
  dispatch({
    type: ActionTypes.OAUTH_REQUEST,
    provider: provider
  });
  Promise.resolve(AuthApiUtils.oauth(provider)).then(response => {
    dispatch({
      type: ActionTypes.OAUTH_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.OAUTH_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}

export function signup(data) {
  dispatch({
    type: ActionTypes.SIGNUP_REQUEST,
    data: data
  });
  Promise.resolve(AuthApiUtils.signup(data)).then(response => {
    dispatch({
      type: ActionTypes.SIGNUP_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.SIGNUP_ERROR,
      errors: JSON.parse(error.responseText).errors
    });
  });
}
