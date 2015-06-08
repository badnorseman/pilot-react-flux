var AppDispatcher = require("../dispatchers/app_dispatcher");
var ProductConstants = require("../constants/product_constants");

var ProductActions = {
  add: function(product) {
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.ADD,
      product: product
    });
  },
  edit: function(product) {
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.EDIT,
      product: product
    });
  },
  list: function(json) {
    AppDispatcher.handleServerAction({
      actionType: ProductConstants.LIST,
      json: json
    });
  },
  remove: function(id) {
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.REMOVE,
      id: id
    });
  }
};

module.exports = ProductActions;
