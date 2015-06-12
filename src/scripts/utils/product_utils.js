import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";
import $ from "jquery";

export default {
  add(record) {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: record,
      success: function(data) {
        ProductActions.add_cb(data, null);
      }.bind(this),
      error: function(xhr, status, err) {
        ProductActions.add_cb(null, err);
      }.bind(this)
    });
  },
  load() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ProductActions.load_cb(data, null);
      }.bind(this),
      error: function(xhr, status, err) {
        ProductActions.load_cb(null, err);
      }.bind(this)
    });
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
        ProductActions.remove_cb(id, null);
      }.bind(this),
      error: function(xhr, status, err) {
        ProductActions.remove_cb(null, err);
      }.bind(this)
    });
  }
}
