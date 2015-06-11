import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {

  add: function(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD,
      record: record
    });
  },

  add_cb: function(data, error) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_CB,
      data: data,
      error: error
    });
  },

  list: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST
    });
  },

  list_cb: function(data, error) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_CB,
      data: data,
      error: error
    });
  },

  remove: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    });
  },

  remove_cb: function(id, error) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_CB,
      id: id,
      error: error
    });
  }
};
