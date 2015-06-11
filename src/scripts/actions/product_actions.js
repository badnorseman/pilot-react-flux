import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {
  add: function(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD,
      record: record
    });
  },
  add_cb: function(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_CB,
      data: data,
      errors: errors
    });
  },
  list: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST
    });
  },
  list_cb: function(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LIST_CB,
      data: data,
      errors: errors
    });
  },
  remove: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE,
      id: id
    });
  },
  remove_cb: function(id, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_CB,
      id: id,
      errors: errors
    });
  }
};
