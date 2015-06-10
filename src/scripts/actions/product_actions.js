import AppDispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {

  add1: function(record) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.ADD1,
      record: record
    });
  },

  add2: function(json, errors) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.ADD2,
      json: json,
      errors: errors
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

  remove1: function(id) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.REMOVE1,
      id: id
    });
  },

  remove2: function(json, errors) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.REMOVE2,
      json: json,
      errors: errors
    });
  }
};
