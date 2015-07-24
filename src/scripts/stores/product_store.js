import assign from "react/lib/Object.assign";
import EventEmitter from "events";
import ActionTypes from "../constants/action_types";
import Dispatcher from "../dispatcher/dispatcher";
import ProductUtils from "../utils/product_utils";

let products = []
let errors = []

let ProductStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on("change", callback)
  },

  emitChange() {
    return this.emit("change")
  },

  removeChangeListener(callback) {
    this.removeListener("change", callback)
  },

  getAll() {
    return products
  },

  getById(id) {
    for (let k in products)
      if (products[k].id == id) return products[k]
  },

  getErrors() {
    return errors
  }
})

ProductStore.dispatchToken = Dispatcher.register((action) => {
  switch(action.actionType) {

    case ActionTypes.ADD_PRODUCT:
      ProductUtils.create(action.data)
      break

    case ActionTypes.EDIT_PRODUCT:
      ProductUtils.update(action.id, action.data)
      break

    case ActionTypes.LIST_PRODUCT:
      ProductUtils.load()
      break

    case ActionTypes.REMOVE_PRODUCT:
      ProductUtils.delete(action.id)
      break

    case ActionTypes.RECEIVE_DATA_PRODUCT:
      products = action.data
      ProductStore.emitChange()
      break

    case ActionTypes.RECEIVE_ERRORS_PRODUCT:
      errors = action.errors
      ProductStore.emitChange()
      break
  }
})

export default ProductStore
