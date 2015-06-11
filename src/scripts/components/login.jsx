import React from "react";
import AuthActions from "../actions/auth_actions";
import AuthStore from "../stores/auth_store";

function getAuthState() {
  return {
    user: AuthStore.getUser(),
    errors: AuthStore.getErrors()
  };
}

module.exports = React.createClass({
  getInitialState: function() {
    return getAuthState();
  },
  componentDidMount: function() {
    AuthStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    AuthStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState(getAuthState);
  },
  onSubmit: function(e) {
    e.preventDefault();

    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;

    if (email && password) {
      var record = {
        auth_key: email,
        password: password
      }
      AuthActions.login(record);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            {this.state.errors}
          </div>
          <div>
            <input type="text" ref="email" placeholder="Email" />
            <input type="text" ref="password" placeholder="Password" />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
});
