import { Dispatcher } from "flux";

const flux = new Dispatcher();

export default flux

// export function register(callback) {
//   return flux.register(callback);
// }

// export function dispatch(type, action = {}) {
//   flux.dispatch({ type, ...action });
// }

// export function dispatchAsync(promise, types, action = {}) {
//   const { request, success, failure } = types;
//
//   dispatch(request, action);
//   promise.then(
//     response => dispatch(success, { ...action, response }),
//     error => dispatch(failure, { ...action, error })
//   );
// }
