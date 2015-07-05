import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Oauth from "./oauth";
import RequiredField from "../required_field";

export default class Login extends React.Component {
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
    if (AuthStore.loggedIn()) {
      this.setState({errors: []})
      this.context.router.transitionTo("/products")
    }
  }

  handleSubmit(e) {
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
        <div className="row">
          <div className="col s12">
            {this.state.errors}
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <Oauth provider="facebook"/>
          </div>
          <div className="col s6">
            <Oauth provider="google_oauth2"/>
          </div>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12 input-field">
                <RequiredField fieldName="email" fieldType="text" ref="email">
                Email</RequiredField>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <RequiredField fieldName="password" fieldType="password" ref="password">
                Password</RequiredField>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="/products" className="btn waves-effect waves-light">Cancel</Link>
              </div>
              <div className="col s6">
                <button className="btn waves-effect waves-light" type="submit">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
}
