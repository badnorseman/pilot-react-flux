// Fix error to xhr.responseText
import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";
import ServerActions from "../actions/server_actions";
import $ from "jquery";

export default {
  create(data) {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(data) {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        ServerActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  },

  delete(id) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      dataType: "json",
      type: "DELETE",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(data) {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        ServerActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
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

  update(id, data) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      dataType: "json",
      type: "PATCH",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(data) {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        ServerActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  }
};
