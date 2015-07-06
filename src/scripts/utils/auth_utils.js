// getErrorsFromXhr is also in product_utils. It needs to be a separate script
import ApiRoutes from "../constants/api_routes";
import AuthStore from "../stores/auth_store";
import ServerActions from "../actions/server_actions";
import $ from "jquery";

function getErrorsFromXhr(xhr) {
  let parsedErrors = JSON.parse(xhr.responseText)
  let errors = []

  for (let k in parsedErrors)
    errors.push(parsedErrors[k])

  return errors
}

export default {
  login(data) {
    $.ajax({
      url: ApiRoutes.LOGIN,
      dataType: "json",
      type: "GET",
      data: data,
      success: function(data) {
        ServerActions.receiveCurrentUserFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        ServerActions.receiveErrorsFromServer(errors)
      }.bind(this)
    })
  },

  logout() {
    $.ajax({
      url: ApiRoutes.LOGOUT,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ServerActions.receiveCurrentUserFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        ServerActions.receiveErrorsFromServer(errors)
      }.bind(this)
    })
  },

  oauth(provider) {
    $.ajax({
      url: ApiRoutes.OAUTH + provider,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ServerActions.receiveCurrentUserFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        ServerActions.receiveErrorsFromServer(errors)
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
        ServerActions.receiveCurrentUserFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        ServerActions.receiveErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
