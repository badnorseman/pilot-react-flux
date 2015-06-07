import AppDispatcher from "../dispatchers/app_dispatcher.js";
import ProductConstants from "../constants/product_constants.js";

var ProductActions = {
  add:function(product){
    AppDispatcher.handleViewAction({
      actionType:ProductConstants.ADD,
      product: product
    })
  },
  edit:function(product){
    AppDispatcher.handleViewAction({
      actionType:ProductConstants.EDIT,
      product: product
    })
  },
  remove:function(id){
    AppDispatcher.handleViewAction({
      actionType:ProductConstants.REMOVE,
      id: id
    })
  }
}

module.exports = ProductActions;
