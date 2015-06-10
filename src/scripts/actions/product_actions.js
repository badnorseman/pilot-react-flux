import AppDispatcher from "../dispatcher/app_dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {

  add: function(text) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.ADD,
      text: text
    });
  },

  list1: function() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.LIST1
    });
  },

  list2: function(json, errors) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.LIST2,
      json: json,
      errors: errors
    });
  },

  remove: function(id) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.REMOVE,
      id: id
    });
  }
};
