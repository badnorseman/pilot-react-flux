import assign from "react/lib/Object.assign"
import EventEmitter from "events"
import ActionTypes from "../constants/action_types"
import Dispatcher from "../dispatcher/dispatcher"
import ProductUtils from "../utils/product_utils"

let products = []
let errors = []

const ProductStore = assign({}, EventEmitter.prototype, {
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
})

ProductStore.dispatchToken = Dispatcher.register((action) => {
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

export default ProductStore;
