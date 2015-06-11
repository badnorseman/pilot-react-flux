import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {

  add: function(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD,
      record: record
    });
  },

  add_cb: function(json, error) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_CB,
      json: json,
      error: error
    });
  },

  list: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST
    });
  },

  list_cb: function(json, error) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_CB,
      json: json,
      error: error
    });
  },

  remove: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    });
  },

  remove_cb: function(error) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_CB,
      error: error
    });
  }
};
