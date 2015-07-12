import ApiRoutes from "../constants/api_routes";
import ProductActions from "../actions/product_actions";
import $ from "jquery";

function getErrorsFromXhr(xhr) {
  let parsedErrors = JSON.parse(xhr.responseText)
  let errors = []

  for (let k in parsedErrors)
    errors.push(parsedErrors[k])

  return errors
}

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
        ProductActions.list()
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
