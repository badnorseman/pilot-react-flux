import AppDispatcher from "../dispatcher/app_dispatcher";
import ActionTypes from "../constants/action_types";

var ProductActions = {

  add: function(text) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.ADD,
      text: text
    });
  },

  list: function() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.LIST
    });
  },

  remove: function(id) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.REMOVE,
      id: id
    });
  }
};

module.exports = ProductActions;
