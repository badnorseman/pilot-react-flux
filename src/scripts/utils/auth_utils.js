import ApiRoutes from "../constants/api_routes"
import AuthActions from "../actions/auth_actions"
import AuthStore from "../stores/auth_store"
import $ from "jquery"

export default {
  login(record) {
    $.ajax({
      url: ApiRoutes.LOGIN,
      dataType: "json",
      type: "GET",
      data: record,
      success: function(data) {
        AuthActions.login_cb(data, null)
      }.bind(this),
      error: function(xhr, status, err) {
        AuthActions.login_cb(null, err.toString())
      }.bind(this)
    })
  },

  logout() {
    $.ajax({
      url: ApiRoutes.LOGOUT,
      dataType: "json",
      type: "GET",
      success: function(data) {
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    })
  },

  oauth(provider) {
    $.ajax({
      url: ApiRoutes.OAUTH + provider + "/callback",
      dataType: "json",
      type: "GET",
      success: function(data) {
        console.log("Data: ", data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Error: ", xhr)
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
        AuthActions.signup_cb(data, null)
      }.bind(this),
      error: function(xhr, status, err) {
        AuthActions.signup_cb(null, err.toString())
      }.bind(this)
    })
  }
}
