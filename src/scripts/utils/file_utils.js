import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";
import $ from "jquery";

export default {
  uploadFile(id, file) {
    $.ajax({
      url: ApiRoutes.PRODUCTS + "/" + id,
      dataType: "json",
      type: "PATCH",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      processData: false,
      contentType: false,
      data: function() {
        var fd = new FormData();
        fd.append("product[image]", file);
        return fd;
      }(),
      success: function(data) {
        ProductActions.load()
      }.bind(this),
      error: function(xhr, status, error) {
        ProductActions.receiveErrorsFromServer(error.toString())
      }.bind(this)
    })
  }
}
