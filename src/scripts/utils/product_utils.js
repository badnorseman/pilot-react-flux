import ApiRoutes from "../constants/api_routes"
import { add_cb, load_cb, remove_cb } from "../actions/product_actions"
import $ from "jquery"

export function add(record) {
  $.ajax({
    url: ApiRoutes.PRODUCTS,
    dataType: "json",
    type: "POST",
    headers: {
      "Authorization": "Token token=" + localStorage.token
    },
    data: record,
    success: function(data) {
      add_cb(data, null)
    }.bind(this),
    error: function(xhr, status, err) {
      add_cb(null, err)
    }.bind(this)
  })
}

export function load() {
  $.ajax({
    url: ApiRoutes.PRODUCTS,
    dataType: "json",
    type: "GET",
    success: function(data) {
      load_cb(data, null)
    }.bind(this),
    error: function(xhr, status, err) {
      load_cb(null, err)
    }.bind(this)
  })
}

export function remove(id) {
  $.ajax({
    url: ApiRoutes.PRODUCTS + "/" + id,
    dataType: "json",
    type: "DELETE",
    headers: {
      "Authorization": "Token token=" + localStorage.token
    },
    success: function(data) {
      remove_cb(id, null)
    }.bind(this),
    error: function(xhr, status, err) {
      remove_cb(null, err)
    }.bind(this)
  })
}
