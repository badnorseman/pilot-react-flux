var Dispatcher = require("../dispatchers/app_dispatcher");
var ProductConstants = require("../constants/product_constants");

var ProductActions = {
  add: function(product){
    AppDispatcher.handleViewAction({
      actionType:ProductConstants.ADD,
      product: product
    })
  },
  edit: function(product){
    AppDispatcher.handleViewAction({
      actionType:ProductConstants.EDIT,
      product: product
    })
  },
  remove: function(id){
    AppDispatcher.handleViewAction({
      actionType:ProductConstants.REMOVE,
      id: id
    })
  }
};

module.exports = ProductActions;
