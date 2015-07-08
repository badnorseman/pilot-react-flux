// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Oauth from "./oauth";
import RequiredField from "../required_field";

export default class Signup extends React.Component {
  constructor(context) {
    super(context)
    this.state = {errors: []}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      errors: AuthStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let email = this.refs.email.state.fieldValue
    let password = this.refs.password.state.fieldValue
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue

    if (email && password && passwordConfirmation) {
      AuthActions.signup({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      })
      this.context.router.transitionTo("/login")
    }
  }

  render() {
    return(
      <div>
        <div className="mdl-grid center">
          <div className="mdl-cell mdl-cell--12-col">
            <div>{this.state.errors}</div>
            <div><Oauth provider="facebook"/></div>
            <div><Oauth provider="google_oauth2"/></div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <RequiredField fieldName="email" fieldType="text" ref="email">
                Email</RequiredField>
                <RequiredField fieldName="password" fieldType="password" ref="password">
                Password</RequiredField>
                <RequiredField fieldName="passwordConfirmation" fieldType="password" ref="passwordConfirmation">
                Password Confirmation</RequiredField>
                <div>
                  <Link
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    to="/products">Cancel
                  </Link>
                  <div className="divider"/>
                  <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    type="submit">Sign Up
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

Signup.contextTypes = {
  router: React.PropTypes.func.isRequired
}
