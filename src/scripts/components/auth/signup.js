// Form could be own component
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
"use strict";
import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import * as AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Button from "../button";
import InputField from "../input_field";
import Oauth from "./oauth";

export default class Signup extends Component {
  static contextTypes = {
    router: PropTypes.func.isRequired
  }

  constructor(context) {
    super(context);
    this.state = { errors: [] };
    this._handleCancel = this._handleCancel.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange)
  }

  _getStateFromStores() {
    return { errors: AuthStore.getErrors() }
  }

  _handleCancel() {
    this.context.router.transitionTo("/products")
  }

  _handleSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.state.fieldValue;
    let password = this.refs.password.state.fieldValue;
    let passwordConfirmation = this.refs.passwordConfirmation.state.fieldValue;

    if (email && password && passwordConfirmation) {
      AuthActions.signup({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      })
    }
  }

  _onChange() {
    this.setState(this._getStateFromStores())
    if (this.state.errors.length === 0) { this.context.router.transitionTo("/login") }
  }

  render() {
    return (
      <div className="mdl-grid text-center">
        <div className="mdl-cell mdl-cell--12-col">
          <div>{this.state.errors}</div>
          <div><Oauth provider="facebook"/></div>
          <div className="divider"></div>
          <div><Oauth provider="google_oauth2"/></div>
          <div>
            <form onSubmit={this._handleSubmit}>
              <div>
                <InputField
                  fieldName="email"
                  fieldType="text"
                  ref="email">
                  Email
                </InputField>
              </div>
              <div>
                <InputField
                  fieldName="password"
                  fieldType="password"
                  ref="password">
                  Password
                </InputField>
              </div>
              <div>
                <InputField
                  fieldName="passwordConfirmation"
                  fieldType="password"
                  ref="passwordConfirmation">
                  Password Confirmation
                </InputField>
              </div>
              <div>
                <Button name="Cancel" onClick={this._handleCancel}/>
                <div className="divider"></div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
