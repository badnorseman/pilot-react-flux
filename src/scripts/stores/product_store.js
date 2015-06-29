import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import ProductUtils from "../utils/product_utils";

let products = [];
let errors = [];

let ProductStore = assign({}, EventEmitter.prototype, {
  getProducts() {
    return products
  },

  getErrors() {
    return errors
  },

  emitChange() {
    return this.emit("change")
  },

  addChangeListener(callback) {
    this.on("change", callback)
  },

  removeChangeListener(callback) {
    this.removeListener("change", callback)
  }
});

ProductStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.ADD:
      ProductUtils.create(action.data)
      break

    case ActionTypes.EDIT:
      ProductUtils.update(action.id, action.data)
      break

    case ActionTypes.LOAD:
      ProductUtils.load()
      break

    case ActionTypes.REMOVE:
      ProductUtils.delete(action.id)
      break

    case ActionTypes.RECEIVE_DATA:
      products = action.data
      ProductStore.emitChange()
      break

    case ActionTypes.RECEIVE_ERROR:
      errors = action.errors
      ProductStore.emitChange()
      break
  }
})

export default ProductStore
