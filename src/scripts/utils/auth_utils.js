import ApiRoutes from "../constants/api_routes";
import AuthStore from "../stores/auth_store";
import ServerActions from "../actions/server_actions";
import $ from "jquery";

export default {
  login(data) {
    $.ajax({
      url: ApiRoutes.LOGIN,
      dataType: "json",
      type: "GET",
      data: data,
      success: function(data) {
        localStorage.token = data.token
        ServerActions.receiveDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        ServerActions.receiveErrorsFromServer(error.toString())
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
        ServerActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  },

  oauth(provider) {
    $.ajax({
      url: ApiRoutes.OAUTH + provider,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ServerActions.receiveDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        ServerActions.receiveErrorsFromServer(error.toString())
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
        ServerActions.receiveDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        ServerActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  }
}
