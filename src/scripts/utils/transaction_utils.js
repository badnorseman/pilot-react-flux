"use strict";
import $ from "jquery";
import { TRANSACTIONS } from "../constants/api_routes";
import * as TransactionActions from "../actions/transaction_actions";

export function create(data) {
  $.ajax({
    url: TRANSACTIONS,
    dataType: "json",
    type: "POST",
    headers: {
      "Authorization": "Token token=" + localStorage.token
    },
    data: data,
    success: function(data) {
      TransactionActions.list();
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      TransactionActions.receiveTransactionErrorsFromServer(errors);
    }.bind(this)
  })
}

export function load() {
  $.ajax({
    url: TRANSACTIONS,
    dataType: "json",
    type: "GET",
    headers: {
      "Authorization": "Token token=" + localStorage.token
    },
    success: function(data) {
      TransactionActions.receiveTransactionDataFromServer(data);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      TransactionActions.receiveTransactionErrorsFromServer(errors);
    }.bind(this)
  })
}

export function requestClientToken() {
  $.ajax({
    url: `${TRANSACTIONS}/new`,
    dataType: "json",
    type: "GET",
    headers: {
      "Authorization": "Token token=" + localStorage.token
    },
    success: function(data) {
      TransactionActions.receiveClientTokenFromServer(data.client_token);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      TransactionActions.receiveTransactionErrorsFromServer(errors);
    }.bind(this)
  })
}
