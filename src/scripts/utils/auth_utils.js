"use strict";
import $ from "jquery";
import ApiRoutes from "../constants/api_routes";
import AuthStore from "../stores/auth_store";
import * as AuthActions from "../actions/auth_actions";

export default {
  login(data) {
    $.ajax({
      url: ApiRoutes.LOGIN,
      dataType: "json",
      type: "GET",
      data: data,
      success: function(data) {
        AuthActions.receiveAuthDataFromServer(data)
      }.bind(this),
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
        AuthActions.receiveAuthErrorsFromServer(errors)
      }.bind(this)
    })
  },

  logout() {
    $.ajax({
      url: ApiRoutes.LOGOUT,
      dataType: "json",
      type: "GET",
      success: function(data) {
        AuthActions.receiveAuthDataFromServer(data)
      }.bind(this),
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
        AuthActions.receiveAuthErrorsFromServer(errors)
      }.bind(this)
    })
  },

  oauth(provider) {
    $.ajax({
      url: ApiRoutes.OAUTH + provider,
      dataType: "json",
      type: "GET",
      success: function(data) {
        AuthActions.receiveAuthDataFromServer(data)
      }.bind(this),
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
        AuthActions.receiveAuthErrorsFromServer(errors)
      }.bind(this)
    })
  },

  signup(data) {
    $.ajax({
      url: ApiRoutes.SIGNUP,
      dataType: "json",
      type: "POST",
      data: data,
      success: function(data) {
        AuthActions.receiveAuthDataFromServer(data)
      }.bind(this),
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
        AuthActions.receiveAuthErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
