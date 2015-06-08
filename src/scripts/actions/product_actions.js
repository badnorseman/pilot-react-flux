var AppDispatcher = require("../dispatchers/app_dispatcher");
var ProductConstants = require("../constants/product_constants");
var AppUtils = require("../utils/app_utils");

console.log("ProductActions");

module.exports = {
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
  list: function() {
    console.log("ProductActions list");
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.LIST
    });
    AppUtils.list();
  },
  remove: function(id) {
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.REMOVE,
      id: id
    });
  }
};
