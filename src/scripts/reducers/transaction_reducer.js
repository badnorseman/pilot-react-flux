// We will reduce switch statement later.

import {
  TRANSACTION_FETCH_ERROR,
  TRANSACTION_FETCH_RESPONSE,
  TRANSACTION_FETCH_REQUEST
} from "../actions/redux_transactions_actions";
import { Schema, arrayOf, normalize } from "normalizr";

const transactionSchema = new Schema("transactions", { idAttribute: "id" });
const initialState = {
  errors: [],
  isRequsting: false,
  transactions: {}
}

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_FETCH_ERROR:
      return Object.assign({}, state, {
        errors = JSON.parse(action.error).errors,
        isRequsting: false
      });

    case TRANSACTION_FETCH_RESPONSE:
      let normalized = normalize(action.data, arrayOf(transactionSchema));
      return Object.assign({}, state, {
        isRequsting: false,
        transactions = normalized.entities.transactions
      });

    case TRANSACTION_FETCH_REQUEST:
      return Object.assign({}, state, {
        isRequsting: true
      });

    default:
      return state;
  }
}
