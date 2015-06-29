import ApiRoutes from "../constants/api_routes";
import AuthActions from "../actions/auth_actions";
import AuthStore from "../stores/auth_store";
import $ from "jquery";

export default {
  login(record) {
    $.ajax({
      url: ApiRoutes.LOGIN,
      dataType: "json",
      type: "GET",
      data: record,
      success: function(data) {
        localStorage.token = data.token
        AuthActions.receiveDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        AuthActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  },

  logout() {
    $.ajax({
      url: ApiRoutes.LOGOUT,
      dataType: "json",
      type: "GET",
      success: function(data) {
        localStorage.removeItem("token")
      }.bind(this),
      error: function(xhr, status, error) {
        AuthActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  },

  oauth(provider) {
    $.ajax({
      url: ApiRoutes.OAUTH + provider,
      dataType: "json",
      type: "GET",
      success: function(data) {
        AuthActions.receiveDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        AuthActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  },

  signup(record) {
    $.ajax({
      url: ApiRoutes.SIGNUP,
      dataType: "json",
      type: "POST",
      data: record,
      success: function(data) {
        AuthActions.receiveDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        AuthActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  }
}
