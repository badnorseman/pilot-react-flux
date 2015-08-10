import ActionTypes from "../constants/action_types";
import * as AuthApi from "../api/auth_api";
import { dispatch } from "../dispatcher/dispatcher";

export function login(data) {
  dispatch({
    type: ActionTypes.LOGIN_REQUEST
  });
  AuthApi.login(data).then(response => {
    dispatch({
      type: ActionTypes.LOGIN_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.LOGIN_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function logout() {
  dispatch({
    type: ActionTypes.LOGOUT_REQUEST,
  });
  AuthApi.logout().then(response => {
    dispatch({
      type: ActionTypes.LOGOUT_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.LOGOUT_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function oauth(provider) {
  dispatch({
    type: ActionTypes.OAUTH_REQUEST
  });
  AuthApi.oauth(provider).then(response => {
    dispatch({
      type: ActionTypes.OAUTH_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.OAUTH_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}

export function signup(data) {
  dispatch({
    type: ActionTypes.SIGNUP_REQUEST
  });
  AuthApi.signup(data).then(response => {
    dispatch({
      type: ActionTypes.SIGNUP_RESPONSE,
      data: response
    });
  }).catch(error => {
    dispatch({
      type: ActionTypes.SIGNUP_ERROR,
      error: JSON.parse(error.responseText).errors
    });
  });
}
