import { Dispatcher } from "flux";

const flux = new Dispatcher();

export default flux

// export function register(callback) {
//   return flux.register(callback);
// }

// export function dispatch(actionType, action = {}) {
//   flux.dispatch({ actionType, ...action });
// }

// export function dispatchAsync(promise, actionTypes, action = {}) {
//   const { request, success, failure } = actionTypes;
//
//   dispatch(request, action);
//   promise.then(
//     response => dispatch(success, { ...action, response }),
//     error => dispatch(failure, { ...action, error })
//   );
// }
