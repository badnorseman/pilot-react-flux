import ApiRoutes from "../constants/api_routes";
import PaymentActions from "../actions/payment_actions";
import $ from "jquery";

function getErrorsFromXhr(xhr) {
  let parsedErrors = JSON.parse(xhr.responseText)
  let errors = []

  for (let k in parsedErrors)
    errors.push(parsedErrors[k])

  return errors
}

export default {
  requestClientToken() {
    $.ajax({
      url: ApiRoutes.PAYMENTS + "/new",
      dataType: "json",
      type: "GET",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(data) {
        PaymentActions.receiveClientTokenFromServer(data.client_token)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        PaymentActions.receivePaymentErrorsFromServer(errors)
      }.bind(this)
    })
  },

  create(data) {
    $.ajax({
      url: ApiRoutes.PAYMENTS,
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(data) {
        PaymentActions.listPayments()
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        PaymentActions.receivePaymentErrorsFromServer(errors)
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.PAYMENTS,
      dataType: "json",
      type: "GET",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(data) {
        PaymentActions.receivePaymentDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        PaymentActions.receivePaymentErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
