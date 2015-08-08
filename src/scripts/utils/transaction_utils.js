"use strict";
import $ from "jquery";
import { TRANSACTIONS } from "../constants/api_routes";
import * as TransactionActions from "../actions/transaction_actions";

export function fetchClientToken() {
  $.ajax({
    url: `${TRANSACTIONS}/new`,
    dataType: "json",
    type: "GET",
    headers: {
      "Authorization": `Token token=${localStorage.token}`
    },
    success: function(data) {
      TransactionActions.receiveClientToken(data.client_token);
    }.bind(this),
    error: function(xhr) {
      let errors = JSON.parse(xhr.responseText).errors;
      TransactionActions.receiveClientTokenErrors(errors);
    }.bind(this)
  })
}
