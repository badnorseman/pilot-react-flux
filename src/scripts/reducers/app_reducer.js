import { combineReducers } from "redux";
import { transactionReducer } from "./transaction_reducer";

export default const appReducer = combineReducers({
  reduceTransactions
});
