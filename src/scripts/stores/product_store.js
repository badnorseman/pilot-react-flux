import Dispatcher from "../dispatcher/dispatcher"
import assign from "react/lib/Object.assign"
import EventEmitter from "events"
import ActionTypes from "../constants/action_types"
import * as ProductUtils from "../utils/product_utils"

let products = []
let errors = []

var ProductStore = assign({}, EventEmitter.prototype, {
  getProducts: function() {
    return products
  },

  getErrors: function() {
    return errors
  },

  emitChange: function() {
    this.emit("change")
  },

  addChangeListener: function(callback) {
    this.on("change", callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener("change", callback)
  }
})

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.LOAD:
      ProductUtils.load()
      break

    case ActionTypes.LOAD_CB:
      if (action.data) {
        products = action.data
      } else {
        errors = action.errors
      }
      ProductStore.emitChange()
      break

    case ActionTypes.ADD:
      ProductUtils.add(action.record)
      break

    case ActionTypes.ADD_CB:
      if (action.data) {
        products.push(action.data)
      } else {
        errors = action.errors
      }
      ProductStore.emitChange()
      break

    case ActionTypes.REMOVE:
      ProductUtils.remove(action.id)
      break

    case ActionTypes.REMOVE_CB:
      if (action.errors) {
        errors = action.errors
      } else {
        products = removeItem(action.id)
      }
      ProductStore.emitChange()
      break
  }
})

function removeItem(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1)
      return products
    }
  }
}

module.exports = ProductStore;
