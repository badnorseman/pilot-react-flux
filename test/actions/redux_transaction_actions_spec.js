import expect from "expect";
import {
  TRANSACTION_LOAD_ERROR,
  TRANSACTION_LOAD_RESPONSE,
  TRANSACTION_LOAD_REQUEST,
  transactionLoadRequest
} from "../../src/scripts/actions/redux_transaction_actions";

describe("transaction actions", () => {
  it("should request transactions to be loaded", () => {
    const expected = {
      type: TRANSACTION_LOAD_REQUEST
    };
    expect(transactionLoadRequest()).toEqual(expected);
  });
})
