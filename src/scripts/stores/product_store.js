var AppDispatcher = require("../dispatchers/app_dispatcher");
var EventEmitter = require("events").EventEmitter;
var ActionTypes = require("../constants/action_types");
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

  dispatchToken: AppDispatcher.register(function(payload) {
    console.log(payload);
    var action = payload.action;

    switch(action.actionType) {
      case ActionTypes.LIST:
        console.log(action);
        products = action.json;
        break;

      case ActionTypes.ADD:
        add(action.product);
        break;

      case ActionTypes.EDIT:
        edit(action.product);
        break;

      case ActionTypes.REMOVE:
        remove(action.id);
        break;
    }

    ProductStore.emitChange();

    return true;
  })
});

module.exports = ProductStore;
