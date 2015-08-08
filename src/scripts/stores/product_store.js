"use strict";
import ActionTypes from "../constants/action_types";
import assign from "react/lib/Object.assign";
import Dispatcher from "../dispatcher/dispatcher";
import EventEmitter from "events";

const CHANGE_EVENT = "change";
let products = [];
let errors = [];

let ProductStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on("CHANGE_EVENT", callback)
  },

  emitChange() {
    return this.emit("CHANGE_EVENT")
  },

  removeChangeListener(callback) {
    this.removeListener("CHANGE_EVENT", callback)
  },

  getAll() {
    return products
  },

  getById(id) {
    for (let k in products) {
      if (products[k].id == id) return products[k]
    }
  },

  getErrors() {
    return errors
  }
})

ProductStore.dispatchToken = Dispatcher.register(action => {
  switch(action.type) {

    case ActionTypes.PRODUCT_CREATE_ERROR:
    case ActionTypes.PRODUCT_DESTROY_ERROR:
    case ActionTypes.PRODUCT_LOAD_ERROR:
    case ActionTypes.PRODUCT_UPDATE_ERROR:
      errors = action.error;
      ProductStore.emitChange()
      break

    case ActionTypes.PRODUCT_CREATE_RESPONSE:
    case ActionTypes.PRODUCT_DESTROY_RESPONSE:
    case ActionTypes.PRODUCT_LOAD_RESPONSE:
    case ActionTypes.PRODUCT_UPDATE_RESPONSE:
      products = action.data;
      ProductStore.emitChange()
      break
  }
})

export default ProductStore
