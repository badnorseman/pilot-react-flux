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
  mixins: [React.addons.LinkedStateMixin],
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

  onChange: function(e) {
    console.log(e)
    if (this.state.email && !this.state.emailValidation) {
      this.setState({emailValidation: null});
    }

    if (this.state.password && !this.state.passwordValidation) {
      this.setState({passwordValidation: null});
    }

    this.setState(getAuthState());
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var email = this.state.email;
    var password = this.state.password;

    if (!email) {
      this.setState({emailValidation: 'Please enter a email'});
    }

    if (!password) {
      this.setState({passwordValidation: 'Please enter a password'});
    }

    if (email && password) {
      var record = {
        auth_key: email,
        password: password
      };

      this.setState({email: ''});
      this.setState({password: ''});
      AuthActions.login(record);
    }
  },

  render: function() {
    var that = this;
    return (
      <div>
          <p>
            {this.state.errors}
          </p>
          <TextField floatingLabelText="Email" onChange={this.onChange} errorText={this.state.emailValidation} valueLink={this.linkState('email')} type="email" />
          <TextField floatingLabelText="Password" errorText={this.state.passwordValidation} valueLink={this.linkState('password')} type="password" />
          <RaisedButton label="Login">
            <input type="button" onClick={this.handleSubmit} style={this.styles.Input}/>
          </RaisedButton>
      </div>
    )
  }
});
