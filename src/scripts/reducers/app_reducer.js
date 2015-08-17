import { combineReducers } from "redux";
import { transactionReducer } from "./transaction_reducer";

export const appReducer = combineReducers({
  transactionReducer
});
