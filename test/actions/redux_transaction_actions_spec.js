import expect from "expect";
import {
  TRANSACTION_FETCH_ALL_ERROR,
  TRANSACTION_FETCH_ALL_RESPONSE,
  TRANSACTION_FETCH_ALL_REQUEST,
  transactionFetchAllRequest,
  fetchAll
} from "../../src/scripts/actions/redux_transaction_actions";

describe("transaction actions", () => {
  it("should request all transactions to be fetched", () => {
    const expected = {
      type: TRANSACTION_FETCH_ALL_REQUEST
    };
    expect(transactionFetchAllRequest()).toEqual(expected);
  });
  // it("should fetch all transactions", () => {
  //   const expected = {
  //     type: TRANSACTION_FETCH_ALL_RESPONSE,
  //     data: {}
  //   };
  //   expect(fetchAll()).toEqual(expected);
  // });
})
