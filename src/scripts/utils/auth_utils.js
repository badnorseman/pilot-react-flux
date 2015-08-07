"use strict";
import $ from "jquery";
import AuthStore from "../stores/auth_store";
import * as AuthActions from "../actions/auth_actions";
import { LOGIN, LOGOUT, OAUTH, SIGNUP } from "../constants/api_routes";

export function login(data) {
  $.ajax({
    url: LOGIN,
    dataType: "json",
    type: "GET",
    data: data,
    success: function(data) {
      AuthActions.receiveAuthData(data);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      AuthActions.receiveAuthErrors(errors);
    }.bind(this)
  })
}

export function logout() {
  $.ajax({
    url: LOGOUT,
    dataType: "json",
    type: "GET",
    success: function(data) {
      AuthActions.receiveAuthData(data);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      AuthActions.receiveAuthErrors(errors);
    }.bind(this)
  })
}

export function oauth(provider) {
  $.ajax({
    url: `${OAUTH}/${provider}`,
    dataType: "json",
    type: "GET",
    success: function(data) {
      AuthActions.receiveAuthData(data);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      AuthActions.receiveAuthErrors(errors);
    }.bind(this)
  })
}

export function signup(data) {
  $.ajax({
    url: SIGNUP,
    dataType: "json",
    type: "POST",
    data: data,
    success: function(data) {
      AuthActions.receiveAuthData(data);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      AuthActions.receiveAuthErrors(errors);
    }.bind(this)
  })
}
