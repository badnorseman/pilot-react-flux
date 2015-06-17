import React from "react";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Mui from "material-ui";

function getAuthState() {
  return {
    user: AuthStore.getUser(),
    errors: AuthStore.getErrors(),
  };
}

module.exports = class Login extends React.Component {
  constructor() {
    super();

    this.constants = {
      emailValidation: 'Please enter a email',
      passwordValidation: 'Please enter a password'
    }
    this.state = getAuthState();
    this.state.email = null;
    this.state.emailValidation = null;
    this.state.password = null;
    this.state.passwordValidation = null;
    this.styles = {
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
    };
  }

  // componentDidMount() {
  //   AuthStore.addChangeListener(this.onChange);
  // }
  //
  // componentWillUnmount() {
  //   AuthStore.removeChangeListener(this.onChange);
  // }

  onChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);

      if (this.state.email && this.state.email !== '' && this.state.emailValidation === this.constants.emailValidation) {
        this.setState({emailValidation: null});
      }

      if (this.state.password && this.state.email !== '' && this.state.passwordValidation === this.constants.passwordValidation) {
        this.setState({passwordValidation: null});
      }

    }.bind(this);

    // this.setState(getAuthState());
  }

  handleSubmit(e) {
    e.preventDefault();

    var email = this.state.email;
    var password = this.state.password;
    if (!email) {
      this.setState({emailValidation: this.constants.emailValidation});
    }

    if (!password) {
      this.setState({passwordValidation: this.constants.passwordValidation});
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
  }

  render() {
    return (
      <div>
        <form>
          <Mui.TextField
                value={this.state.email}
                onChange={this.onChange('email')}
                floatingLabelText="Email"
                errorText={this.state.emailValidation} />
          <Mui.TextField type="password"
                value={this.state.password}
                onChange={this.onChange('password')}
                floatingLabelText="Password"
                errorText={this.state.passwordValidation} />
          <Mui.RaisedButton label="Login">
            <input type="button" onClick={this.handleSubmit.bind(this)} style={this.styles.Input}/>
          </Mui.RaisedButton>
        </form>
      </div>
    );
  }
}
