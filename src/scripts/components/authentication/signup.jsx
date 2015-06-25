// Add callback from server to display any error
// Can error be passed down from products.jsx?
// Form could be own component
// Add client-side validation
// Can Login and Signup forms be one?
// Add avatar, paperclip functionality
import React from "react";
import { Link } from "react-router";
import AuthActions from "../../actions/auth_actions";
import AuthStore from "../../stores/auth_store";
import Oauth from "./oauth";
import RequiredField from "./required_field";

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
      errors: this.state.errors = AuthStore.getErrors()
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let email = React.findDOMNode(this.refs.email).value
    let password = React.findDOMNode(this.refs.password).value
    let passwordConfirmation = React.findDOMNode(this.refs.passwordConfirmation).value

    if (email && password && passwordConfirmation) {
      AuthActions.signup({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      })
      this.context.router.transitionTo("Login")
    }
  }

  render() {
    return(
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
                <RequiredField fieldName="email" fieldType="text"/>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <RequiredField fieldName="password" fieldType="password"/>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <RequiredField fieldName="passwordConfirmation" fieldType="password"/>
              </div>
            </div>
            <div className="row">
              <div className="col s12 file-field input-field">
                <input className="file-path" type="text"/>
                <div className="btn">
                  <span>Avatar</span>
                  <input type="file"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <Link to="Products" className="waves-effect waves-light btn">Cancel</Link>
              </div>
              <div className="col s6">
                <button className="btn waves-effect waves-light" type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

Signup.contextTypes = {
  router: React.PropTypes.func.isRequired
};
