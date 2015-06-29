// Fix error to xhr.responseText
import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";
import $ from "jquery";

export default {
  add(data) {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(success) {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        // ProductActions.add_cb(null, error.toString())
        ProductActions.callback_error(error.toString())
      }.bind(this)
    })
  },

  edit(id, data) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      dataType: "json",
      type: "PATCH",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(success) {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        // ProductActions.edit_cb(null, error.toString())
        ProductActions.callback_error(error.toString())
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "GET",
      success: function(success) {
        ProductActions.load_cb(success)
      }.bind(this),
      error: function(xhr, status, error) {
        // ProductActions.load_cb(null, error.toString())
        ProductActions.callback_error(error.toString())
      }.bind(this)
    })
  },

  remove(id) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      dataType: "json",
      type: "DELETE",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function() {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        // ProductActions.remove_cb(null, error.toString())
        ProductActions.callback_error(error.toString())
      }.bind(this)
    })
  }
};
