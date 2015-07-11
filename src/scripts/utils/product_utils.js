// getErrorsFromXhr is also in auth_utils. It needs to be a separate script
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
        let errors = getErrorsFromXhr(xhr)
        ProductActions.receiveProductErrorsFromServer(errors)
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
        let errors = getErrorsFromXhr(xhr)
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.PRODUCTS,
      dataType: "json",
      type: "GET",
      success: function(data) {
        ProductActions.receiveProductDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        ProductActions.receiveProductErrorsFromServer(errors)
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
        let errors = getErrorsFromXhr(xhr)
        ProductActions.receiveProductErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
