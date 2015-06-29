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
      success: function(data) {
        ProductActions.query()
      }.bind(this),
      error: function(xhr, status, error) {
        ProductActions.returnErrorFromServer(error.toString())
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
      success: function(data) {
        ProductActions.query()
      }.bind(this),
      error: function(xhr, status, error) {
        ProductActions.returnErrorFromServer(error.toString())
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
      success: function(data) {
        ProductActions.query()
      }.bind(this),
      error: function(xhr, status, error) {
        ProductActions.returnErrorFromServer(error.toString())
      }.bind(this)
    })
  },

  query() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ProductActions.returnDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        ProductActions.returnErrorFromServer(error.toString())
      }.bind(this)
    })
  }
};
