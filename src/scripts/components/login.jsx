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
  handleSubmit: function(e) {
    e.preventDefault();

    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;

    if (email && password) {
      var record = {
        auth_key: email,
        password: password
      }
      React.findDOMNode(this.refs.email).value = "";
      React.findDOMNode(this.refs.password).value = "";
      AuthActions.login(record);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {this.state.errors}
          </div>
          <div>
            <input type="text" ref="email" placeholder="Email" />
            <input type="password" ref="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
});
