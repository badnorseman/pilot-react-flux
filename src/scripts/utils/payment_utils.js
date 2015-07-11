import ApiRoutes from "../constants/api_routes";
import $ from "jquery";

function getErrorsFromXhr(xhr) {
  let parsedErrors = JSON.parse(xhr.responseText)
  let errors = []

  for (let k in parsedErrors)
    errors.push(parsedErrors[k])

  return errors
}

export default {
  fetchClientToken() {
    let clientToken = ""

    $.ajax({
      url: ApiRoutes.HOST + "/api/payments/new",
      dataType: "json",
      type: "GET",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(data) {
        clientToken = data.responseText
        console.log("Success ", clientToken)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        clientToken = xhr.responseText
        console.log("Error ", clientToken, errors)
      }.bind(this)
    })

    return clientToken
  },

  createPayment(data) {
    $.ajax({
      url: ApiRoutes.HOST + "/api/transactions",
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(data) {
        console.log("create success ", data)
      }.bind(this),
      error: function(xhr, status, error) {
        console.log("create error ", xhr)
      }.bind(this)
    })
  }
}
