import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action_types";

module.exports = {
  login: function(record) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN,
      record: record
    });
  },
  login_cb: function(data, errors) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGIN_CB,
      data: data,
      errors: errors
    });
  },
  logout: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOGOUT,
    });
  }
}
