import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {

  add: function(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.ADD,
      record: record
    });
  },

  add_cb: function(json, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.ADD_CB,
      json: json,
      errors: errors
    });
  },

  list: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.LIST
    });
  },

  list_cb: function(json, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.LIST_CB,
      json: json,
      errors: errors
    });
  },

  remove: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.REMOVE,
      id: id
    });
  },

  remove_cb: function(json, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ActionTypes.REMOVE_CB,
      json: json,
      errors: errors
    });
  }
};
