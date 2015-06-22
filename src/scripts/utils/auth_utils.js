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

  signup(record) {
  }
};
