"use strict";
import ApiRoutes from "../constants/api_routes";
import TransactionActions from "../actions/transaction_actions";
import $ from "jquery";

function getErrorsFromXhr(xhr) {
  let parsedErrors = JSON.parse(xhr.responseText);
  let errors = [];

  for (let k in parsedErrors) {
    errors.push(parsedErrors[k])
  }

  return errors
}

export default {
  requestClientToken() {
    $.ajax({
      url: ApiRoutes.TRANSACTIONS + "/new",
      dataType: "json",
      type: "GET",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(data) {
        TransactionActions.receiveClientTokenFromServer(data.client_token)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        TransactionActions.receiveTransactionErrorsFromServer(errors)
      }.bind(this)
    })
  },

  create(data) {
    $.ajax({
      url: ApiRoutes.TRANSACTIONS,
      dataType: "json",
      type: "POST",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      data: data,
      success: function(data) {
        TransactionActions.list()
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        TransactionActions.receiveTransactionErrorsFromServer(errors)
      }.bind(this)
    })
  },

  load() {
    $.ajax({
      url: ApiRoutes.TRANSACTIONS,
      dataType: "json",
      type: "GET",
      headers: {
        "Authorization": "Token token=" + localStorage.token
      },
      success: function(data) {
        TransactionActions.receiveTransactionDataFromServer(data)
      }.bind(this),
      error: function(xhr, status, error) {
        let errors = getErrorsFromXhr(xhr)
        TransactionActions.receiveTransactionErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
