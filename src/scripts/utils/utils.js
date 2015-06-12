import ApiRoutes from "../constants/api_routes";
import AuthActions from "../actions/auth_actions";
import ProductActions from "../actions/product_actions";
import $ from "jquery";

module.exports = {
  add: function(record) {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      type: "POST",
      data: record,
      dataType: "json",
      success: function(data) {
        ProductActions.add_cb(data, null);
      }.bind(this),
      error: function(xhr, status, err) {
        ProductActions.add_cb(null, err);
      }.bind(this)
    });
  },
  load: function() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      type: "GET",
      dataType: "json",
      success: function(data) {
        ProductActions.load_cb(data, null);
      }.bind(this),
      error: function(xhr, status, err) {
        ProductActions.load_cb(null, err);
      }.bind(this)
    });
  },
  login: function(record) {
    $.ajax({
      url: ApiRoutes.LOGIN,
      type: "GET",
      data: record,
      dataType: "json",
      success: function(data) {
        AuthActions.login_cb(data, null);
      }.bind(this),
      error: function(xhr, status, err) {
        AuthActions.login_cb(null, err);
      }.bind(this)
    });
  },
  remove: function(id) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        ProductActions.remove_cb(id, null);
      }.bind(this),
      error: function(xhr, status, err) {
        ProductActions.remove_cb(null, err);
      }.bind(this)
    });
  }
};
