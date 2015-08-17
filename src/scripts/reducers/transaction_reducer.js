// We will reduce switch statement later.

// Our app state would be designed like this. We will use normalizr to build JSON objects.
// {
//   entities: {
//     transactions: {
//       id: 1 {
//         name: "A transaction",
//         date: 20150817, // Do we want datetime?
//         amount: 100,00 // This is a text field
//       },
//       id: 2 {
//         name: "Another transaction",
//         date: 20150817,
//         amount: 10000
//       }
//     }
//   },
//   transactions: { // Is this raw data from server?
//     isFetching: false, // We need to know if state is updated after request.
//     lastFetched: datetime, // We want to know when we last fetched data.
//     items: [1, 2],
//     errors: ["", ""] // How shall we model this?
//   }
// }
import {
  TRANSACTION_FETCH_ERROR,
  TRANSACTION_FETCH_RESPONSE,
  TRANSACTION_FETCH_REQUEST
} from "../actions/redux_transaction_actions";

const initialState = {
  isFetching: false,
  errors: [],
  items: []
}

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_FETCH_ERROR:
      return Object.assign({}, state, {
        errors: action.errors,
        isFetching: false
      });

    case TRANSACTION_FETCH_RESPONSE:
      return Object.assign({}, state, {
        errors: [],
        isFetching: false,
        items: action.transactions
      });

    case TRANSACTION_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
}
