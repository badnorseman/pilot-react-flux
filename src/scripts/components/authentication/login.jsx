import React from "react";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Mui from "material-ui";

var TextField = Mui.TextField;
var RaisedButton = Mui.RaisedButton;

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

  styles: {
    Input: {
      cursor: 'pointer',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      width: '100%',
      opacity: '0'
    }
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
          <p>
            {this.state.errors}
          </p>
          <TextField floatingLabelText="Email" value={this.state.email} type="email" ref="email" placeholder="Email" />
          <TextField floatingLabelText="Password" value={this.state.password} type="password" ref="password" placeholder="Password" />
        <RaisedButton label="Login">
          <input type="button" onClick={this.handleSubmit} style={this.styles.Input}/>
        </RaisedButton>
        </form>
      </div>
    )
  }
});
