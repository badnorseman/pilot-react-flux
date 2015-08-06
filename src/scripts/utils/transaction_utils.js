"use strict";
import $ from "jquery";
import ApiRoutes from "../constants/api_routes";
import * as TransactionActions from "../actions/transaction_actions";

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
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
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
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
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
      error: function(xhr) {
        let errors = JSON.parse(xhr.responseText).errors;
        TransactionActions.receiveTransactionErrorsFromServer(errors)
      }.bind(this)
    })
  }
}
