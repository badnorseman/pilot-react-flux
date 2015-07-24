import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Oauth from "./oauth";
import RequiredField from "../required_field";

export default class Login extends React.Component {
  constructor(context) {
    super(context)
    this.state = {
      errors: []
    }
    this._handleSubmit = this._handleSubmit.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      errors: AuthStore.getErrors()
    })
    if (AuthStore.isLoggedIn()) {
      this.setState({errors: []})
      this.context.router.transitionTo("/products")
    }
  }

  _handleSubmit(e) {
    e.preventDefault()

    let email = this.refs.email.state.fieldValue
    let password = this.refs.password.state.fieldValue

    if (email && password) {
      AuthActions.login({
        auth_key: email,
        password: password
      })
    }
  }

  render() {
    return (
      <div>
        <div className="mdl-grid text-center">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div><Oauth provider="facebook"/></div>
            <div className="divider"></div>
            <div><Oauth provider="google_oauth2"/></div>
            <div>
              <form onSubmit={this._handleSubmit}>
                <div>
                  <RequiredField
                    fieldName="email"
                    fieldType="text"
                    ref="email">
                    Email
                  </RequiredField>
                </div>
                <div>
                  <RequiredField
                    fieldName="password"
                    fieldType="password"
                    ref="password">
                    Password
                  </RequiredField>
                </div>
                <div>
                  <Link
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    to="/products">
                    Cancel
                  </Link>
                  <div className="divider"></div>
                  <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    type="submit">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
}
