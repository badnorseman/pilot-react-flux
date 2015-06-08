var AppDispatcher = require("../dispatchers/app_dispatcher");
var EventEmitter = require("events").EventEmitter;
var ProductConstants = require("../constants/product_constants");
var AppUtils = require("../utils/app_utils");
var assign = require("object-assign");

var products = [];
var errors = [];

function add(product) {
};

function edit(product) {
};

function remove(id) {
};

var ProductStore = assign({}, EventEmitter.prototype, {

  getProducts: function() {
    products = [
      {
        id: 99,
        name: "name1",
        description: "description1"
      }
    ];
    return products;
  },

  getErrors: function() {
    return errors;
  },

  emitChange: function() {
    this.emit("change");
  },

  addChangeListener: function(callback) {
    this.on("change", callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener("change", callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case ProductConstants.LIST:
        console.log("LIST");
        console.log(action);
        products = action.json.products;
        break;

      case ProductConstants.ADD:
        add(action.product);
        break;

      case ProductConstants.EDIT:
        edit(action.product);
        break;

      case ProductConstants.REMOVE:
        remove(action.id);
        break;
    }

    ProductStore.emitChange();

    return true;
  })
});

module.exports = ProductStore;
