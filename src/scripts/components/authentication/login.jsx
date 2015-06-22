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
    };
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
        opacity: '0',
      },
      Button: {
        'marginTop': '2em',
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'width': '13em'
      },
      TextFields: {
        width: '85%',
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto'
      }
    };
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
  }

  onChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);

      // removes clientsidevalidattion errors if email or password has been added, further email regex check could be added as well
      if (this.state[key] && this.state[key + 'Validation'] !== null) {
        var validationState = {};
        validationState[key+'Validation'] = null;
        this.setState(validationState);
      }

      this.setState(getAuthState());
    }.bind(this);
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
        <Mui.RaisedButton label="Login with Facebook" style={this.styles.Button}>
          <input type="button" style={this.styles.Input}/>
        </Mui.RaisedButton>
        <Mui.RaisedButton label="Login with Google" style={this.styles.Button}>
          <input type="button" style={this.styles.Input}/>
        </Mui.RaisedButton>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Mui.TextField
            style={this.styles.TextFields}
            value={this.state.email}
            onChange={this.onChange('email')}
            floatingLabelText="Email"
            errorText={this.state.emailValidation} />
          <Mui.TextField type="password"
            style={this.styles.TextFields}
            value={this.state.password}
            onChange={this.onChange('password')}
            floatingLabelText="Password"
            errorText={this.state.passwordValidation} />
          <Mui.RaisedButton label="Login" style={this.styles.Button}>
            <input type="button" onClick={this.handleSubmit.bind(this)} style={this.styles.Input}/>
          </Mui.RaisedButton>
        </form>
      </div>
    );
  }
};
